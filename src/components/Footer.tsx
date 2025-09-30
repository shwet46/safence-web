import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-xl">
      {/* Top gradient accent */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(1200px_400px_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-500/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 select-none">
              <Image
                src="/logo.png"
                alt="Safence logo"
                width={128}
                height={32}
                className="h-8 w-auto"
                priority
              />
              <span className="text-xl sm:text-2xl font-extrabold leading-none tracking-tight">
                <span className="text-purple-700 dark:text-purple-400 drop-shadow">
                  Safe
                </span>
                <span className="bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-white dark:to-zinc-100 bg-clip-text text-transparent drop-shadow">
                  nce
                </span>
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
              Your personal guardian against scams. Stay protected with
              intelligent analysis and secure tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-3">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <a href="#" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-700 hover:text-purple-700 dark:text-zinc-300 dark:hover:text-purple-400 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Stay in touch */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-3">
              Stay in touch
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Follow updates and announcements.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 hover:border-purple-400/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.26.74-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.18a11.06 11.06 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.62.23 2.82.11 3.12.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 hover:border-purple-400/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.8 10.3 20.9 2h-1.7l-6.1 7.2L8 2H2l7.5 10.9L2 22h1.7l6.6-7.7L16 22h6l-8.2-11.7ZM11 13.2l-.8-1.1L4.3 3.3h2.7l4.1 5.9.8 1.1 6.2 8.9h-2.7L11 13.2Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 hover:border-purple-400/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM14.5 9A4.5 4.5 0 0 0 10 13.5V21h4v-6a2 2 0 1 1 4 0v6h4v-7.5A4.5 4.5 0 0 0 17.5 9h-3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Safence. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
