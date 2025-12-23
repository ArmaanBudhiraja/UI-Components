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

const heading = "Toaster";
const description = `The Toaster component is a customizable toast notification system that displays messages with a title, description, and optional undo button. It supports timed auto-dismissal, dynamic positioning, and progress indication, controlled via a ref for programmatic triggering.`;

const steps = [
  {
    key: 1,
    title: "Install Dependencies",
    height: "8rem",
    content: (
      <CodeSnippet
        theme="dark"
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
        code={`npm i motion clsx tailwind-merge
npx shadcn@latest add button
npx shadcn@latest add toast`}
      />
    ),
  },
  {
    key: 2,
    title: "Install Dependencies For Animations",
    height: "6rem",
    content: (
      <CodeSnippet
        theme="dark"
        code={`npm install framer-motion`}
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
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
    height: "54rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/toaster.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useProgressTimer } from "@/hooks/use-progress-timer";

interface MasteredToastProps {
  undo?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom"
    | null
    | undefined;
}

export interface MasteredToastRef {
  showToast: (title: string, description: string) => void;
}

const MasteredToast = forwardRef<MasteredToastRef, MasteredToastProps>(
  ({ undo, position }, ref) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const toastDuration = 5000;

    const { progress, start, pause, resume, reset } = useProgressTimer({
      duration: toastDuration,
      onComplete: () => setOpen(false),
    });

    const convert = useMemo(() => {
      if (!position) return;
      else if (position.includes("right")) return "right";
      else if (position.includes("left")) return "left";
      else if (position.includes("top")) return "top";
      else return "bottom";
    }, [position]);

    const handleOpenChange = useCallback(
      (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) {
          reset();
          start();
        }
      },
      [reset, start]
    );

    const showToast = useCallback(
      (toastTitle: string, toastDescription: string) => {
        setTitle(toastTitle);
        setDescription(toastDescription);
        if (open) {
          setOpen(false);
          window.setTimeout(() => {
            handleOpenChange(true);
          }, 150);
        } else {
          handleOpenChange(true);
        }
      },
      [open, handleOpenChange]
    );

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    return (
      <ToastProvider>
        <Toast
          open={open}
          onOpenChange={handleOpenChange}
          onMouseEnter={pause}
          onMouseLeave={resume}
          position={convert}
        >
          <div className="flex w-full justify-between gap-3">
            <CircleCheck
              className="mt-0.5 shrink-0 text-emerald-500"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <div className="flex grow flex-col gap-3">
              <div className="space-y-1">
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
              </div>
              {undo && (
                <div>
                  <ToastAction altText="Undo changes" asChild>
                    <Button size="sm" className="text-primary font-semibold">
                      Undo changes
                    </Button>
                  </ToastAction>
                </div>
              )}
            </div>
            <ToastClose asChild>
              <Button
                variant="ghost"
                className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                aria-label="Close notification"
              >
                <X
                  size={16}
                  strokeWidth={2}
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Button>
            </ToastClose>
          </div>
          <div className="contents" aria-hidden="true">
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500"
              style={{
                width: \`\${(progress / toastDuration) * 100}%\`,
                transition: "width 100ms linear",
              }}
            />
          </div>
        </Toast>
        <ToastViewport position={position} />
      </ToastProvider>
    );
  }
);

MasteredToast.displayName = "MasteredToast";

export default MasteredToast;

`}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/use-toast.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom max-w-[980px]"
          theme="dark"
          code={`import { useRef, useCallback } from "react";
import MasteredToast, {
  MasteredToastRef,
} from "@/components/ui/toast-mastered";

interface UseToastOptions {
  undo?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom"
    | null
    | undefined;
}

export function useToast(options: UseToastOptions) {
  const toastRef = useRef<MasteredToastRef | null>(null);

  const showToast = useCallback(
    (title: string, description: string) => {
      toastRef.current?.showToast(title, description);
    },
    []
  );
  
  const Toaster = (
    <MasteredToast
      ref={toastRef as React.RefObject<MasteredToastRef>}
      undo={options.undo}
      position={options.position}
    />
  );

  return { showToast, Toaster };
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
    name: "position",
    type: "string(limited)",
    required: true,
    default: "top-right",
    description: "Where the toast is displayed on screen.",
  },
  {
    name: "undo",
    type: "boolean",
    required: false,
    default: "false",
    description: "Undo Button to revert back.",
  },
];
