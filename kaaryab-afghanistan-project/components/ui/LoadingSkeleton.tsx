type LoadingSkeletonProps = {
  rows?: number;
};

export default function LoadingSkeleton({
  rows = 5,
}: LoadingSkeletonProps) {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 h-6 w-48 rounded bg-slate-200" />

      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-full bg-slate-200" />

            <div className="flex-1">
              <div className="mb-2 h-4 w-3/4 rounded bg-slate-200" />
              <div className="h-3 w-1/2 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}