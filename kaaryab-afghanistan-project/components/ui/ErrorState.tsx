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
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
      <div className="mb-4 text-5xl">⚠️</div>

      <h2 className="mb-2 text-xl font-semibold text-red-700">
        {title}
      </h2>

      <p className="mb-6 max-w-md text-sm text-red-600">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}