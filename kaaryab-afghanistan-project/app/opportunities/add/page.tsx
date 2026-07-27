"use client";

import { useRouter } from "next/navigation";

import OpportunityForm from "@/components/forms/OpportunityForm";
import type { OpportunitySchema } from "@/lib/validation/opportunity-schema";
import { useOpportunity } from "@/hooks/useOpportunity";

export default function AddOpportunityPage() {
  const router = useRouter();

  const { createOpportunity, loading } = useOpportunity();


  const handleSubmit = async (data: OpportunitySchema) => {
    await createOpportunity(data);

    router.push("/opportunities");
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
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