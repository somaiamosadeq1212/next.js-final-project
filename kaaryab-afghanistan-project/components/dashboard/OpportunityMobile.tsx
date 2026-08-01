"use client";

import { Opportunity } from "@/components/types/opportunity";
import MobileOpportunityCard from "./MobileOpportunityCard";

type Props = {
  jobs: Opportunity[];

  onDelete: (id: number) => void;
};

export default function OpportunityMobile({
  jobs,
  onDelete,
}: Props) {
  return (
    <div className="grid gap-5 lg:hidden">

      {jobs.map((job) => (
        <MobileOpportunityCard
          key={job.id}
          opportunity={job}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}