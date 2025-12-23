"use client";

import RangeSlider from "@/components/ui/range-slider";

export default function Preview() {
  return (
    <div className="w-full">
      <RangeSlider
        min={0}
        max={100}
        initialValue1={6}
        initialValue2={83}
        step={1}
      />
    </div>
  );
}
