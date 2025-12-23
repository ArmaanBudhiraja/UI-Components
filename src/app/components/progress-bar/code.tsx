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

import { Button } from "@/components/ui/button";
import ProgressBar, { ProgressBarRef } from "@/components/ui/progress-bar";
import { useRef } from "react";

export default function Preview() {
  const progressBarRef = useRef<ProgressBarRef>(null);

  const next = () => {
    if (!progressBarRef.current) return;
    progressBarRef.current.next();
  };

  const prev = () => {
    if (!progressBarRef.current) return;
    progressBarRef.current.prev();
  };

  return (
    <div className="space-y-6">
      <ProgressBar steps={5} ref={progressBarRef} />
      <div className="flex gap-2 w-full justify-center">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
}
`.trim();
