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

import { Combobox, ComboboxOption } from "@/components/ui/combo-box";
import * as React from "react";

const options: ComboboxOption<"apple" | "banana" | "cherry">[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export default function Example() {
  const [selectedValue, setSelectedValue] = React.useState<
    "apple" | "banana" | "cherry" | ""
  >("");

  return (
    <Combobox
      options={options}
      value={selectedValue}
      onValueChange={setSelectedValue}
      placeholder="Pick a fruit..."
      emptyText="No fruits available."
      searchPlaceholder="Search fruits..."
    />
  );
}

`.trim();
