import {
  Award,
  BriefcaseBusiness,
  Building2,
  FolderKanban,
} from "lucide-react";

import type { Opportunity } from "@/components/types/opportunity";
import EmptyState from "../EmptyState";
import SectionHeader from "../ui/SectionHeader";


interface StatisticsSectionProps {
  opportunities: Opportunity[];
}

export default function StatisticsSection({
  opportunities,
}: StatisticsSectionProps) {
  const statistics = [
    {
      title: "Total Opportunities",
      value: opportunities.length,
      icon: <BriefcaseBusiness className="h-8 w-8" />,
    },
    {
      title: "Organizations",
      value: new Set(opportunities.map((item) => item.organization)).size,
      icon: <Building2 className="h-8 w-8" />,
    },
    {
      title: "Categories",
      value: new Set(opportunities.map((item) => item.category)).size,
      icon: <FolderKanban className="h-8 w-8" />,
    },
    {
      title: "Featured",
      value: opportunities.filter((item) => item.featured).length,
      icon: <Award className="h-8 w-8" />,
    },
  ];

  if (statistics.every((item) => item.value === 0)) {
    return (
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <EmptyState
            title="No statistics available"
            description="Statistics will appear once opportunities are available."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Statistics"
          title="Our Impact in Numbers"
          description="A quick overview of opportunities available on KaarYab."
        />

        <div className="grid mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-default bg-surface p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-hover"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h2 className="mt-6 text-5xl font-bold text-default">
                {item.value}
              </h2>

              <p className="mt-3 text-muted">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}