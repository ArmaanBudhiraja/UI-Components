"use client";

import { DatePicker } from "@/components/ui/date-picker";
import React from "react";

export default function DatePickerExample() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
      <DatePicker date={selectedDate} setDate={setSelectedDate} />
  );
}
