// import { HTMLAttributes } from "react";
// import { cn } from "@/lib/utils";

// type BadgeProps = HTMLAttributes<HTMLSpanElement>;

// export default function Badge({
//   className,
//   children,
//   ...props
// }: BadgeProps) {
//   return (
//     <span
//       className={cn(
//         `
//         inline-flex
//         items-center
//         rounded-full
//         bg-primary-light
//         px-3
//         py-1
//         text-xs
//         font-semibold
//         text-primary
//         transition-colors
//         `,
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </span>
//   );
// }


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
        text-xs
        font-semibold
        transition-colors
        `,
        variant === "default" &&
          "bg-primary-light text-primary",

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