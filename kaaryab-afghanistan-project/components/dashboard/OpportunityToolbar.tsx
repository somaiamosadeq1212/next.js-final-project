"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  categories: string[];

  status: string;
  setStatus: (value: string) => void;

  statuses: string[];

  total: number;

  clearFilters: () => void;
};

export default function OpportunityToolbar({
  search,
  setSearch,

  category,
  setCategory,
  categories,

  status,
  setStatus,
  statuses,

  total,

  clearFilters,
}: Props) {

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-border bg-card p-4 sm:p-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <Input
          placeholder="Search opportunities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          value={category}
          // key={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item === "All"
                ? "All Categories"
                : item}
            </option>
          ))}
        </Select>

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statuses.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item === "All"
                ? "All Status"
                : item}
            </option>
          ))}
        </Select>

        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full xl:w-auto"
        >
          Clear Filters
        </Button>

      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="mt-4 text-sm text-muted-foreground">
          {total} opportunities found
        </p>
      </div>

    </div>
  );
}