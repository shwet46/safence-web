import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

interface GmailHeader {
  name: string;
  value: string;
}

interface GmailMessage {
  id: string;
  threadId: string;
}

interface GmailMessageList {
  messages?: GmailMessage[];
}

interface GmailMessagePart {
  mimeType: string;
  body?: {
    data?: string;
  };
}

interface GmailEmail {
  id: string;
  subject: string;
  from: string;
  snippet: string;
  date: string;
  threadId: string;
  body?: string;
}

function decodeBase64(str: string) {
  return Buffer.from(str.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const listRes = await fetch(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=30",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!listRes.ok) {
      throw new Error(`Failed to fetch email list: ${listRes.statusText}`);
    }

    const listData: GmailMessageList = await listRes.json();

    const emails = await Promise.all(
      (listData.messages || []).map(async (msg) => {
        const res = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!res.ok) {
          console.error(`Failed to fetch email ${msg.id}: ${res.statusText}`);
          return null;
        }

        const emailData = await res.json();
        const headers: GmailHeader[] = emailData.payload?.headers || [];

        const subject =
          headers.find((h) => h.name === "Subject")?.value || "No Subject";
        const from =
          headers.find((h) => h.name === "From")?.value || "Unknown";
        const date = headers.find((h) => h.name === "Date")?.value || "";


        let body = "";
        if (emailData.payload?.parts?.length) {
          const part = emailData.payload.parts.find(
            (p: GmailMessagePart) => p.mimeType === "text/plain"
          );
          if (part?.body?.data) {
            body = decodeBase64(part.body.data);
          }
        } else if (emailData.payload?.body?.data) {
          body = decodeBase64(emailData.payload.body.data);
        }

        return {
          id: emailData.id,
          threadId: emailData.threadId,
          subject,
          from,
          date,
          snippet: emailData.snippet,
          body,
        } as GmailEmail;
      })
    );

    // 3️⃣ Filter invalid and sort
    const validEmails = emails
      .filter((e): e is GmailEmail => e !== null)
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

    return NextResponse.json({ emails: validEmails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return NextResponse.json(
      { error: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}