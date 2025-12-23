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
      {/* <AppProps props={props} /> */}
      <AppFooter />
    </div>
  );
}

const heading = "Loader";
const description = `The BlockSwapLoader is a dynamic loader component where blocks periodically swap positions with smooth animations using Framer Motion. It simulates a lively, engaging visual effect by swapping two random blocks every 1.5 seconds.`;

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
    content: <CodeSnippet theme="dark" code={"npm install framer-motion"} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>,
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
          components/ui/block-swap-loader.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BlockSwapLoader: React.FC = () => {
  const [blocks, setBlocks] = useState([0, 1, 2, 3, 4]);
  const [animatingBlocks, setAnimatingBlocks] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const swapBlocks = () => {
      const index1 = Math.floor(Math.random() * 5);
      let index2;
      do {
        index2 = Math.floor(Math.random() * 5);
      } while (index2 === index1);

      setAnimatingBlocks([index1, index2]);
      setAnimationKey((prevKey) => prevKey + 1);
      setBlocks((prevBlocks) => {
        const newBlocks = [...prevBlocks];
        const temp = newBlocks[index1];
        newBlocks[index1] = newBlocks[index2];
        newBlocks[index2] = temp;
        return newBlocks;
      });
    };

    const intervalId = setInterval(swapBlocks, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1">
      {blocks.map((block, index) => {
        const first = animatingBlocks[0] === index;
        const second = animatingBlocks[1] === index;

        const diff = animatingBlocks[1] - animatingBlocks[0];

        return (
          <motion.div
            key={\`\${block}-\${animationKey}\`}
            animate={first ? "up" : second ? "down" : false}
            variants={{
              up: {
                y: [0, -36, -36, 0],
                x: [0, 0, diff * 36, diff * 36],
              },
              down: {
                y: [0, 36, 36, 0],
                x: [
                  0,
                  0,
                  diff * -36,
                  diff * -36,
                ],
              },
            }}
            transition={{
              duration: 1,
              repeat: 0,
            }}
            className="w-8 h-8 bg-primary rounded-sm"
          />
        );
      })}
    </div>
  );
};

export default BlockSwapLoader;
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
    name: "tags",
    type: "Tag",
    required: true,
    default: "",
    description: "List of Tags entered by user.",
  },
  {
    name: "setTags",
    type: "setStateAction<Tag>",
    required: true,
    default: "",
    description: "State Action to set Tags.",
  },
];
