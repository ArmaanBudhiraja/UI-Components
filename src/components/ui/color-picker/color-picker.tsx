"use client";

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
import ColorWheel from "./color-wheel";
import PopUp from "./pop-up";
import {
  rgbToHex,
  rgbToCmyk,
  rgbToHsl,
  hslToRgb,
  cmykToRgb,
  hexToRgb,
} from "@/lib/color-conversion";

type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk" | "wheel";

interface ColorPickerProps {
  color: string;
  setColor: React.Dispatch<SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  setColor,
}: ColorPickerProps) => {
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
