"use client"

import { Carousel, CarouselItem } from "@/components/ui/carousel";

const carouselData: CarouselItem[] = [
  {
    title: "Beautiful Mountains",
    description: "Experience the serenity of nature.",
    image: "/mountain.jpeg", 
  },
  {
    title: "Stunning Beaches",
    description: "Relax by the ocean's edge.",
    image: "/beach.jpeg",
  },
  {
    title: "City Lights",
    description: "Discover the urban jungle.",
    image: "/city.webp",
  },
];

export default function Preview() {
  return <Carousel carouselItems={carouselData} className="max-w-lg mx-auto" />;
}
