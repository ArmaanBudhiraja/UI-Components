import { useRef, useCallback } from "react";
import MasteredToast, {
  MasteredToastRef,
} from "@/components/ui/toast-mastered";

interface UseToastOptions {
  undo?: boolean;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top"
    | "bottom"
    | null
    | undefined;
}

export function useToast(options: UseToastOptions) {
  const toastRef = useRef<MasteredToastRef | null>(null);

  const showToast = useCallback(
    (title: string, description: string) => {
      toastRef.current?.showToast(title, description);
    },
    []
  );
  
  const Toaster = (
    <MasteredToast
      ref={toastRef as React.RefObject<MasteredToastRef>}
      undo={options.undo}
      position={options.position}
    />
  );

  return { showToast, Toaster };
}
