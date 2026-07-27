"use client";

import OpportunityRow from "./OpportunityRow";
import TableHeader from "./TableHeader";

import { Opportunity } from "@/components/types/opportunity";

type Props = {
  jobs: Opportunity[];

  onDelete: (id: number) => void;

  onSort: () => void;
};

export default function OpportunityDesktop({
  jobs,
  onDelete,
  onSort,
}: Props) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow lg:block">

      <table className="w-full">

        <TableHeader onSort={onSort} />

        <tbody>

          {jobs.map((job) => (
            <OpportunityRow
              key={job.id}
              opportunity={job}
              onDelete={onDelete}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}