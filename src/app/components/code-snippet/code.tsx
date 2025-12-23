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
import CodeSnippet from "@/components/ui/code-snippet";

export default function Preview() {

  return (
    <CodeSnippet
      code={preview}
      language="jsx"
      theme="dark"
      showLineNumbers={true}
    />
  );

    const preview = \`
        import React from "react";

        function Button({ label, onClick }) {
        return (
            <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
            {label}
            </button>
        );
        }

        export default Button;
\`.trim();
}

`.trim();
