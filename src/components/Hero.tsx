"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-zinc-50 dark:bg-zinc-950 px-4 py-20 overflow-hidden">
      {/* Purple Wavy Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="purpleWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(88 28 135)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(67 56 202)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="rgb(107 33 168)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="purpleWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(107 33 168)" stopOpacity="0.05" />
              <stop offset="50%" stopColor="rgb(79 70 229)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(88 28 135)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Large flowing waves */}
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#purpleWave1)"
          />
          <path
            d="M0,400 Q200,300 400,400 T800,400 Q1000,350 1200,400 L1200,0 L0,0 Z"
            fill="url(#purpleWave2)"
          />
          
          {/* Subtle wave pattern overlay */}
          <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="120" height="80">
            <path
              d="M0,40 Q30,20 60,40 T120,40"
              stroke="rgb(59 7 100)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              className="dark:stroke-purple-950"
            />
            <path
              d="M0,0 Q30,20 60,0 T120,0"
              stroke="rgb(88 28 135)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
              className="dark:stroke-purple-900"
            />
            <path
              d="M0,80 Q30,60 60,80 T120,80"
              stroke="rgb(107 33 168)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
              className="dark:stroke-purple-800"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Radial gradient for the container to give a faded look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-50 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)] dark:bg-zinc-950"
      ></motion.div>

      <div className="relative z-10 max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Subheading */}
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium tracking-wide"
        >
          Keep yourself safe and organized
        </motion.h3>

        {/* Main Title with Dark Purple to Indigo to Purple Gradient */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tighter drop-shadow-lg dark:drop-shadow-xl"
        >
          <span className="text-purple-800 dark:text-purple-500">Safe</span>
          <span className="text-white dark:text-white">nce</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Your personal assistant to keep yourself safe from scammers and organized with your important information.
        </motion.p>

        {/* Call to Action Button - Updated to match headline gradient */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="pt-8"
        >
          <Link href="/login" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-12 py-5
                         bg-purple-800 dark:bg-purple-500
                         text-white dark:text-white font-bold text-lg rounded-2xl
                         overflow-hidden shadow-2xl transition-all duration-300 ease-out
                         hover:ring-4 hover:ring-purple-400/50 dark:hover:ring-purple-300/50"
            >
              <span className="relative z-10">Get Started</span>
              {/* Subtle hover effect for button */}
              <span className="absolute inset-0 w-full h-full bg-purple-900 dark:bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;