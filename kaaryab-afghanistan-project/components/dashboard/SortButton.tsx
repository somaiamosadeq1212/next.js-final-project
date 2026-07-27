"use client";

import { ArrowUpDown } from "lucide-react";

type Props = {
  label: string;

  onClick: () => void;
};

export default function SortButton({
  label,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 font-semibold hover:text-primary"
    >
      {label}

      <ArrowUpDown className="h-4 w-4" />
    </button>
  );
}