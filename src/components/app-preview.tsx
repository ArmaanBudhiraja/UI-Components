import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code as CodeIcon, Monitor } from "lucide-react";
import { ReactNode } from "react";

interface AppPreviewProps {
  Preview: React.JSX.Element;
  Code: React.JSX.Element;
}

export default function AppPreview({ Preview, Code }: AppPreviewProps) {
  return (
    <div className="md:w-full w-[20rem]">
      <Tabs defaultValue="tab-1">
        <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0">
          <TabsTrigger
            value="tab-1"
            className="sm:w-12 md:w-24 xl:w-36 relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            <Monitor
              className="mb-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="xl:w-36 md:w-24 sm:w-12 relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            <CodeIcon
              className="mb-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <div className="border rounded-lg flex justify-center items-center w-full p-4">{Preview}</div>
        </TabsContent>
        <TabsContent value="tab-2">
          <div>{Code}</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
