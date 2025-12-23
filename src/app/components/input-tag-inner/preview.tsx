"use client";

import { InlineTagInput, Tag } from "@/components/ui/inline-input-tag";
import { useState } from "react";

export default function Preview() {
  const [tags, setTags] = useState<Tag[]>([]);

  return <InlineTagInput tags={tags} setTags={setTags} />;
}
