import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        bg-primary-light
        px-3
        py-1
        text-xs
        font-semibold
        text-primary
        transition-colors
        `,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}