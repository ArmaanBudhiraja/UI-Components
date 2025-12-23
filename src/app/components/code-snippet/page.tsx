import AppPreview from "@/components/app-preview";
import Code from "./code";
import Preview from "./preview";
import AppHeading from "@/components/app-heading";
import Timeline from "@/components/ui/timeline";
import CodeSnippet from "@/components/ui/code-snippet";
import AppProps from "@/components/app-props";
import AppFooter from "@/components/app-footer";

export default function Page() {
  return (
    <div className="py-8 xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden">
      <AppHeading heading={heading} description={description} />
      <AppPreview Code={<Code />} Preview={<Preview />} />
      <Timeline steps={steps} />
      <AppProps props={props} />
      <AppFooter />
    </div>
  );
}

const heading = "Code Snippet";
const description = `This CodeSnippet component displays syntax-highlighted code with
        optional line numbers, using Prism.js themes for styling. It includes a
        button to copy the code to the clipboard, with a feedback animation upon
        copying.`;

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
    title: "Install Dependencies For Syntax Highlight",
    height: "6rem",
    content: (
      <CodeSnippet
        theme="dark"
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
        code={`npm i react-syntax-highlighter @types/react-syntax-highlighter
          `}
      />
    ),
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
        <p className="mb-2 ml-4 font-light text-md">components/ui/code-snippet.tsx</p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Language } from "prism-react-renderer";
import { cn } from "@/lib/utils";

export interface CodeSnippetProps {
  code: string;
  language?: Language;
  theme?: "light" | "dark";
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeSnippet({
  code,
  language = "javascript",
  theme = "light",
  showLineNumbers = false,
  className,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg overflow-y-auto shadow-md realtive", className)}>
      <Highlight
        theme={theme === "light" ? themes.github : themes.vsDark}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={\`\${className} p-4 overflow-auto\`} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              return (
                <div key={i} {...lineProps}>
                  {showLineNumbers && (
                    <span className="inline-block w-8 text-right mr-4 text-gray-400 select-none">
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, tokenIndex) => {
                    const tokenProps = getTokenProps({ token });
                    return <span key={tokenIndex} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-2 right-2"
      >
        <Button
          size="icon"
          variant="ghost"
          onClick={copyToClipboard}
          aria-label={copied ? "Copied!" : "Copy code"}
          className="text-white"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </motion.div>
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
    name: "code",
    type: "string",
    required: true,
    default: "",
    description: "Code to be displayed.",
  },
  {
    name: "className",
    type: "string",
    required: false,
    default: "",
    description: "Optional additional class names in Tailwind.",
  },
  {
    name: "language",
    type: "string",
    required: false,
    default: "javascript",
    description: "language of the code.",
  },
  {
    name: "showLineNumbers",
    type: "boolean",
    required: false,
    default: "",
    description: "Controls if you want to show line number.",
  },
];
