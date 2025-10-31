"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import { EmailItem } from "@/components/EmailItem";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface Email {
  id: string;
  subject: string;
  from: string;
  snippet: string;
  date: string;
  threadId: string;
  body?: string;
}

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
  }
}

export default function MailsPage() {
  const { data: session, status } = useSession();
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedEmailId, setExpandedEmailId] = useState<string | null>(null);

  const fetchEmails = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch("/api/gmails", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch emails");
      const data = await response.json();
      setEmails(data.emails);
    } catch (error) {
      console.error("Error fetching emails:", error);
      setError("Failed to load emails. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [session?.accessToken]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Inbox
          </h1>
          {session?.user?.image && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {session.user.email}
              </span>
              <Image
                src={session.user.image}
                alt={session.user.name || "Profile"}
                width={28}
                height={28}
                className="rounded-full"
              />
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-[70vh]">
            <div className="animate-spin rounded-full h-6 w-6 border border-gray-300 border-t-gray-900 dark:border-zinc-700 dark:border-t-white"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">{error}</p>
            <button
              onClick={fetchEmails}
              className="mt-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-zinc-800">
            {emails.length > 0 ? (
              emails.map((email) => (
                <EmailItem 
                  key={email.id} 
                  {...email} 
                  isExpanded={expandedEmailId === email.id}
                  onToggleExpand={(id) => setExpandedEmailId(expandedEmailId === id ? null : id)}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  Your inbox is empty
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
