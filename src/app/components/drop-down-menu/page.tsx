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

const heading = "Drop Down Menu";
const description = `The DropDownMenu component provides a customizable and accessible menu for displaying a list of options or actions. It supports smooth animations, keyboard navigation, and seamless integration with other UI elements.`;

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
        code={`
npm install motion
`}
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
    height: "56rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/hamburger.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const hamburgerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        red: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        green: "bg-green-500 text-green-500-foreground hover:bg-green-500/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        transparent: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "size-10",
        sm: "size-8",
        lg: "size-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const hamburgerLineVariants = cva("", {
  variants: {
    variant: {
      default: "bg-white",
      red: "bg-white",
      green: "bg-white",
      outline: "bg-primary",
      transparent: "bg-primary",
      secondary: "bg-primary",
      link: "bg-primary",
    },
    size: {
      default: "w-6 h-0.5",
      sm: "w-4 h-0.5",
      lg: "w-8 h-0.5",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface HamburgerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof hamburgerVariants> {
  asChild?: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = React.forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ open, setOpen, className, size, variant, ...props }, ref) => {
    return (
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button
          initial={false}
          onClick={() => setOpen((state) => !state)}
          className={cn(
            "relative",
            className,
            hamburgerVariants({ size, variant })
          )}
          animate={open ? "open" : "closed"}
          ref={ref}
          {...(props as any)}
        >
          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
              },
            }}
          />

          <motion.span
            className={cn("absolute", hamburgerLineVariants({ size, variant }))}
            style={{ left: "50%", top: "65%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                top: ["65%", "50%", "50%"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                top: ["50%", "50%", "65%"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>
    );
  }
);

Hamburger.displayName = "Hamburger";

export { Hamburger };

`}
        />

        <p className="mb-2 ml-4 font-light text-md mt-8">
          components/ui/hamburger-menu.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hamburger } from "./hamburger";

interface HamburgerMenuProps {
  className?: string;
  children?: ReactNode;
}

export const HamburgerMenu = React.forwardRef<
  HTMLDivElement,
  HamburgerMenuProps
>(({ className, children }, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <Hamburger
        open={open}
        setOpen={setOpen}
        className="absolute z-50 left-[152px]"
      />
      <motion.div
        className="absolute bg-secondary rounded-md p-4 w-48 h-64"
        animate={open ? "open" : "closed"}
        style={{ transformOrigin: "top right" }}
        variants={{
          open: { scale: 1 },
          closed: { scale: 0 },
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});
Hamburger.displayName = "Hamburger";

HamburgerMenu.displayName = "HamburgerMenu";
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
    name: "className",
    type: "string",
    required: false,
    default: "",
    description: "Tailwind classes to extend support.",
  },
  {
    name: "children",
    type: "any",
    required: false,
    default: "",
    description: "Children Prop.",
  },
];
