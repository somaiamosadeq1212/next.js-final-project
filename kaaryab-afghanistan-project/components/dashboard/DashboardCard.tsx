import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  color,
}: DashboardCardProps) {
  return (
    // Reusable dashboard summary card.
    <div
      className="
        rounded-2xl
        border
        border-default
        bg-surface
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {/* Card title */}
          <p className="text-sm font-medium text-muted">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-default sm:text-4xl">
            {value}
          </h2>

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-1
              rounded-full
              bg-green-100
              px-2.5
              py-1
              text-sm
              font-medium
              text-green-700
              dark:bg-green-500/15
              dark:text-green-400
            "
          >
            <ArrowUpRight size={16} />
            Updated
          </div>
        </div>

        {/* Card icon */}
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-white
            shadow-sm
            ${color}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}