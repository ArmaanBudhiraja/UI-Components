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

const heading = "Color Picker";
const description = `The ColorPicker component provides a user-friendly interface for selecting and manipulating colors in various formats (Hex, RGB, HSL, CMYK, or a color wheel). It dynamically updates and synchronizes the color across all formats, offering real-time visual feedback.`;

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
    title: "Install Dependencies For Tailwind",
    height: "8rem",
    content: (
      <CodeSnippet
        theme="dark"
        className="w-[16rem] md:max-w-[812px] xl:w-[980px]"
        code={`npm install tailwindcss @tailwindcss/cli
npx shadcn@latest add slider
npx shadcn@latest add button`}
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
    height: "116rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">lib/color-conversions.ts</p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 w-[16rem] md:max-w-[812px] xl:w-[980px] mb-12"
          theme={"dark"}
          code={`export function hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
  
  export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  
  export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s;
    const l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  
  export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
  export function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    const k = Math.min(c, m, y);
  
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
  
    return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)];
  }
  
  export function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
    c /= 100;
    m /= 100;
    y /= 100;
    k /= 100;
  
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);
  
    return [Math.round(r), Math.round(g), Math.round(b)];
  }
  `}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/color-picker/color-picker.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 w-[16rem] md:max-w-[812px] xl:w-[980px] mb-12"
          theme="dark"
          code={`"use client";

import React, { useState, useEffect, SetStateAction, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  rgbToCmyk,
  cmykToRgb,
} from "@/lib/color-conversion";
import ColorWheel from "./color-wheel";
import PopUp from "./pop-up";

type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk" | "wheel";

interface ColorPickerProps {
  color: string;
  setColor: React.Dispatch<SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }: ColorPickerProps) => {
  const [format, setFormat] = useState<ColorFormat>("hex");
  const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
  const [hsl, setHsl] = useState<[number, number, number]>([0, 100, 50]);
  const [cmyk, setCmyk] = useState<[number, number, number, number]>([
    0, 100, 100, 0,
  ]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const updateAllFormats = useCallback(
    (rgbValues: [number, number, number]) => {
      const [r, g, b] = rgbValues;
      setRgb(rgbValues);
      setColor(rgbToHex(r, g, b));
      setHsl(rgbToHsl(r, g, b));
      setCmyk(rgbToCmyk(r, g, b));
    },
    [setColor]
  );

  useEffect(() => {
    updateAllFormats(rgb);
  }, [rgb, updateAllFormats]);

  const handleHexChange = (value: string) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      const rgbValues = hexToRgb(value);
      updateAllFormats(rgbValues);
    }
  };

  const handleRgbChange = (index: number, value: number) => {
    const newRgb = [...rgb] as [number, number, number];
    newRgb[index] = value;
    updateAllFormats(newRgb);
  };

  const handleHslChange = (index: number, value: number) => {
    const newHsl = [...hsl] as [number, number, number];
    newHsl[index] = value;
    const rgbValues = hslToRgb(newHsl[0], newHsl[1], newHsl[2]);
    updateAllFormats(rgbValues);
  };

  const handleCmykChange = (index: number, value: number) => {
    const newCmyk = [...cmyk] as [number, number, number, number];
    newCmyk[index] = value;
    const rgbValues = cmykToRgb(newCmyk[0], newCmyk[1], newCmyk[2], newCmyk[3]);
    updateAllFormats(rgbValues);
  };

  const handleWheelChange = (hexColor: string) => {
    handleHexChange(hexColor);
  };

  return (
    <div className="flex gap-4">
      <Select
        onValueChange={(value) => {
          setFormat(value as ColorFormat);
          setIsPopUpOpen(true);
        }}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select color format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hex">Hexadecimal</SelectItem>
          <SelectItem value="rgb">RGB</SelectItem>
          <SelectItem value="hsl">HSL</SelectItem>
          <SelectItem value="cmyk">CMYK</SelectItem>
          <SelectItem value="wheel">Color Wheel</SelectItem>
        </SelectContent>
      </Select>

      <PopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        <div
          className="min-w-10 min-h-10 rounded-md my-4"
          style={{ backgroundColor: color }}
        />
        {format === "hex" && (
          <div>
            <Label htmlFor="hex">Hex Color</Label>
            <Input
              id="hex"
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#RRGGBB"
            />
          </div>
        )}

        {format === "rgb" && (
          <div className="space-y-2">
            {["Red", "Green", "Blue"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={255}
                  step={1}
                  value={[rgb[index]]}
                  onValueChange={(value) => handleRgbChange(index, value[0])}
                />
                <span>{rgb[index]}</span>
              </div>
            ))}
          </div>
        )}

        {format === "hsl" && (
          <div className="space-y-2">
            {["Hue", "Saturation", "Lightness"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={index === 0 ? 360 : 100}
                  step={1}
                  value={[hsl[index]]}
                  onValueChange={(value) => handleHslChange(index, value[0])}
                />
                <span>
                  {hsl[index]}
                  {index === 0 ? "°" : "%"}
                </span>
              </div>
            ))}
          </div>
        )}

        {format === "cmyk" && (
          <div className="space-y-2">
            {["Cyan", "Magenta", "Yellow", "Black"].map((label, index) => (
              <div key={label}>
                <Label htmlFor={label.toLowerCase()}>{label}</Label>
                <Slider
                  id={label.toLowerCase()}
                  min={0}
                  max={100}
                  step={1}
                  value={[cmyk[index]]}
                  onValueChange={(value) => handleCmykChange(index, value[0])}
                />
                <span>{cmyk[index]}%</span>
              </div>
            ))}
          </div>
        )}

        {format === "wheel" && (
          <div>
            <ColorWheel size={200} onChange={handleWheelChange} />
          </div>
        )}
      </PopUp>

      <div
        className="min-w-10 min-h-10 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;

`}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/color-picker/color-wheel.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="w-[16rem] md:max-w-[812px] xl:w-[980px] h-96 scrollbar-custom mb-12"
          theme="dark"
          code={`import React, { useRef, useEffect, useState } from "react";

interface ColorWheelProps {
  size: number;
  onChange: (color: string) => void;
}

const ColorWheel: React.FC<ColorWheelProps> = ({ size, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= radius) {
          const hue = (Math.atan2(dy, dx) + Math.PI) / (Math.PI * 2);
          const sat = distance / radius;
          const lightness = 0.5;

          ctx.fillStyle = \`hsl(\${hue * 360}, \${sat * 100}%, \${
            lightness * 100
          }%)\`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, [size]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b] = imageData.data;
    const color = \`#\${r.toString(16).padStart(2, "0")}\${g
      .toString(16)
      .padStart(2, "0")}\${b.toString(16).padStart(2, "0")}\`;
    onChange(color);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: "crosshair" }}
      />
    </div>
  );
};

export default ColorWheel;
`}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/color-pciker/pop-up.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="w-[16rem] md:max-w-[812px] xl:w-[980px] h-96 scrollbar-custom"
          theme="dark"
          code={`import React, { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Color Options</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-6 w-6" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;

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
    name: "color",
    type: "string",
    required: true,
    default: "",
    description: "Color Selected.",
  },
  {
    name: "setColor",
    type: "string",
    required: true,
    default: "state action",
    description: "State Action to change color selected.",
  },
];
