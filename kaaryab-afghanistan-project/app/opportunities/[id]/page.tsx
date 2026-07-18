import { jobs } from "@/app/data/jobs";
import Link from "next/link";
import { notFound } from "next/navigation";

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

import {Card} from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SaveOpportunityButton from "@/components/SaveOpportunityButton";
import OpportunityCard from "@/components/opportunity/OpportunityCard";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    notFound();
  }

  const relatedJobs = jobs
  .filter(
    (item) =>
      item.category === job.category &&
      item.id !== job.id
  )
  .slice(0, 3);

  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen py-10">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Back Button */}

        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={18} />
          Back to Opportunities
        </Link>

        {/* Hero */}

        <Card className="p-8 lg:p-10 mb-8">

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

                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {job.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-muted-foreground">

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

              <Button className="w-full">
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

    {/* Job Information */}

    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Job Information
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">

        <div className="rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Building2 size={18} />
            <span className="font-semibold">
              Organization
            </span>
          </div>

          <p className="text-muted-foreground">
            {job.organization}
          </p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wallet size={18} />
            <span className="font-semibold">
              Salary
            </span>
          </div>

          <p className="text-muted-foreground">
            {job.salary}
          </p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Calendar size={18} />
            <span className="font-semibold">
              Deadline
            </span>
          </div>

          <p className="text-muted-foreground">
            {job.deadline}
          </p>
        </div>

        <div className="rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Briefcase size={18} />
            <span className="font-semibold">
              Experience
            </span>
          </div>

          <p className="text-muted-foreground">
            {job.experience}
          </p>
        </div>

      </div>
    </Card>

    {/* Description */}

    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Job Description
      </h2>

      <p className="leading-8 text-muted-foreground">
        {job.description}
      </p>
    </Card>

    {/* Requirements */}

    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Requirements
      </h2>

      <ul className="space-y-4">
        {job.requirements.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-border p-4"
          >
            <span className="text-green-600 font-bold">✓</span>

            <span className="text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Card>

  </div>

  {/* Sidebar */}

  <aside className="space-y-6">

    <Card className="p-6">

      <h3 className="text-xl font-semibold mb-5">
        Contact Information
      </h3>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-muted-foreground">
            Organization
          </p>

          <p className="font-medium">
            {job.organization}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">
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
          <p className="text-sm text-muted-foreground">
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

      <p className="text-sm text-muted-foreground mb-6">
        Save this opportunity or contact the organization to submit your
        application before the deadline.
      </p>

      <div className="space-y-3">

        <Button className="w-full">
          Apply Now
        </Button>

        <SaveOpportunityButton jobId={job.id} />

      </div>

    </Card>

  </aside>

</div>

      </div>


      {/* Related Opportunities */}

<section className="mt-16">

  <div className="flex items-center justify-between mb-8">

    <div>

      <h2 className="text-3xl font-bold">
        Related Opportunities
      </h2>

      <p className="text-muted-foreground mt-2">
        Similar opportunities you may be interested in.
      </p>

    </div>

    <Link
      href="/opportunities"
      className="text-primary hover:underline"
    >
      View All
    </Link>

  </div>

  {relatedJobs.length > 0 ? (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {relatedJobs.map((job) => (

        <OpportunityCard
          key={job.id}
          job={job}
        />

      ))}

    </div>

  ) : (

    <Card className="p-8 text-center">

      <h3 className="text-xl font-semibold mb-2">
        No Related Opportunities
      </h3>

      <p className="text-muted-foreground">
        More opportunities will appear here soon.
      </p>

    </Card>

  )}

</section>

    </main>
  );
}