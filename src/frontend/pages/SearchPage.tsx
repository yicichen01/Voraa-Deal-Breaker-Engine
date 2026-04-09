import { useState } from "react";
import DealBreakerModal from "../components/DealBreakerModal";
import ResultList from "../components/ResultList";
import ActiveFilters from "../components/ActiveFilters";

export default function SearchPage() {
  const [requiredTags, setRequiredTags] = useState<string[]>([
    "quiet_atmosphere",
  ]);

  const [excludedTags, setExcludedTags] = useState<string[]>([
    "smoking_allowed",
  ]);

  const results = [
    {
      id: "1",
      name: "Quiet Cafe",
      matchedTags: ["quiet_atmosphere"],
    },
  ];

  return (
    <main>
      <h1>Search</h1>

      <DealBreakerModal />

      <ActiveFilters
        requiredTags={requiredTags}
        excludedTags={excludedTags}
      />

      <ResultList results={results} />
    </main>
  );
}
