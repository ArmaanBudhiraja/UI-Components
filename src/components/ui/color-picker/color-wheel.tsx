import React, { useRef, useEffect, useState } from "react";

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

          ctx.fillStyle = `hsl(${hue * 360}, ${sat * 100}%, ${
            lightness * 100
          }%)`;
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
    const color = `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
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
