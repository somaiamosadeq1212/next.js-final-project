"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import {
  ArrowLeft,
  MapPin,
  Building2,
  Calendar,
  Briefcase,
  Wallet,
  Clock,
  Mail,
} from "lucide-react";

import { getOpportunity, getOpportunities } from "@/lib/mockApi";
import { Opportunity } from "@/components/types/opportunity";

import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SaveOpportunityButton from "@/components/SaveOpportunityButton";
import OpportunityCard from "@/components/opportunity/OpportunityCard";
import LoadingSkeleton from "../ui/LoadingSkeleton";

type Props = {
  id: number;
};

export default function OpportunityDetailsClient({
  id,
}: Props) {
  const [job, setJob] = useState<Opportunity | null>(null);

  const [relatedJobs, setRelatedJobs] = useState<
    Opportunity[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const currentJob = await getOpportunity(id);

        const jobs = await getOpportunities();

        const related = jobs
          .filter(
            (item) =>
              item.category === currentJob.category &&
              item.id !== currentJob.id
          )
          .slice(0, 3);

        setJob(currentJob);
        setRelatedJobs(related);
      } catch (error) {
        console.error(error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  if (loading) {
    return (
      <main className="bg-background min-h-screen py-10">
        <div className="mx-auto max-w-7xl px-6">
          <LoadingSkeleton rows={8} />
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="bg-background min-h-screen py-10">
        <div className="container mx-auto max-w-7xl px-4">
          Opportunity not found.
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen py-10">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Back Button */}
        <Link
          aria-label="Back to opportunities"
          href="/opportunities"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={18} />
          Back to Opportunities
        </Link>

        {/* Hero */}
        <Card className="p-8 lg:p-10 mb-8 shadow-card transition-theme">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

            {/* Left */}
            <div className="space-y-6 flex-1">

              <div className="flex flex-wrap gap-3">

                <Badge>
                  {job.type}
                </Badge>

                <Badge variant="secondary">
                  {job.category}
                </Badge>

              </div>

              <div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {job.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-muted">

                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    {job.organization}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    {job.posted}
                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 w-full lg:w-60">

              <Button
                onClick={() =>
                  toast.info(
                    "Application feature will be available in the production version."
                  )
                }
              >
                Apply Now
              </Button>

              <SaveOpportunityButton jobId={job.id} />

            </div>

          </div>

        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">

            <Card className="p-6">

              <h2 className="text-2xl font-bold mb-6">
                Job Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="
                  rounded-card
                  border
                  border-default
                  bg-surface
                  shadow-card
                  transition-theme
                  hover:-translate-y-1
                  hover:shadow-hover
                  p-5">

                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Building2 size={18} />
                    <span className="font-semibold">
                      Organization
                    </span>
                  </div>

                  <p className="text-muted">
                    {job.organization}
                  </p>

                </div>

                <div className="
                    rounded-card
                    border
                    border-default
                    bg-surface
                    shadow-card
                    transition-theme
                    hover:-translate-y-1
                    hover:shadow-hover
                    p-5">

                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Wallet size={18} />
                    <span className="font-semibold">
                      Salary
                    </span>
                  </div>

                  <p className="text-muted">
                    {job.salary}
                  </p>

                </div>

                <div className="
                    rounded-card
                    border
                    border-default
                    bg-surface
                    shadow-card
                    transition-theme
                    hover:-translate-y-1
                    hover:shadow-hover
                    p-5">

                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Calendar size={18} />
                    <span className="font-semibold">
                      Deadline
                    </span>
                  </div>

                  <p className="text-muted">
                    {job.deadline}
                  </p>

                </div>

                <div className="
                  rounded-card
                  border
                  border-default
                  bg-surface
                  shadow-card
                  transition-theme
                  hover:-translate-y-1
                  hover:shadow-hover
                  p-5">

                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Briefcase size={18} />
                    <span className="font-semibold">
                      Experience
                    </span>
                  </div>

                  <p className="text-muted">
                    {job.experience}
                  </p>

                </div>

              </div>

            </Card>

            <Card className="p-6">

              <h2 className="text-2xl font-bold mb-6">
                Job Description
              </h2>

              <p className="leading-8 text-muted">
                {job.description}
              </p>

            </Card>

            <Card className="p-6">

              <h2 className="text-2xl font-bold mb-6">
                Requirements
              </h2>

              <ul className="space-y-4">

                {job.requirements.map((item) => (

                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-default p-4"
                  >

                    <span className="text-green-600 font-bold">
                      ✓
                    </span>

                    <span className="text-muted">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </Card>

          </div>

          {/* Sidebar */}

          <aside className="
            space-y-6
            lg:sticky
            lg:top-24
            self-start
          ">

            <Card className="p-6">

              <h3 className="text-xl font-semibold mb-5">
                Contact Information
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-sm text-muted">
                    Organization
                  </p>

                  <p className="font-medium">
                    {job.organization}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted mb-1">
                    Email
                  </p>

                  <a
                    href={`mailto:${job.email}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline break-all"
                  >
                    <Mail size={18} />
                    {job.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Deadline
                  </p>

                  <p className="font-medium">
                    {job.deadline}
                  </p>
                </div>

              </div>

            </Card>

            <Card className="p-6">

              <h3 className="text-xl font-semibold mb-5">
                Ready to Apply?
              </h3>

              <p className="text-sm text-muted mb-6">
                Save this opportunity or contact the organization to submit your
                application before the deadline.
              </p>

              <div className="flex items-center gap-3 flex-wrap">

                <Button
                className="px-4"
                  onClick={() =>
                    toast.info(
                      "Application feature will be available in the production version."
                    )
                  }
                >
                  Apply Now
                </Button>

                <SaveOpportunityButton jobId={job.id} />

              </div>

            </Card>

          </aside>

        </div>

      </div>

      {/* Related Opportunities */}

      <section className="mt-16 mx-auto max-w-7xl">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold p-4">
              Related Opportunities
            </h2>

            <p className="text-muted font-simibold text-lg mt-2 pl-6">
              Similar opportunities you may be interested in.
            </p>

          </div>

          <Link
            href="/opportunities"
            className="text-primary hover:underline pr-10"
          >
            View All
          </Link>

        </div>

        {relatedJobs.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {relatedJobs.map((job) => (

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
                featured={job.featured}
              />

            ))}

          </div>

        ) : (

          <Card className="p-8 text-center transition-theme">

            <h3 className="text-xl font-semibold mb-2">
              No Related Opportunities
            </h3>

            <p className="text-muted">
              More opportunities will appear here soon.
            </p>

          </Card>

        )}

      </section>

    </main>
  );
}