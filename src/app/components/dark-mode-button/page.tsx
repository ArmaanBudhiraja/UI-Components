import AppPreview from "@/components/app-preview";
import AppHeading from "@/components/app-heading";
import Timeline from "@/components/ui/timeline";
import CodeSnippet from "@/components/ui/code-snippet";
import AppProps from "@/components/app-props";
import AppFooter from "@/components/app-footer";
import Code from "./code";
import Preview from "./preview";

export default function Page() {
  return (
    <div className="flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden">
      <AppHeading heading={heading} description={description} />
      <AppPreview Code={<Code />} Preview={<Preview />} />
      <Timeline steps={steps} />
      <AppProps props={props} />
      <AppFooter />
    </div>
  );
}

const heading = "Dark Mode Toggle Button";
const description = `The DayNightToggleButton is an animated switch that toggles between day and night modes, with a moving sun or moon and dynamic elements like clouds or stars. It uses Framer Motion for smooth transitions and visually represents the selected mode.`;

const steps = [
  {
    key: 1,
    title: "Install Dependencies",
    height: "5rem",
    content: (
      <CodeSnippet theme="dark" code={"npm i motion clsx tailwind-merge"} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>
    ),
  },
  {
    key: 2,
    title: "Install Dependencies For Animations",
    height: "6rem",
    content: <CodeSnippet theme="dark" code={"npm install motion"} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>,
  },
  {
    key: 3,
    title: "Add Util File",
    height: "15rem",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">lib/utils.ts</p>
        <CodeSnippet
          theme="dark"
          className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
          code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
        />
      </>
    ),
  },
  {
    key: 4,
    height: "28rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/dark-mode-button.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import { motion } from "framer-motion";
import React from "react";

interface DayNightToggleButtonProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
}

export default function DayNightToggleButton({
  dark,
  setDark,
}: DayNightToggleButtonProps) {
  return (
    <motion.div
      onClick={() => setDark(!dark)}
      className={\`relative flex items-center justify-between w-32 h-12 p-2 rounded-full cursor-pointer\`}
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
      className={\`w-10 h-10 rounded-full relative \${dark ? "bg-gray-200" : "bg-yellow-400"}\`}
      animate={dark ? { x: "-4px" } : { x: "76px" }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        boxShadow: dark
          ? "0px 0px 0px rgba(0, 0, 0, 0.3)"
          : "0px 0px 10px 2px rgba(255, 204, 0, 0.6), 0px 0px 15px 4px rgba(255, 204, 0, 0.4)",
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
          width: \`\${120}px\`,
          height: \`\${120}px\`,
          top: \`\${0}px\`,
          left: \`\${-5}px\`,
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
      {/* Add more SVGs here for clouds */}
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
          width: \`\${8}px\`,
          height: \`\${8}px\`,
          top: \`\${8}px\`,
          right: \`\${60}px\`,
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
          d=\`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 
          0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 
          3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 
          1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 
          21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 
          0-.611-1.879L2.16 9.795a.53.53 0 0 1 
          .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\`
        />
      </motion.svg>
    </motion.div>
  );
}


`}
        />
      </>
    ),
  },
  {
    key: 5,
    title: "Ready To Use",
    height: "5rem",
    content: <></>,
  },
];

const props = [
  {
    name: "dark",
    type: "string",
    required: true,
    default: "set by user",
    description: "State of Theme.",
  },
  {
    name: "setDark",
    type: "string",
    required: true,
    default: "state action",
    description: "State Action to change Theme.",
  },
  {
    name: "size",
    type: "sm | lg",
    required: false,
    default: "md",
    description: "Size of button accoring to user prefference.",
  },
];
