import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title:ReactNode
  subtitle?:ReactNode
  icon?: ReactNode;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  icon,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="mb-2 flex items-center gap-2">
        {icon}

        <h2 className="text-3xl font-bold text-default">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}