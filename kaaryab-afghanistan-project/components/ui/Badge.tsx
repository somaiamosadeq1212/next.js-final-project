import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "warning"
    | "success"
    | "destructive";
}

export default function Badge({
  className,
  children,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-sm
        font-semibold
        transition-colors
        `,

        variant === "default" &&
          "bg-[var(--color-primary-light)] text-[var(--color-primary)]",

        variant === "primary" &&
          "bg-[var(--color-primary)] text-white",

        variant === "secondary" &&
          "bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]",

        variant === "outline" &&
          "bg-transparent text-[var(--color-text)] border border-[var(--color-border)]",

        variant === "ghost" &&
          "bg-transparent text-[var(--color-text)]",

        variant === "danger" &&
          "bg-[var(--color-danger)] text-white",

        variant === "destructive" &&
          "bg-[var(--color-danger)] text-white",
        variant === "warning" &&
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        variant === "success" &&
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}