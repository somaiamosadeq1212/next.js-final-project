type LoadingSkeletonProps = {
  rows?: number;
};

export default function LoadingSkeleton({
  rows = 5,
}: LoadingSkeletonProps) {
  return (
    <div className="animate-pulse rounded-2xl border border-default bg-card p-6 shadow-sm">
      <div className="mb-6 h-6 w-48 rounded bg-muted" />

      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-full bg-muted" />

            <div className="flex-1">
              <div className="mb-2 h-4 w-3/4 rounded bg-muted" />
              <div className="h-3 w-1/2 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}