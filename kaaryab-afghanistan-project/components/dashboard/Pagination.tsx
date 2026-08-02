"use client";

import Button from "@/components/ui/Button";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = [];

  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div
      className="
        mt-8
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
      "
    >
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {currentPage > 2 && (
        <>
          <Button
            variant="outline"
            onClick={() => onPageChange(1)}
          >
            1
          </Button>

          {currentPage > 3 && (
            <span className="px-2 text-muted">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          variant={
            currentPage === page
              ? "primary"
              : "outline"
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {currentPage < totalPages - 1 && (
        <>
          {currentPage < totalPages - 2 && (
            <span className="px-2 text-muted">
              ...
            </span>
          )}

          <Button
            variant="outline"
            onClick={() =>
              onPageChange(totalPages)
            }
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </Button>
    </div>
  );
}