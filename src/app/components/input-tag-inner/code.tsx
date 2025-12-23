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

import { InlineTagInput, Tag } from "@/components/ui/inline-input-tag";
import { useState } from "react";

export default function Preview() {
  const [tags, setTags] = useState<Tag[]>([]);

  return <InlineTagInput tags={tags} setTags={setTags} />;
}
`.trim();
