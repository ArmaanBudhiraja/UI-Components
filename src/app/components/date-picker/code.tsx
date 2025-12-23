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

import { DatePicker } from "@/components/ui/date-picker";
import React from "react";

export default function DatePickerExample() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
      <DatePicker date={selectedDate} setDate={setSelectedDate} />
  );
}
`.trim();
