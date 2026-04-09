import { useState } from "react";

export function useDealBreakers() {
  const [requiredTags, setRequiredTags] = useState<string[]>([]);
  const [excludedTags, setExcludedTags] = useState<string[]>([]);

  return {
    requiredTags,
    excludedTags,
    setRequiredTags,
    setExcludedTags,
  };
}
