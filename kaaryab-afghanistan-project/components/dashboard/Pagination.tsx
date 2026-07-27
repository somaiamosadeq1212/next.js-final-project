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

  return (
    <div className="mt-8 flex justify-center gap-2">

      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Previous
      </Button>

      {Array.from({
        length: totalPages,
      }).map((_, index) => (
        <Button
          key={index}
          variant={
            currentPage === index + 1
              ? "default"
              : "outline"
          }
          onClick={() =>
            onPageChange(index + 1)
          }
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </Button>

      {/* <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-sm text-muted-foreground">
    Showing {jobs.length} of {total} opportunities
  </p>

  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
  />
</div> */}

    </div>

    
  );
}