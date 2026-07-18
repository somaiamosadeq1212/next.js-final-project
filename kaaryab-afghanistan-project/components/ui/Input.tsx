"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>& {
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
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
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            placeholder:text-slate-400
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
            dark:placeholder:text-slate-500
            dark:hover:border-slate-600
            dark:focus:ring-blue-900/30
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