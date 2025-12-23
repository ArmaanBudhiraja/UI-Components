"use client";

import HoverLines from "@/components/ui/hover-line";

export default function Preview() {

  const headings = [
    "Home",
    "About",
    "Projects",
    "Coding Profiles",
    "Education",
    "Achievements",
  ];

  return (
    <>
      <h1 className="font-semibold">Take Cursor on Right Side of the Screen</h1>
      <HoverLines headings={headings}/>
    </>
  );
}
