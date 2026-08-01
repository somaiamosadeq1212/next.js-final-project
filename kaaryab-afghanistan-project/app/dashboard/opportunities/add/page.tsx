"use client";

import OpportunityForm from "@/components/forms/OpportunityForm";
import type { OpportunitySchema } from "@/lib/validation/opportunity-schema";
import { useOpportunity } from "@/hooks/useOpportunity";

export default function AddOpportunityPage() {
  const { createOpportunity, loading } = useOpportunity();

  const handleSubmit = async (data: OpportunitySchema) => {
    await createOpportunity(data);

  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">

        <h1 className="text-3xl font-bold sm:text-4xl">
          Add Opportunity
        </h1>

        <p className="mt-2 text-muted-foreground">
          Publish a new job, internship, scholarship or course.
        </p>

      </div>

      <OpportunityForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </main>
  );
}