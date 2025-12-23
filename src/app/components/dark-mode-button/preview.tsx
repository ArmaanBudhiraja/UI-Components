"use client";

import DayNightToggleButton from "@/components/ui/dark-light-mode-toogle-button";
import { toggleTheme } from "@/store/slices/theme";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Preview() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return <DayNightToggleButton dark={isDarkMode} setDark={handleThemeToggle} />;
}
