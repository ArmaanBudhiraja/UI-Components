"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";

export default function Preview() {
  const [passowrd, setPassword] = useState<string>("");

  return <PasswordInput password={passowrd} setPassword={setPassword} />;
}
