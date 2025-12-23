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

const heading = "Progress Bar";
const description = `The ProgressBar component is a multi-step progress indicator that visually tracks the current step and completed steps with animations using Framer Motion. It supports navigation through next and prev methods, exposing these controls via a ref for external control.`;

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
    content: <CodeSnippet theme="dark" code={`npm install framer-motion`} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>,
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
          components/ui/progress-bar.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import { Check } from "lucide-react";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressBarProps {
  steps: number;
}

export interface ProgressBarRef {
  next: () => void;
  prev: () => void;
}

function ProgressBar({ steps }: ProgressBarProps, ref: Ref<ProgressBarRef>) {
  const [step, setStep] = useState<number>(0);

  const next = () => step < steps && setStep((state) => state + 1);

  const prev = () => step > 0 && setStep((state) => state - 1);

  useImperativeHandle(ref, () => ({
    next,
    prev,
  }));

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center">
        {Array.from({ length: steps }, (_, index) => index).map((element) => (
          <motion.div key={element} className="flex items-center">
            <motion.div
              className={\`w-12 h-12 rounded-full relative flex justify-center items-center text-slate-400 font-bold text-xl \${
                step <= element ? "border-4 border-slate-200" : "bg-green-500"
              }\`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {step <= element ? (
                  <motion.span
                    key="number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {element + 1}
                  </motion.span>
                ) : (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="text-white h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className={\`w-16 h-16 bg-green-100 absolute rounded-full -z-10 \${
                  step <= element && "hidden"
                }\`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  step > element
                    ? {
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.05, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  repeat: step > element ? Infinity : 0,
                  duration: 2,
                }}
              />
            </motion.div>
            {element < steps - 1 && (
              <motion.div
                className="w-24 h-1 mx-4 rounded-full bg-slate-200 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: (element + 1) * 0.1 }}
              >
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: step > element ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut"}}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(ProgressBar);
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
    name: "steps",
    type: "number",
    required: true,
    default: "",
    description: "Number of Steps in Progress Bar.",
  },
  {
    name: "ref",
    type: "ProgressBarRef",
    required: true,
    default: "",
    description: "To get functions for next and prev.",
  },
];
