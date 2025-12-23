"use client";

import { Check } from "lucide-react";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressBarProps {
  steps: number;
}

export interface ProgressBarRef {
  next: () => void;
  prev: () => void;
}

function ProgressBar({ steps }: ProgressBarProps, ref: Ref<ProgressBarRef>) {
  const [step, setStep] = useState<number>(0);

  const next = () => step < steps && setStep((state) => state + 1);

  const prev = () => step > 0 && setStep((state) => state - 1);

  useImperativeHandle(ref, () => ({
    next,
    prev,
  }));

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center">
        {Array.from({ length: steps }, (_, index) => index).map((element) => (
          <motion.div key={element} className="flex items-center">
            <motion.div
              className={`w-12 h-12 rounded-full relative flex justify-center items-center text-slate-400 font-bold text-xl ${
                step <= element ? "border-4 border-slate-200" : "bg-green-500"
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {step <= element ? (
                  <motion.span
                    key="number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {element + 1}
                  </motion.span>
                ) : (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="text-white h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className={`w-16 h-16 bg-green-100 absolute rounded-full -z-10 ${
                  step <= element && "hidden"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  step > element
                    ? {
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.05, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  repeat: step > element ? Infinity : 0,
                  duration: 2,
                }}
              />
            </motion.div>
            {element < steps - 1 && (
              <motion.div
                className="w-24 h-1 mx-4 rounded-full bg-slate-200 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: (element + 1) * 0.1 }}
              >
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: step > element ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut"}}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(ProgressBar);