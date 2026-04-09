import ResultCard from "./ResultCard";

type Result = {
  id: string;
  name: string;
  matchedTags?: string[];
};

export default function ResultList({ results }: { results: Result[] }) {
  return (
    <div>
      {results.map((r) => (
        <ResultCard key={r.id} name={r.name} />
      ))}
    </div>
  );
}
