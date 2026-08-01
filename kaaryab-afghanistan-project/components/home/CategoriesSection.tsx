import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  FolderOpen,
  Globe,
  GraduationCap,
  Rocket,
} from "lucide-react";

import type { Opportunity } from "@/components/types/opportunity";
import SectionHeader from "../ui/SectionHeader";
import EmptyState from "../EmptyState";

interface CategoriesSectionProps {
  opportunities: Opportunity[];
}

export default function CategoriesSection({
  opportunities,
}: CategoriesSectionProps) {
  const categories = Object.entries(
    opportunities.reduce((acc, opportunity) => {
      acc[opportunity.category] = (acc[opportunity.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([title, count]) => ({
    title,
    count,
  }));

  const categoryIcons: Record<string, React.ReactNode> = {
    Job: <BriefcaseBusiness className="h-8 w-8" />,
    Internship: <GraduationCap className="h-8 w-8" />,
    Scholarship: <Award className="h-8 w-8" />,
    Course: <BookOpen className="h-8 w-8" />,
    Remote: <Globe className="h-8 w-8" />,
    Training: <Rocket className="h-8 w-8" />,
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 font-bold text-lg">
        <SectionHeader
          badge="Categories"
          title="Browse by Category"
          description="Discover opportunities by category."
        />

        {categories.length === 0 ? (
          <div className="mt-16">
            <EmptyState
              title="No categories found"
              description="There are no available opportunity categories at the moment."
            />
          </div>
        ) : (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={`/opportunities?category=${encodeURIComponent(
                  category.title
                )}`}
                className="group rounded-card border border-default bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-hover"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  {categoryIcons[category.title] ?? (
                    <FolderOpen className="h-8 w-8" />
                  )}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-default">
                  {category.title}
                </h3>

                <p className="mt-2 text-muted">
                  {category.count} Opportunities
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    Explore
                  </span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}