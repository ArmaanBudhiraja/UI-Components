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

import DayNightToggleButton from "@/components/ui/dark-light-mode-toogle-button";
import { useEffect, useState } from "react";

export default function Preview() {
  const [dark, setDark] = useState<boolean>(() => {
    if (localStorage.getItem("theme") === "dark") return true;
    else return false;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return <DayNightToggleButton dark={dark} setDark={setDark} />;
}
`.trim();
