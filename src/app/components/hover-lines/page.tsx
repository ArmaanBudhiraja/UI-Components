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

const heading = "Hover Lines";
const description = `The HoverLines component is an interactive vertical navigation menu with animated headings and lines that dynamically resize based on the user's mouse movement. It uses Framer Motion for smooth spring animations, creating an engaging visual effect.`;

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
          components/ui/hover-lines.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import React, { useRef, useState } from "react";

type LineAnimationProps = {
  width: number;
};

export default function HoverLines({ headings }: { headings: string[] }) {
  const style = \`h-1 w-4 bg-primary\`;

  const smallLineRef = useRef<(HTMLDivElement | null)[]>([]);

  const bigLineControls = useAnimationControls();
  const headingControls = useAnimationControls();

  const mouseY = useMotionValue(0);

  const [lineAnimationProps, setLineAnimationProps] = useState<
    LineAnimationProps[]
  >([]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    mouseY.set(event.clientY);

    const newAnimationProps = smallLineRef.current.map((ele) => {
      if (!ele) return { width: 16 };

      const { top } = ele.getBoundingClientRect();
      const diff = Math.abs(mouseY.get() - top);

      const width = Math.max((1 - Math.min(diff / 150, 1)) * 10 * 16, 16);

      return {
        width,
      };
    });

    setLineAnimationProps(newAnimationProps);
  }

  const handleMouseEnter = () => {
    bigLineControls.start("hover");
    headingControls.start("hover");
  };

  const handleMouseLeave = () => {
    bigLineControls.start("noHover");
    headingControls.start("noHover");
    const resetAnimationProps = smallLineRef.current.map(() => ({
      width: 16,
      transition: {
        type: "spring",
      },
    }));

    setLineAnimationProps(resetAnimationProps);
  };

  return (
    <div
      className="fixed right-0 top-0 h-screen flex flex-col justify-around w-[14rem] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {headings.map((ele, index1) => {
        return (
          <div
            key={ele}
            className="flex flex-col justify-around h-full items-end"
          >
            <motion.div
              className={cn(style, "w-8")}
              animate={bigLineControls}
              variants={{
                hover: { width: "12rem" },
                noHover: { width: "2rem" },
              }}
              transition={{
                type: "spring",
              }}
            >
              <motion.p
                variants={{
                  noHover: { x: "3rem" },
                  hover: { x: "0.4rem" },
                }}
                className="translate-x-8 w-48"
                animate={headingControls}
              >
                {ele}
              </motion.p>
            </motion.div>
            {Array.from({ length: 4 }, (_, index2) => index2 + 1).map(
              (ele, index2) => {
                const currentLineIndex = index1 * 4 + index2;

                return (
                  <motion.div
                    className={cn(style)}
                    key={index2}
                    ref={(ele: HTMLDivElement | null) => {
                      smallLineRef.current[currentLineIndex] = ele;
                    }}
                    animate={lineAnimationProps[currentLineIndex]}
                    transition={{
                      type: "spring",
                      damping: 50,
                      stiffness: 1000,
                      // duration:0.1,
                    }}
                  />
                );
              }
            )}
          </div>
        );
      })}
    </div>
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
    name: "headings",
    type: "string[]",
    required: true,
    default: "",
    description: "List of Sidebar Items.",
  },
];
