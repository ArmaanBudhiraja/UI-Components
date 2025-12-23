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
"use client"

import ColorPicker from "@/components/ui/color-picker/color-picker";
import { useState } from "react";

export default function Preview() {
  const [color, setColor] = useState<string>("");

  return <ColorPicker color={color} setColor={setColor} />;
}
`.trim();
