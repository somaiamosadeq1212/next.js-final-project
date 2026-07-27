"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import { Pencil, Trash2 } from "lucide-react";
import { Opportunity } from "../types/opportunity";

type Props = {
  opportunity: Opportunity;

  onDelete: (id: string) => void;
};

export default function MobileOpportunityCard({
  opportunity,
  onDelete,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="font-semibold">
            {opportunity.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {opportunity.organization}
          </p>

        </div>

        <Badge>
          {opportunity.category}
        </Badge>

      </div>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-muted-foreground">
          {opportunity.deadline}
        </span>

        <div className="flex gap-2">

          <Button
            variant="outline"
            size="sm"
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={() =>
              onDelete(opportunity.id)
            }
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </div>

    </div>
  );
}