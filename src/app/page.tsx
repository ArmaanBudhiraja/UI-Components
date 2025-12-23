import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Layers,
  Zap,
  Palette,
  Sparkles,
  Smartphone,
  Accessibility,
  Layout,
} from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div className="grid auto-rows-min gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">Feature Showcase</CardTitle>
            <CardDescription>Discover what makes V-UI special</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={<Palette className="h-6 w-6 text-purple-500" />}
              title="Customizable Themes"
              description="Easily create and switch between custom color schemes."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6 text-yellow-500" />}
              title="Animations & Transitions"
              description="Smooth, performant animations powered by Framer Motion."
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6 text-green-500" />}
              title="Responsive Design"
              description="Looks great on all devices, from mobile to desktop."
            />
            <FeatureCard
              icon={<Code className="h-6 w-6 text-blue-500" />}
              title="Developer Experience"
              description="Well-documented API with TypeScript support."
            />
          </CardContent>
        </Card>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Why V-UI?</CardTitle>
            <CardDescription>
              Designed for developers, by developers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-500" />
              <span>Lightning-fast performance</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="text-blue-500" />
              <span>Flexible component system</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-green-500" />
              <span>Developer-friendly API</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="text-purple-500" />
              <span>Customizable theming</span>
            </div>
            <div className="flex items-center gap-2">
              <Accessibility className="text-red-500" />
              <span>Accessibility built-in</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="text-indigo-500" />
              <span>Responsive design</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="flex-1 md:min-h-[300px]">
        <CardHeader>
          <CardTitle className="text-2xl">Meet the Creator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/profile.jpg"
            alt="Vardaan"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Vardaan</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creator & Developer of V-UI
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg">
              Passionate front-end developer with a background in competitive
              coding. V-UI is the culmination of my experience with tools like
              Framer Motion, Tailwind, and shadcn/ui, created to make UI design
              faster and more beautiful.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Framer Motion</Badge>
            </div>
            <Button variant="outline">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-2">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
