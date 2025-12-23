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

import TermsAndConditions from "@/components/ui/terms-and-condition";

export default function Preview() {
  return <TermsAndConditions />;
}
`.trim();
