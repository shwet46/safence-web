"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function OAuthLogin() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-4">
          {session.user?.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Profile"}
              width={64}
              height={64}
              className="rounded-full ring-2 ring-blue-500 p-1"
            />
          ) : (
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {session.user?.name?.[0] || "U"}
              </span>
            </div>
          )}
        </div>
        <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
          {session.user?.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {session.user?.email}
        </p>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <button
        onClick={() => signIn("google", { callbackUrl: "/gmails" })}
        className="w-full flex items-center justify-center px-6 py-3.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
      >
        <div className="bg-white dark:bg-transparent rounded-full p-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285f4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34a853"
            />
            <path
              d="M12 5.38v4.62h8.36c-.13-.78-.45-1.52-.95-2.21C17.87 5.86 15.09 4 12 4c-2.37 0-4.47 1.19-5.71 3H2.18v2.84C3.99 6.47 7.7 4 12 4v1.38z"
              fill="#fbbc05"
            />
            <path
              d="M12 0C7.31 0 3.19 2.61 1.36 6.41l4.01 3.12C6.56 6.93 9.07 5 12 5c2.92 0 5.42 1.93 6.64 4.53l3.57-2.77C19.99 3.01 16.28 0 12 0z"
              fill="#ea4335"
            />
          </svg>
        </div>
        <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          Continue with Google
        </span>
      </button>
    </div>
  );
}