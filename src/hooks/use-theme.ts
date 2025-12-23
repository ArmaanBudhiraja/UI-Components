"use client";

import { useEffect } from "react";

export const useTheme = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      if (selectedTheme === "dark") document.body.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    }
  }, []);
};
