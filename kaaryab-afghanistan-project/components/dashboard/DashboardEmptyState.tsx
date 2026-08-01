import { FolderOpen } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export default function EmptyState({
  title = "No Opportunities",
  description = "There are no opportunities yet.",
  action,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-default
        bg-card
        px-8
        py-20
        text-center
      "
    >
      <FolderOpen
        className="
          mb-4
          h-14
          w-14
          text-muted
        "
      />

      <h3 className="text-xl font-semibold text-default">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}