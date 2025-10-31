export interface GmailMessage {
  id: string;
  threadId: string;
}

export interface GmailMessageList {
  messages: GmailMessage[];
  nextPageToken?: string;
}

export interface GmailHeader {
  name: string;
  value: string;
}

export interface GmailEmailPayload {
  headers: GmailHeader[];
  mimeType: string;
  body?: {
    data?: string;
    size?: number;
  };
  parts?: Array<{
    body: {
      data?: string;
      size?: number;
    };
    mimeType: string;
  }>;
}

export interface GmailEmail {
  id: string;
  threadId: string;
  snippet: string;
  payload: GmailEmailPayload;
}