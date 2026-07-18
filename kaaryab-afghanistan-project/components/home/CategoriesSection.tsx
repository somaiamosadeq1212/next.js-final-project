import { getOpportunityData } from "@/lib/opportunities";
import SectionHeader from "../ui/SectionHeader";

export default function CategoriesSection() {

  const { categories } = getOpportunityData();

  return (

    <section className="bg-background py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-default bg-surface px-4 py-2 text-sm font-medium text-primary shadow-card">
            Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-default md:text-5xl">
            Browse by Category
          </h2>

          <p className="mt-5 text-lg text-muted">
            Explore thousands of opportunities across different categories.
          </p>

        </div> */}

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
                {category.icon}
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