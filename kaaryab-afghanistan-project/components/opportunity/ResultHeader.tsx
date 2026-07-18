"use client";

import { BriefcaseBusiness } from "lucide-react";

type ResultHeaderProps = {
  total: number;
};

export default function ResultHeader({
  total,
}: ResultHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-default pb-6 md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-default">
            Opportunities
          </h2>

          <p className="text-muted">
            {total} opportunities found
          </p>

        </div>

      </div>

    </div>
  );
}