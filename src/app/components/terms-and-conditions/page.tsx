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
    <div className="flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 space-y-8 overflow-x-hidden">
      <AppHeading heading={heading} description={description} />
      <AppPreview Code={<Code />} Preview={<Preview />} />
      <Timeline steps={steps} />
      <AppProps props={props} />
      <AppFooter />
    </div>
  );
}

const heading = "Terms & Condition";
const description = `
The TermsAndConditions component is a dialog displaying a terms and conditions agreement, requiring users to scroll to the bottom to enable the "I Accept" button. It tracks scrolling with a ref and disables acceptance until the user has read the content fully.`;

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
npx shadcn@latest add dialog`}
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
    height: "28rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/terms-ans-condition.tsx
        </p>
        <div>

        
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";

export default function TermsAndConditions() {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms And Condition</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base">
            Terms And Condition
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        <strong>Agreement Overview</strong>
                      </p>
                      <p>
                        By using this platform, users acknowledge and accept
                        these terms and conditions. If you disagree with any
                        part, please discontinue your usage immediately.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Account Security</strong>
                      </p>
                      <p>
                        Users are responsible for securing their login
                        credentials. Any activity associated with their account
                        is their sole responsibility. Immediate action should be
                        taken if unauthorized access is suspected.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Content and Intellectual Property</strong>
                      </p>
                      <p>
                        All content on this platform is protected by copyright
                        laws. Users are prohibited from copying, redistributing,
                        or using any content for commercial purposes without
                        explicit authorization.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Limitation of Responsibility</strong>
                      </p>
                      <p>
                        The platform is provided &quot;as-is&quot; without any
                        guarantees. The platform owners are not liable for any
                        direct or indirect damages resulting from the use of the
                        service.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Code of Conduct</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        <li>Avoid uploading harmful or malicious content</li>
                        <li>Respect the rights and privacy of others</li>
                        <li>Avoid actions that could disrupt the service</li>
                        <li>Comply with all relevant laws and regulations</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Modification of Terms</strong>
                      </p>
                      <p>
                        The platform reserves the right to alter these terms at
                        any time. Continued use of the service after any
                        modifications implies acceptance of the updated terms.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Account Termination</strong>
                      </p>
                      <p>
                        Users may have their accounts suspended or terminated
                        without notice if they violate the terms or for any
                        other reason deemed necessary by the platform.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Governing Jurisdiction</strong>
                      </p>
                      <p>
                        This agreement is governed by the laws of the country in
                        which the platform operates, without regard to conflicts
                        of law principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t border-border px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="grow text-xs text-muted-foreground max-sm:text-center">
              Please read the entire agreement before proceeding.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" disabled={!hasReadToBottom}>
              I Accept
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`}
        />
        </div>
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
    name: "min",
    type: "number",
    required: true,
    default: "",
    description: "Minimum number in range picker.",
  },
  {
    name: "max",
    type: "number",
    required: true,
    default: "",
    description: "Maximum number in range picker.",
  },
  {
    name: "step",
    type: "number",
    required: true,
    default: "",
    description: "Difference in number in range picker.",
  },
  {
    name: "initialValue1",
    type: "number",
    required: true,
    default: "",
    description: "Minimum starting value in min range.",
  },
  {
    name: "initialValue2",
    type: "number",
    required: true,
    default: "",
    description: "Maximum starting value in max range.",
  },
];
