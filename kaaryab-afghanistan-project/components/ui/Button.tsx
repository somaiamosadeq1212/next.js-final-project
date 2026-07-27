"use client";

import { cn } from "@/lib/utils";
import { Link, Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "destructive";
  

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  leftIcon,
  rightIcon,
  disabled,
   href,
  ...props
}: ButtonProps) {

  const variants = {
        primary:
            "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

        secondary:
            "bg-surface text-default border border-default hover:bg-gray-100 dark:hover:bg-slate-800",

        danger:
            "bg-[var(--color-danger)] text-white hover:opacity-90",

        outline:
            "bg-transparent border border-default text-default hover:bg-gray-100 dark:hover:bg-slate-800",
        ghost:
            "bg-transparent text-default hover:bg-slate-100 dark:hover:bg-slate-800",

        destructive:
    "bg-[var(--color-danger)] text-white hover:opacity-90",

    };

    const sizes = {
    sm: "h-9 px-3 sm:px-4 text-sm",

    md: "h-11 px-4 sm:px-5 text-sm",

    lg: "h-12 px-5 sm:px-6 text-sm sm:text-base",
};

const classes = cn(

    "inline-flex items-center justify-center gap-2",

    "rounded-[var(--radius-md)]",

    "font-medium",

    "transition-all duration-300",

    "shadow-card",

    "hover:-translate-y-0.5 hover:shadow-hover",

    "focus:outline-none focus:ring-4 focus:ring-blue-200",

    "disabled:pointer-events-none disabled:opacity-50",

    fullWidth && "w-full",

    variants[variant],

    sizes[size],

    className

  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {loading ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          leftIcon
        )}

        {children}

        {!loading && rightIcon}
      </Link>
    );
  }

    return (
         <button
      className={classes}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
        />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </button>
    );
}