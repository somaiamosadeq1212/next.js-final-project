"use client";

import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
              active
                ? "border-primary bg-primary text-white shadow-md"
                : "border-default bg-background text-default hover:border-primary hover:text-primary"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}