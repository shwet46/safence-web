"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WavyBackground from "@/components/ui/WavyBackground";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-zinc-50 via-purple-50/30 to-zinc-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-zinc-950 px-4 py-20 overflow-hidden">
      {/* Wavy Background */}
      <WavyBackground className="absolute inset-0 z-0 overflow-hidden" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-50/50 via-purple-50/20 to-zinc-50/50 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)] dark:from-zinc-950/50 dark:via-purple-950/10 dark:to-zinc-950/50"
      />

      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.png"
          alt="Safence Logo"
          width={192}
          height={48}
          priority
          sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
          className="h-12 w-auto sm:h-14 md:h-16 drop-shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-tighter"
        >
          <span className="text-purple-700 dark:text-purple-400 drop-shadow-2xl">
            Safe
          </span>
          <span className="bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-white dark:to-zinc-100 bg-clip-text text-transparent drop-shadow-2xl">
            nce
          </span>
        </motion.h1>


        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800 dark:from-zinc-300 dark:to-zinc-400 max-w-3xl mx-auto leading-relaxed"
        >
          Your personal guardian against scams
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Stay organized and protected with intelligent email analysis,
          fraud detection, and secure information management.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/login" passHref legacyBehavior>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-10 py-4
                         bg-gradient-to-br from-purple-700 to-purple-900 dark:from-purple-500 dark:to-purple-700
                         text-white font-bold text-lg rounded-2xl
                         overflow-hidden shadow-xl transition-all duration-300 ease-out
                         hover:shadow-2xl hover:shadow-purple-500/50 border border-purple-600/20"
              type="button"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center px-10 py-4
                       bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm
                       text-purple-800 dark:text-purple-300 font-semibold text-lg rounded-2xl
                       border-2 border-purple-200 dark:border-purple-800/50
                       hover:bg-purple-50 dark:hover:bg-purple-950/50
                       hover:border-purple-300 dark:hover:border-purple-700
                       shadow-lg transition-all duration-300"
            type="button"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}