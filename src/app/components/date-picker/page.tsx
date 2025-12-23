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

const heading = "Dark Mode Toggle Button";
const description = `The DayNightToggleButton is an animated switch that toggles between day and night modes, with a moving sun or moon and dynamic elements like clouds or stars. It uses Framer Motion for smooth transitions and visually represents the selected mode.`;

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
    title: "Install Dependencies For Animations",
    height: "6rem",
    content: <CodeSnippet theme="dark" code={"npm install motion"} className="w-[16rem] md:max-w-[812px] xl:w-[980px]"/>,
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
    height: "86rem",
    title: "Copy The Source Code",
    content: (
      <>
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/utils-date.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px] mb-12"
          theme="dark"
          code={`export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function getDaysInMonth(year: number, month: number): Date[] {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

export function getMonthName(date: Date): string {
  return date.toLocaleString("default", { month: "long" })
}

export function getYearRange(currentYear: number): number[] {
  const startYear = currentYear - 100
  const endYear = currentYear + 100
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
}

`}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/calender.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 mb-12 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`"use client"

import React from "react"
import { ChevronDown } from "lucide-react"
import { daysOfWeek, getDaysInMonth, getMonthName, getYearRange } from "@/lib/date-utils"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CalendarProps {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selectedDate || new Date())

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
  const firstDayOfMonth = daysInMonth[0].getDay()
  const yearRange = getYearRange(new Date().getFullYear())

  const changeYear = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1))
  }

  const changeMonth = (monthIndex: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1))
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div className="w-[280px] max-w-md rounded-md shadow-md overflow-hidden">
      <div className="flex justify-between items-center px-4 py-1">
        <MonthSelect value={currentDate.getMonth()} onChange={(month) => changeMonth(month)} />
        <YearSelect value={currentDate.getFullYear()} onChange={(year) => changeYear(year)} yearRange={yearRange} />
      </div>
      <div className="grid grid-cols-7 gap-1 p-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-medium text-gray-500 text-sm">
            {day}
          </div>
        ))}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <div key={\`empty-\${index}\`} className="h-8" />
          ))}
        {daysInMonth.map((date) => (
          <button
            key={date.toString()}
            onClick={() => onSelectDate(date)}
            className={cn(
              "h-8 w-8 flex items-center justify-center rounded-full text-sm transition-colors dark:hover:text-black",
              isToday(date) && "bg-blue-100 text-blue-600 font-semibold",
              isSelected(date) && "bg-blue-500 text-white font-semibold",
              !isToday(date) && !isSelected(date) && "hover:bg-gray-100",
            )}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}

interface SelectProps {
  value: number
  onChange: (value: number) => void
}

interface YearSelectProps extends SelectProps {
  yearRange: number[]
}

function MonthSelect({ value, onChange }: SelectProps) {
  const monthNames = Array.from({ length: 12 }, (_, i) => getMonthName(new Date(2000, i, 1)))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[130px] justify-between border-none bg-grey-50 text-md">
          {monthNames[value]}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[130px] max-h-[200px] overflow-y-auto no-scrollbar">
        {monthNames.map((month, index) => (
          <DropdownMenuItem key={month} onSelect={() => onChange(index)}>
            {month}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function YearSelect({ value, onChange, yearRange }: YearSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[100px] justify-between  border-none bg-grey-50 text-md">
          {value}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100px] max-h-[200px] overflow-y-auto no-scrollbar">
        {yearRange.map((year) => (
          <DropdownMenuItem key={year} onSelect={() => onChange(year)}>
            {year}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

`}
        />
        <p className="mb-2 ml-4 font-light text-md">
          components/ui/date-picker.tsx
        </p>
        <CodeSnippet
          showLineNumbers={true}
          className="h-96 scrollbar-custom w-[16rem] md:max-w-[812px] xl:w-[980px]"
          theme="dark"
          code={`
"use client";

import React, { SetStateAction } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "./calendar";

interface DatePickerProps {
  date: Date;
  setDate: React.Dispatch<SetStateAction<Date>>;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={\`w-[280px] justify-start text-left font-normal \${
            !date && "text-muted-foreground"
          }\`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar selectedDate={date} onSelectDate={handleDateSelect} />
      </PopoverContent>
    </Popover>
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
    name: "date",
    type: "Date",
    required: true,
    default: "new Date()",
    description: "selected date.",
  },
  {
    name: "setDate",
    type: "stateAction",
    required: true,
    default: "state action",
    description: "State Action to change Date.",
  },
];
