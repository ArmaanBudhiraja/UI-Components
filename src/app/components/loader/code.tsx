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

import BlockSwapLoader from "@/components/ui/loader";

export default function Preview() {
  return (
    <div className="h-36 flex items-center">
      <BlockSwapLoader />
    </div>
  );
}
`.trim();
