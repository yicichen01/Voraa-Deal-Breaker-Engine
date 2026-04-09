type Props = {
  requiredTags?: string[];
  excludedTags?: string[];
};

export default function ActiveFilters({ requiredTags, excludedTags }: Props) {
  return (
    <div>
      <h4>Active Filters</h4>
      <div>Required: {requiredTags?.join(", ")}</div>
      <div>Excluded: {excludedTags?.join(", ")}</div>
    </div>
  );
}
