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
import { Carousel, CarouselItem } from "@/components/ui/carousel";

const carouselData: CarouselItem[] = [
  {
    title: "Beautiful Mountains",
    description: "Experience the serenity of nature.",
    image: "/mountains.jpg",
  },
  {
    title: "Stunning Beaches",
    description: "Relax by the ocean's edge.",
    image: "/beach.jpg",
  },
  {
    title: "City Lights",
    description: "Discover the urban jungle.",
    image: "/city.jpg",
  },
];

export default function Preview() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Gallery</h1>
      <Carousel carouselItems={carouselData} className="max-w-lg mx-auto" />
    </div>
  );
}
`.trim();
