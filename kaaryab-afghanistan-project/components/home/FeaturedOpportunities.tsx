import Link from "next/link";
import OpportunityCard from "../opportunity/OpportunityCard";
import SectionHeader from "../ui/SectionHeader";
import type { Opportunity } from "@/components/types/opportunity";
import EmptyState from "../EmptyState";

interface FeaturedOpportunitiesProps {
  opportunities: Opportunity[];
}

export default function FeaturedOpportunities({
  opportunities,
}: FeaturedOpportunitiesProps) {
  const featuredJobs = opportunities
    .filter((job) => job.featured)
    .slice(0, 6);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row font-bold text-lg">
          <SectionHeader
            badge="Featured"
            title="Featured Opportunities"
            description="Discover verified opportunities."
          />

          <Link
            href="/opportunities"
            className="rounded-card border border-default bg-background px-6 py-3 font-semibold text-default transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
          >
            View All →
          </Link>
        </div>

        {/* Content */}
        {featuredJobs.length === 0 ? (
          <EmptyState
            title="No featured opportunities"
            description="Check back later for new opportunities."
          />
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredJobs.map((job) => (
              <OpportunityCard
                key={job.id}
                id={job.id}
                title={job.title}
                organization={job.organization}
                category={job.category}
                location={job.location}
                type={job.type}
                salary={job.salary}
                deadline={job.deadline}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}