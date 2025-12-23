"use client";

import { Button } from "@/components/ui/button";
import MasteredToast from "@/components/ui/toast-mastered";
import { useToast } from "@/hooks/use-toast";

export default function Preview() {
  const { showToast, Toaster } = useToast({
    undo: true,
    position: "top-right",
  });

  return (
    <div>
      <Button onClick={() => showToast("Hello World", "This is a Toaster made in V-UI")}>
        Show Toast
      </Button>
      {Toaster}
    </div>
  );
}
