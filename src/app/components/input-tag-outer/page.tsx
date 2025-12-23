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

const heading = "Inline Tag Input";
const description = `
This component, InlineTagInput, provides an interactive tag input field where users can add, display, and remove tags dynamically. It features smooth animations for adding/removing tags using Framer Motion and supports keyboard interactions for seamless usability.`;

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
          components/ui/tag-input.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Tag {
  id: string;
  text: string;
}

interface InputTagProps {
  className?: string;
  inputClassName?: string;
  tagClassName?: string;
  tagContainerClassName?: string;
  removeTagButtonClassName?: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  tags: Array<Tag>;
  setTags: React.Dispatch<React.SetStateAction<Array<Tag>>>;
}

export function InputTag({
  className,
  inputClassName,
  tagClassName,
  tagContainerClassName,
  removeTagButtonClassName,
  inputValue,
  setInputValue,
  tags,
  setTags,
}: InputTagProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  const handleInputBlur = () => {
    addTag();
  };

  const addTag = () => {
    const trimmedInput = inputValue.trim();
    if (
      trimmedInput &&
      !tags.some((tag) => tag.text.toLowerCase() === trimmedInput.toLowerCase())
    ) {
      setTags([...tags, { id: Date.now().toString(), text: trimmedInput }]);
      setInputValue("");
    }
  };

  const removeTag = (idToRemove: string) => {
    setTags(tags.filter((tag) => tag.id !== idToRemove));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className={cn("space-y-4 w-96", className)}> {/* change width here */}
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleInputBlur}
          placeholder="Add a tag"
          aria-label="Add a tag"
          className={cn("", inputClassName)}
        />
        <AnimatePresence>
          {tags.map((tag) => (
            <motion.div
              key={tag.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "inline-flex items-center px-3 py-1 m-1 rounded-full text-sm font-medium bg-primary text-primary-foreground",
                tagContainerClassName
              )}
            >
              {tag.text}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeTag(tag.id)}
                className={cn("ml-2 h-5 w-5", tagClassName)}
                aria-label={\`Remove \${tag.text} tag\`}
              >
                <X className={cn("h-3 w-3", removeTagButtonClassName)} />
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
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
  {
    name: "inputValue",
    type: "string",
    required: true,
    default: "",
    description: "Current input being typed.",
  },
  {
    name: "setInputValue",
    type: "setStateAction<string>",
    required: true,
    default: "",
    description: "State Action to set input begin typed.",
  },
];
