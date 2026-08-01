"use client";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

// Reusable select component with shared styles for forms and filters.
export default function Select({
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        `
        w-full
        rounded-xl
        border
        border-default
        bg-background
        px-4
        py-3
        text-default
        hover:border-slate-400
        focus:outline-none
        focus:ring-2
        focus:ring-primary/20
        focus:border-primary
        transition-theme
        `,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
