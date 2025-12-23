"use client";

import { Github, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleTheme } from "@/store/slices/theme";

export default function ThemeChanger() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="h-full ml-auto flex items-center">
      <Github
        className="absolute right-[2.8rem] sm:right-16 cursor-pointer"
        onClick={() =>
          window.open("https://github.com/Vardaan-02/UI-Library", "_black")
        }
      />
      <motion.button
        className="p-2 rounded-full focus:outline-none"
        onClick={handleThemeToggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center absolute right-4 top-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <Sun />
        </motion.div>

        <motion.div
          className="flex items-center justify-center absolute right-4 top-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <Moon />
        </motion.div>
      </motion.button>
    </div>
  );
}
