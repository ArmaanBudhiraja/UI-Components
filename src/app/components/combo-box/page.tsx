import AppPreview from "@/components/app-preview";
import AppHeading from "@/components/app-heading";
import Timeline from "@/components/ui/timeline";
import CodeSnippet from "@/components/ui/code-snippet";
import AppProps from "@/components/app-props";
import AppFooter from "@/components/app-footer";
import Code from "./code";
import Preview from "./preview";

export default function Page() {
  return (
    <div className="flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-4 space-y-8 overflow-x-hidden">
      <AppHeading heading={heading} description={description} />
      <AppPreview Code={<Code />} Preview={<Preview />} />
      <Timeline steps={steps} />
      <AppProps props={props} />
      <AppFooter />
    </div>
  );
}

const heading = "Combo-Box";
const description = `The Combobox component is a customizable dropdown with a search feature, allowing users to select an option from a list. It supports dynamic rendering of items and provides visual feedback for the selected option.`;

const steps = [
  {
    key: 1,
    title: "Install Dependencies",
    height: "5rem",
    content: (
      <CodeSnippet theme="dark" code={"npm i motion clsx tailwind-merge"} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>
    ),
  },
  {
    key: 2,
    title: "Install Dependencies For Animations",
    height: "6rem",
    content: (
      <CodeSnippet
        theme="dark"
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
        code={`npx shadcn@latest add popover
npx shadcn@latest add command
npx shadcn@latest add button`}
      />
    ),
  },
  {
    key: 3,
    title: "Add Util File",
    height: "15rem",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">lib/utils.ts</p>
        <CodeSnippet
          theme="dark"
          className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
          code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
        />
      </>
    ),
  },
  {
    key: 4,
    height: "28rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/combo-box.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface ComboboxOption<T extends string> {
  value: T;
  label: string;
}

interface ComboboxProps<T extends string> {
  options: ComboboxOption<T>[];
  value: T | "";
  onValueChange: (value: T | "") => void;
  placeholder?: string;
  emptyText?: string;
  searchPlaceholder?: string;
  buttonClassName?: string;
  renderItem?: (item: ComboboxOption<T>) => React.ReactNode;
}

export function Combobox<T extends string>({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
  emptyText = "No option found.",
  searchPlaceholder = "Search...",
  buttonClassName = "w-[200px]",
  renderItem,
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", buttonClassName)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", buttonClassName)}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onValueChange(
                      currentValue === value ? "" : (currentValue as T)
                    );
                    setOpen(false);
                  }}
                >
                  {renderItem ? (
                    renderItem(option)
                  ) : (
                    <>
                      {option.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
`}
        />
      </>
    ),
  },
  {
    key: 5,
    title: "Ready To Use",
    height: "5rem",
    content: <></>,
  },
];

const props = [
  {
    name: "options",
    type: "T",
    required: true,
    default: "",
    description: "Options to select form.",
  },
  {
    name: "value",
    type: "T",
    required: true,
    default: "",
    description: "Selected Option.",
  },
  {
    name: "setValue",
    type: "stateAction<T>",
    required: true,
    default: "state Action",
    description: "State Action Selected Option.",
  },
  {
    name: "placeholder",
    type: "string",
    required: false,
    default: "",
    description: "Placeholder for Button.",
  },
  {
    name: "emptyText",
    type: "string",
    required: false,
    default: "",
    description: "Placeholder if no options available.",
  },
  {
    name: "searchPlaceholder",
    type: "string",
    required: false,
    default: "",
    description: "Placeholder for Search Button.",
  },
  {
    name: "buttonClassName",
    type: "string",
    required: false,
    default: "",
    description: "className for additional Tailwind on Button.",
  },
  {
    name: "renderItem",
    type: "(item: ComboboxOption<T>) => React.ReactNode",
    required: false,
    default: "",
    description: "Function To render Items.",
  },
];
