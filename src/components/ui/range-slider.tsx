"use client";

import type React from "react";
import { useState, useCallback, useRef, useEffect } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  initialValue1: number;
  initialValue2: number;
}

export default function RangeSlider({
  min,
  max,
  step,
  initialValue1,
  initialValue2,
}: RangeSliderProps) {
  const [value1, setValue1] = useState(initialValue1);
  const [value2, setValue2] = useState(initialValue2);
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getPercentage = useCallback(
    (value: number) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent, handle: "min" | "max") => {
      event.preventDefault();
      setIsDragging(handle);
    },
    []
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newPercentage =
        ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      const newValue = Math.round((newPercentage / 100) * (max - min) + min);

      if (isDragging === "min") {
        setValue1(Math.min(Math.max(newValue, min), value2 - step));
      } else {
        setValue2(Math.max(Math.min(newValue, max), value1 + step));
      }
    },
    [isDragging, min, max, step, value1, value2]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="relative w-full h-6 mb-4" ref={sliderRef}>
        <div
          className="absolute h-2 bg-gray-300 rounded-full top-2"
          style={{
            left: `0%`,
            width: `${getPercentage(value1)}%`,
          }}
        />
        <div
          className="absolute h-2 bg-primary rounded-full top-2"
          style={{
            left: `${getPercentage(value1)}%`,
            width: `${getPercentage(value2) - getPercentage(value1)}%`,
          }}
        />
        <div
          className="absolute h-2 bg-gray-300 rounded-full top-2"
          style={{
            left: `${getPercentage(value2)}%`,
            width: `${100 - getPercentage(value2)}%`,
          }}
        />
        <div
          className="absolute w-6 h-6 bg-primary rounded-full top-0 -ml-3 cursor-pointer"
          style={{ left: `${getPercentage(value1)}%` }}
          onMouseDown={(e) => handleMouseDown(e, "min")}
        />
        <div
          className="absolute w-6 h-6 bg-primary rounded-full top-0 -ml-3 cursor-pointer"
          style={{ left: `${getPercentage(value2)}%` }}
          onMouseDown={(e) => handleMouseDown(e, "max")}
        />
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm font-medium text-gray-700">{value1}</span>
        <span className="text-sm font-medium text-gray-700">{value2}</span>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">
          Output: {value1} - {value2}
        </p>
      </div>
    </div>
  );
}
