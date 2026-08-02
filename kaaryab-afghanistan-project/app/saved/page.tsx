"use client";

import Link from "next/link";
import { BookmarkCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { useSavedJobs } from "../contexts/SaveContext";
import { jobs } from "../data/jobs";
import OpportunityCard from "@/components/opportunity/OpportunityCard";

export default function SavedJobs() {
    const { savedJobs } = useSavedJobs();
    const savedOpportunities = jobs.filter((job) =>
        savedJobs.includes(job.id)
    );

    if (savedOpportunities.length === 0) {
        return (
            <main className="mx-auto max-w-7xl px-6 py-12">
                <div
                    className="
                        mx-auto
                        max-w-2xl
                        rounded-3xl
                        border
                        border-default
                        bg-card
                        p-10
                        text-center
                        shadow-card
                    ">

                    <div
                        className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-primary/10
                            text-primary
                        ">
                        <BookmarkCheck className="h-10 w-10" />
                    </div>

                    <h1 className="mt-6 text-3xl font-bold text-default">
                        No Saved Opportunities
                    </h1>

                    <p className="mt-4 text-muted">
                        Save opportunities you're interested in and they'll appear here for quick access.
                    </p>

                    <Link
                        href="/opportunities"
                        className="mt-8 inline-block"
                    >
                        <Button>
                            Browse Opportunities
                        </Button>
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <main className="bg-background py-10">
            <div className="mx-auto max-w-7xl px-6">

            {/* Hero */}
            <section
                className="
                    mb-10
                    rounded-3xl
                    border
                    border-default
                    bg-card
                    p-8
                    shadow-card
                ">

                <div
                    className="
                        flex
                        flex-col
                        gap-6
                        md:flex-row
                        md:items-center
                        md:justify-between
                    ">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Saved Jobs
                        </p>

                        <h1 className="mt-2 text-4xl font-bold text-default">
                            Saved Opportunities
                        </h1>

                        <p className="mt-3 max-w-2xl text-muted">
                            Review your saved opportunities and apply whenever you're ready.
                        </p>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            bg-primary/10
                            px-8
                            py-6
                            text-center
                        ">

                        <p className="text-4xl font-bold text-primary">
                            {savedOpportunities.length}
                        </p>

                        <p className="mt-1 text-sm text-muted">
                            Saved Opportunities
                        </p>

                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {savedOpportunities.map((job) => (

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

            </section>

            </div>
        </main>
    );
}