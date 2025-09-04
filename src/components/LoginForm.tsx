"use client";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-indigo-950/20 px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Wavy Background Only */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 800" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="purpleWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(147 51 234)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="rgb(79 70 229)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="purpleWave2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.04" />
              <stop offset="50%" stopColor="rgb(99 102 241)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="rgb(139 69 231)" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q300,150 600,300 T1200,300 L1200,0 L0,0 Z" fill="url(#purpleWave1)" />
          <path d="M0,500 Q400,350 800,500 T1600,500 L1600,0 L0,0 Z" fill="url(#purpleWave2)" />
        </svg>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-800/50 p-8 flex flex-col items-center transform hover:scale-[1.02] transition-all duration-300 ease-out">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-500 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              Sign in to continue to your account
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            className="group w-full flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-200 font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out border border-slate-200 dark:border-zinc-700 hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-0.5 active:translate-y-0"
            onClick={() => signIn("google")}
          >
            {/* Google Icon */}
            <div className="flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                  <path d="M47.532 24.552c0-1.638-.147-3.204-.419-4.704H24.468v9.021h13.011c-.561 3.021-2.237 5.583-4.771 7.299v6.06h7.701c4.505-4.151 7.123-10.263 7.123-17.676z" fill="#4285F4"/>
                  <path d="M24.468 48c6.48 0 11.926-2.147 15.902-5.841l-7.701-6.06c-2.137 1.438-4.872 2.292-8.201 2.292-6.308 0-11.646-4.263-13.561-10.021H2.563v6.292C6.522 43.982 14.799 48 24.468 48z" fill="#34A853"/>
                  <path d="M10.907 28.37c-.521-1.438-.819-2.979-.819-4.37s.298-2.932.819-4.37v-6.292H2.563A23.97 23.97 0 000 24c0 3.979.957 7.75 2.563 11.062l8.344-6.692z" fill="#FBBC05"/>
                  <path d="M24.468 9.871c3.53 0 6.684 1.216 9.176 3.601l6.872-6.872C36.39 2.147 30.948 0 24.468 0 14.799 0 6.522 4.018 2.563 10.938l8.344 6.292c1.915-5.758 7.253-10.021 13.561-10.021z" fill="#EA4335"/>
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-base">Continue with Google</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              By continuing, you agree to our{' '}
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
    </section>
  );
}