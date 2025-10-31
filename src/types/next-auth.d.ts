import { DefaultSession, DefaultUser } from 'next-auth';
import { OAuthConfig } from 'next-auth/providers';

declare module 'next-auth' {
  interface NextAuthConfig {
    providers: Array<Provider | OAuthConfig>;
    session?: {
      strategy?: 'jwt' | 'database';
      maxAge?: number;
      updateAge?: number;
    };
    pages?: {
      signIn?: string;
      signOut?: string;
      error?: string;
      verifyRequest?: string;
      newUser?: string;
    };
    callbacks?: {
      signIn?: (params: { user: User; account: Account | null }) => Promise<boolean>;
      jwt?: (params: { token: JWT; user?: User; account?: Account | null }) => Promise<JWT>;
      session?: (params: { session: Session; token: JWT }) => Promise<Session>;
    };
    secret?: string;
  }

  interface Session {
    user: {
      id: string;
      username: string | null;
      email: string;
    } & DefaultSession['user'];
    accessToken: string;
    refreshToken: string;
    calendarEnabled: boolean;
    expires?: string;
  }

  interface Account {
    provider: string;
    type: string;
    providerAccountId: string;
    accessToken?: string;
    refreshToken?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
  }

  interface User extends DefaultUser {
    id: string;
    username: string | null;
    oauthProvider?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string | null;
    accessToken: string;
    refreshToken: string;
  }
}