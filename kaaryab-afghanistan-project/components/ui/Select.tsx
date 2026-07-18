"use client";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

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
        border-slate-300
        bg-white
        px-4
        py-3
        text-slate-900
        shadow-sm
        transition-all
        duration-200

        hover:border-slate-400

        focus:border-blue-600
        focus:outline-none
        focus:ring-4
        focus:ring-blue-100

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-white
        dark:hover:border-slate-600
        dark:focus:ring-blue-900/30
        `,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
