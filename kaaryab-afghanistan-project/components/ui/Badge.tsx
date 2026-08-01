import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
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
        font-simibold
        transition-colors
        `,
        variant === "default" &&
          "bg-primary-light text-muted",

        variant === "secondary" &&
          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}