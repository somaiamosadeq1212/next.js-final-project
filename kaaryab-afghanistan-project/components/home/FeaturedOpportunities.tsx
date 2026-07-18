import Link from "next/link";
import { getOpportunityData } from "@/lib/opportunities";
import OpportunityCard from "../opportunity/OpportunityCard";
import SectionHeader from "../ui/SectionHeader";

export default function FeaturedOpportunities() {
    const { featured } = getOpportunityData();
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div className="max-w-2xl">

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-primary">
              Featured Opportunities
            </span>

            <h2 className="mt-5 text-4xl font-bold text-default md:text-5xl">
              Find Your Perfect Opportunity
            </h2>

            <p className="mt-4 text-lg text-muted">
              Browse the newest jobs, scholarships, internships,
              remote positions and training programs from trusted organizations.
            </p>

          </div>

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

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 6).map((job) => (
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

        {/* <div>Cards Test</div> */}

      </div>
    </section>
  );
}