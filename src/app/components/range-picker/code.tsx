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

import RangeSlider from "@/components/ui/range-slider";

export default function Preview() {
  return (
    <div className="w-full">
      <RangeSlider
        min={0}
        max={100}
        initialValue1={6}
        initialValue2={83}
        step={1}
      />
    </div>
  );
}
`.trim();
