import { FolderOpen } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "No Opportunities",
  description = "There are no opportunities yet.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-8 py-20 text-center">

      <FolderOpen
        className="mb-4 h-14 w-14 text-muted-foreground"
      />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

    </div>
  );
}