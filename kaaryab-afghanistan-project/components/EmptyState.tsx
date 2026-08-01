import { SearchX } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export default function EmptyState({
  title = "No opportunities found",
  description = "Try changing your search keywords or filters.",
  icon,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-default bg-background py-20 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        {icon ?? <SearchX className="h-8 w-8 text-primary" />}
      </div>

      <h2 className="text-2xl font-bold text-default">
        {title}
      </h2>

      <p className="mt-3 text-muted">
        {description}
      </p>
    </div>
  );
}