import CodeSnippet from "@/components/ui/code-snippet";

export default function Code() {
  return (
    <CodeSnippet
      code={code}
      language="jsx"
      theme="dark"
      showLineNumbers={true}
    />
  );
}

const code = `
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

`.trim();
