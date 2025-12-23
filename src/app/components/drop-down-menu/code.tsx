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

import { HamburgerMenu } from "@/components/ui/hamburger-menu/hamburger-menu";
import { Separator } from "@/components/ui/separator";

export default function Preview() {
  const menuItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="h-[18rem] w-80 p-4">
      <HamburgerMenu>
        {menuItems.map((item, index) => (
          <div key={index} role="menuitem" tabIndex={0} className="group">
            <div
              className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none rounded-md px-3 py-2 transition-all cursor-pointer"
            >
              {item}
            </div>
            {index < menuItems.length - 1 && <Separator className="my-1" />}
          </div>
        ))}
      </HamburgerMenu>
    </div>
  );
}
`.trim();
