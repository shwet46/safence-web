import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface NextAuthConfig {
    providers: Array<Provider>;
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

  interface User extends DefaultUser {
    id: string;
    username: string | null;
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