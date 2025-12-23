"use client"

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
            <div key={`empty-${index}`} className="h-8" />
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

