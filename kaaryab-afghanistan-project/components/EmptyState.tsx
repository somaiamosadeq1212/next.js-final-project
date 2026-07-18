import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-default bg-background py-20 text-center">

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <SearchX className="h-8 w-8 text-primary" />
      </div>

      <h2 className="text-2xl font-bold text-default">
        No opportunities found
      </h2>

      <p className="mt-3 text-muted">
        Try changing your search keywords or filters.
      </p>
    </div>
  );
}