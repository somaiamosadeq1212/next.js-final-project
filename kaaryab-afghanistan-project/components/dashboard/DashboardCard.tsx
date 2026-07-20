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
    <div
      className="
        bg-white
        rounded-2xl
        border
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-1
              text-green-600
              text-sm
              font-medium
            "
          >
            <ArrowUpRight size={16} />
            Updated
          </div>

        </div>

        <div
          className={`
            h-14
            w-14
            rounded-xl
            flex
            items-center
            justify-center
            text-white
            ${color}
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}