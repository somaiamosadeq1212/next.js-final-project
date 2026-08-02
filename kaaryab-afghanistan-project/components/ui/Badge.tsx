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

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}