import type React from "react";

interface Step {
  key: number;
  title: string;
  content: React.ReactNode;
  height: string;
}

interface TimelineProps {
  steps: Step[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="overflow-x-hidden w-[20rem] md:w-full">
      <h1 className="text-3xl font-bold tracking-tight mb-4 overflow-x-hidden">Installation</h1>
      {steps.map((step, index) => (
        <TimelineStep
          key={step.key}
          number={step.key}
          title={step.title}
          content={step.content}
          isFirst={index === 0}
          isLast={index === steps.length - 1}
          height={step.height}
        />
      ))}
    </div>
  );
};

interface TimelineStepProps {
  number: number;
  title: string;
  content: React.ReactNode;
  height: string;
  isFirst: boolean;
  isLast: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  number,
  title,
  content,
  isFirst,
  isLast,
  height,
}) => {
  return (
    <div
      className={`flex items-start ${
        isFirst ? "items-start" : isLast ? "tems-end" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        {!isFirst && <div className="w-px h-2 bg-gray-300" />}
        <div
          className={`relative flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full`}
        >
          <span className="text-lg font-bold">{number}</span>
        </div>
        {!isLast && (
          <div className={`w-px bg-gray-300`} style={{ height: `${height}` }} />
        )}
      </div>
      <div className={`ml-4 flex-1 ${isFirst ? "mt-2" : "mt-5"}`}>
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        {content}
      </div>
    </div>
  );
};

export default Timeline;
