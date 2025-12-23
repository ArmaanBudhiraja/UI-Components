"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hamburger } from "./hamburger";

interface HamburgerMenuProps {
  className?: string;
  children?: ReactNode;
}

export const HamburgerMenu = React.forwardRef<
  HTMLDivElement,
  HamburgerMenuProps
>(({ className, children }, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <Hamburger
        open={open}
        setOpen={setOpen}
        className="absolute z-50 left-[152px]"
      />
      <motion.div
        className="absolute bg-secondary rounded-md p-4 w-48 h-64"
        animate={open ? "open" : "closed"}
        style={{ transformOrigin: "top right" }}
        variants={{
          open: { scale: 1 },
          closed: { scale: 0 },
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
    </div>
  );
});
Hamburger.displayName = "Hamburger";

HamburgerMenu.displayName = "HamburgerMenu";
