export default function OpportunityCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 h-6 w-2/3 rounded bg-slate-200" />

      <div className="mb-3 h-4 w-1/2 rounded bg-slate-200" />

      <div className="mb-6 h-4 w-full rounded bg-slate-200" />

      <div className="flex justify-between">
        <div className="h-8 w-24 rounded bg-slate-200" />

        <div className="h-8 w-20 rounded bg-slate-200" />
      </div>
    </div>
  );
}