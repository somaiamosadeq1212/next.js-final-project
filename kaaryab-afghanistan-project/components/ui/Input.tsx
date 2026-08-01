"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>& {
  label?: string;
};

// Reusable input component with optional label and ref forwarding.
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-default"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={cn(
            `
            w-full
            rounded-xl
            border
            px-4
            py-3
            transition-theme
            duration-200
            bg-background
            text-default
            placeholder:text-muted
            focus:outline-none
            focus:ring-2
            focus:ring-primary/20
            focus:border-primary
            `,
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;