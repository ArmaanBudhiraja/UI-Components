"use client";

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
    <div className={cn("rounded-lg overflow-y-auto overflow-x-hidden shadow-md relative", className)}>
      <Highlight
        theme={theme === "light" ? themes.github : themes.vsDark}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 overflow-auto`} style={style}>
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
        className="absolute top-2 right-2 "
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
            <Copy className="h-12 w-4" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}
