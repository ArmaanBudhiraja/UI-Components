"use client";

import { Tag } from "@/components/ui/inline-input-tag";
import { InputTag } from "@/components/ui/input-tag";
import { useState } from "react";

export default function Preview() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <InputTag
      tags={tags}
      setTags={setTags}
      inputValue={input}
      setInputValue={setInput}
    />
  );
}
