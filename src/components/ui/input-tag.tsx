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
                aria-label={`Remove ${tag.text} tag`}
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
