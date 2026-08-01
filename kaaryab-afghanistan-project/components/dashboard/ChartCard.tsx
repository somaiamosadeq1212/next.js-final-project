"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
};

type ChartCardProps = {
  title: string;
  type: "bar" | "pie";
  data: ChartData[];
};

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

type CustomTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: {
    value: number;
    name: string;
  }[];
};

function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null;
  }

  return (
    <div
      className="
        rounded-xl
        border
        border-default
        bg-surface
        px-4
        py-3
        shadow-lg
      "
    >
      <p className="text-sm font-medium text-default">
        {label}
      </p>

      <p className="mt-1 text-sm text-primary">
        Value:{" "}
        <span className="font-semibold">
          {payload[0].value}
        </span>
      </p>
    </div>
  );
}

export default function ChartCard({
  title,
  type,
  data,
}: ChartCardProps) {

  const gradientId = "dashboard-bar-gradient";

  return (
    <div
      className="
        rounded-card
        shadow-card
        hover:shadow-hover
        hover:-translate-y-1
        transition-theme
        border
        border-default
        bg-surface
        p-5
        duration-300
        sm:p-6
      "
    >
      {/* Dashboard chart title */}
      <div className="mb-6">

        <h2 className="text-xl font-bold text-default">
          {title}
        </h2>

        <p className="mt-1 text-sm text-muted">
          Overview
        </p>

      </div>

      <div className="
            h-[280px]
            sm:h-[340px]
            lg:h-[380px]
            xl:h-[420px]">
        {/* Charts automatically scale across all screen sizes */}
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 16,
                left: -16,
                bottom: 0,
              }}
            >

              <defs>
                <linearGradient
                  id={gradientId}
                  // id="dashboard-bar-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#3b82f6"
                  />
                  <stop
                    offset="100%"
                    stopColor="#1d4ed8"
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="var(--color-border)"
              />

              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{
                  fill: "var(--color-text-muted)",
                  fontSize: 12,
                }}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{
                  fill: "var(--color-text-muted)",
                  fontSize: 12,
                }}
              />

              <Tooltip
                cursor={{
                  fill: "rgba(37,99,235,.08)",
                }}
                content={<CustomTooltip />}
              />

              <Bar
                dataKey="value"
                fill={`url(#${gradientId})`}
                radius={[8, 8, 0, 0]}
                animationDuration={700}
              />

            </BarChart>
          ) : (
            <PieChart>
              <Tooltip
                content={<CustomTooltip />}
              />

              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                  paddingTop: 20,
                  fontSize: 13,
                  color: "var(--color-text-muted)",
                }}
              />

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={95}
                innerRadius={55}
                paddingAngle={3}
                isAnimationActive
                animationDuration={700}
                stroke="transparent"
                cornerRadius={8}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}