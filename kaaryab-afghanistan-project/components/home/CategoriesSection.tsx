import type { Opportunity } from "@/components/types/opportunity";
import SectionHeader from "../ui/SectionHeader";

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

const categoryIcons: Record<string, string> = {
  Job: "💼",
  Internship: "🎓",
  Scholarship: "🏆",
  Course: "📚",
  Remote: "🌍",
  Training: "🚀",
};

  return (

    <section className="bg-background py-24">

      <div className="mx-auto max-w-7xl px-6">

          <SectionHeader
    badge="Categories"
    title="Browse by Category"
    description="Discover opportunities by category."
/>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group rounded-card border border-default bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition group-hover:scale-110">
                {/* {category.icon} */}
                {categoryIcons[category.title] ?? "📁"}
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

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}