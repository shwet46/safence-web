"use client";
import { useState } from "react";

export default function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const [error, setError] = useState<string | null>(null);

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

          {/* Email/password form */}
          <form
            className="w-full space-y-4 mb-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                isSignup
                  ? `Signup is disabled. (Name: ${form.name}, Email: ${form.email})`
                  : `Login is disabled. (Email: ${form.email})`
              );
            }}
          >
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <input
                type="password"
                required
                minLength={6}
                className="w-full rounded-xl border border-slate-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
            >
              {isSignup ? "Create account" : "Sign in"}
            </button>
          </form>

          {/* Separator */}


          {/* Toggle Signin/Signup */}
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            {isSignup ? (
              <span>
                Already have an account?{" "}
                <button className="text-purple-600 dark:text-purple-400 font-medium hover:underline" onClick={() => { setIsSignup(false); setError(null); }}>
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                New here?{" "}
                <button className="text-purple-600 dark:text-purple-400 font-medium hover:underline" onClick={() => { setIsSignup(true); setError(null); }}>
                  Create an account
                </button>
              </span>
            )}
          </div>

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