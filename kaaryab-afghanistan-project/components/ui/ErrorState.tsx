import { AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";

type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the requested data.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-default
        bg-card
        px-8
        py-12
        text-center
      "
    >
      <div
        className="
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-destructive/10
        "
      >
        <AlertTriangle
          className="
            h-8
            w-8
            text-destructive
          "
        />
      </div>

      <h2
        className="
          text-xl
          font-semibold
          text-default
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          max-w-md
          text-sm
          text-muted
        "
      >
        {message}
      </p>

      {onRetry && (
        <Button
          onClick={onRetry}
          className="mt-8"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}