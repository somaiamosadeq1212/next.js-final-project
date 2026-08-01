export default function OpportunityCardSkeleton() {
  return (
    <div className="animate-pulse rounded-card border border-default bg-surface p-6 shadow-card">
      <div className="mb-4 h-6 w-2/3 rounded bg-muted" />

      <div className="mb-3 h-4 w-1/2 rounded bg-muted" />

      <div className="mb-6 h-4 w-full rounded bg-muted" />

      <div className="flex justify-between">
        <div className="h-8 w-24 rounded bg-muted" />

        <div className="h-8 w-20 rounded bg-muted" />
      </div>
    </div>
  );
}