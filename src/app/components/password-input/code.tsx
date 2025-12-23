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

import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";

export default function Preview() {
  const [passowrd, setPassword] = useState<string>("");

  return <PasswordInput password={passowrd} setPassword={setPassword} />;
}
`.trim();
