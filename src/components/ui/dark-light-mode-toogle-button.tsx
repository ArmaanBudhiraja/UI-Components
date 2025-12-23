"use client";

import { motion } from "framer-motion";
import React from "react";

interface DayNightToggleButtonProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  size?:number;
}

export default function DayNightToggleButton({
  dark,
  setDark,
}: DayNightToggleButtonProps) {
  return (
    <motion.div
      onClick={() => setDark(!dark)}
      className={`relative flex items-center justify-between w-32 h-12 p-2 rounded-full cursor-pointer`}
      animate={dark ? "night" : "day"}
      initial="day"
      variants={{
        day: {
          background: "linear-gradient(135deg, #87CEEB, #00BFFF)",
        },

        night: {
          background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        },
      }}
      style={{ transition: "background 0.3s ease-in-out" }}
    >
      <MoonSun dark={dark} />

      {dark ? <Star /> : <Clouds />}
    </motion.div>
  );
}

function MoonSun({ dark }: { dark: boolean }) {
  return (
    <motion.div
      className={`w-10 h-10 rounded-full relative ${
        dark ? "bg-gray-200" : "bg-yellow-400"
      }`}
      animate={dark ? { x: "-4px" } : { x: "76px" }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        boxShadow: dark
          ? "0px 0px 0px rgba(0, 0, 0, 0.3)" 
          : `0px 0px 10px 2px rgba(255, 204, 0, 0.6), 0px 0px 15px 4px rgba(255, 204, 0, 0.4)`, 
      }}
    />
  );
}

function Clouds() {
  return (
    <motion.div
      className="absolute top-2 left-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        className="absolute rounded-full lucide lucide-cloud"
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        animate={{
          x: [0, 5, 0],
          y: [0, -2, 0],
        }}
        style={{
          width: `${120}px`,
          height: `${120}px`,
          top: `${0}px`,
          left: `${-5}px`,
        }}
        viewBox="0 0 50 200"
        fill="#FFF"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </motion.svg>
      <motion.svg
        className="absolute rounded-full lucide lucide-cloud"
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        animate={{
          x: [0, 5, 0],
          y: [0, -2, 0],
        }}
        style={{
          width: `${150}px`,
          height: `${150}px`,
          top: `${6}px`,
          left: `${-50}px`,
        }}
        viewBox="0 0 50 200"
        fill="#FFF"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </motion.svg>
      <motion.svg
        className="absolute rounded-full lucide lucide-cloud"
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        animate={{
          x: [0, 5, 0],
          y: [0, -2, 0],
        }}
        style={{
          width: `${100}px`,
          height: `${100}px`,
          top: `${24}px`,
          left: `${-6}px`,
        }}
        viewBox="0 0 50 200"
        fill="#FFF"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </motion.svg>
    </motion.div>
  );
}

function Star() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute lucide lucide-star"
        style={{
          width: `${8}px`,
          height: `${8}px`,
          top: `${8}px`,
          right: `${60}px`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <path
          fill="white"
          stroke="white"
          strokeWidth="1"
          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute lucide lucide-star"
        style={{
          width: `${15}px`,
          height: `${15}px`,
          top: `${15}px`,
          right: `${15}px`,
          rotate: `-45deg`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <path
          fill="white"
          stroke="white"
          strokeWidth="1"
          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute lucide lucide-star"
        style={{
          width: `${30}px`,
          height: `${8 + 5}px`,
          top: `${30}px`,
          right: `${35}px`,
          rotate: `45deg`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path
          fill="white"
          stroke="white"
          strokeWidth="1"
          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
      </motion.svg>
    </motion.div>
  );
}
