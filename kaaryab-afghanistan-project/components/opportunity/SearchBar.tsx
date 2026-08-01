"use client";

import { Search, X } from "lucide-react";
import Input from "@/components/ui/Input";

type SearchBarProps = {
  search: string;
  onSearch: (value: string) => void;
  onSubmit?: () => void;
};

export default function SearchBar({
  search,
  onSearch,
  onSubmit,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-slate-400
          dark:text-slate-500
        "
      />

      {/* Input */}
      <Input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit?.();
          }
        }}
        placeholder="Search jobs, internships, scholarships..."
        className="pl-12 pr-12"
      />

      {/* Clear Button */}
      {search.trim() !== "" && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onSearch("")}
          className="
            absolute
            right-3
            top-1/2
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            transition-colors
            hover:bg-surface
            focus-visible:outline-none
            focus-visible:bg-surface
          "
        >
          <X className="h-4 w-4 text-muted" />
        </button>
      )}
    </div>
  );
}