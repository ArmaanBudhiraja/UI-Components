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

const heading = "Corousal";
const description = `The Carousel component displays a responsive, autoplay-enabled image carousel with navigation buttons and indicators. It supports looping, customizable content, and smooth transitions, making it ideal for showcasing image-based content dynamically.`;

const steps = [
  {
    key: 1,
    title: "Install Dependencies",
    height: "5rem",
    content: (
      <CodeSnippet
        theme="dark"
        code={"npm i motion clsx tailwind-merge"}
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
      />
    ),
  },
  {
    key: 2,
    title: "Install Dependencies For Corousal",
    height: "6rem",
    content: (
      <CodeSnippet
        theme="dark"
        code={`npm install embla-carousel-react
npx shadcn@latest add button`}
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
          components/ui/corousal.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

export function Carousel({
  carouselItems,
  className,
}: {
  carouselItems: CarouselItem[];
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <>
      <div
        className={cn(
          "overflow-hidden w-full aspect-square rounded-md relative",
          className
        )}
        ref={emblaRef}
      >
        <div className="flex">
          {carouselItems.map((item, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative aspect-square"
              key={index}
            >
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-xl sm:text-lg md:text-xl font-bold text-white mb-0">
                  {item.title}
                </h2>
                <p className="text-xl sm:text-sm text-white mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none text-white hover:text-whtie z-10 p-2"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none text-white hover:text-whtie z-10 p-2"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={\`w-3 h-3 rounded-full transition \${
                index === selectedIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white"
              }\`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
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
    name: "title",
    type: "string",
    required: true,
    default: "",
    description: "Title to be displayed under image.",
  },
  {
    name: "description",
    type: "string",
    required: true,
    default: "",
    description: "Desription of Image.",
  },
  {
    name: "image",
    type: "image format",
    required: true,
    default: "",
    description: "Image for Corousal.",
  },
];
