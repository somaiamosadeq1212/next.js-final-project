export default function TableSkeleton() {
  return (
    <div className="space-y-4">

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-16 animate-pulse rounded-xl bg-muted"
        />
      ))}

    </div>
  );
}