"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  className?: string;
};

export default function WavyBackground({ className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(124 58 237)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(192 132 252)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Front animated wave */}
        <motion.path
          d="M0,300 Q300,200 600,300 T1200,300 L1200,0 L0,0 Z"
          fill="url(#waveGradient1)"
          animate={{
            d: [
              "M0,300 Q300,200 600,300 T1200,300 L1200,0 L0,0 Z",
              "M0,320 Q320,210 600,320 T1200,320 L1200,0 L0,0 Z",
              "M0,300 Q300,200 600,300 T1200,300 L1200,0 L0,0 Z",
            ],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />

        {/* Middle animated wave */}
        <motion.path
          d="M0,400 Q250,320 600,400 T1200,400 L1200,0 L0,0 Z"
          fill="url(#waveGradient3)"
          animate={{
            d: [
              "M0,400 Q250,320 600,400 T1200,400 L1200,0 L0,0 Z",
              "M0,390 Q270,340 600,390 T1200,390 L1200,0 L0,0 Z",
              "M0,400 Q250,320 600,400 T1200,400 L1200,0 L0,0 Z",
            ],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        {/* Back animated wave */}
        <motion.path
          d="M0,500 Q200,400 600,500 T1200,500 L1200,0 L0,0 Z"
          fill="url(#waveGradient2)"
          animate={{
            d: [
              "M0,500 Q200,400 600,500 T1200,500 L1200,0 L0,0 Z",
              "M0,490 Q220,420 600,490 T1200,490 L1200,0 L0,0 Z",
              "M0,500 Q200,400 600,500 T1200,500 L1200,0 L0,0 Z",
            ],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </svg>

      {/* Enhanced glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 via-transparent to-purple-900/20 blur-3xl" />

      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full blur-sm"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300/30 rounded-full blur-sm"
        animate={{ y: [0, 40, 0], x: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500/40 rounded-full blur-sm"
        animate={{ y: [0, -25, 0], x: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
      />
    </motion.div>
  );
}
