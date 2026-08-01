"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Opportunity } from "../types/opportunity";
import Link from "next/link";

type Props = {
  opportunity: Opportunity;

  onDelete: (id: number) => void;
};

export default function MobileOpportunityCard({
  opportunity,
  onDelete,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0 flex-1">

          <h3 className="font-semibold truncate">
            {opportunity.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {opportunity.organization}
          </p>

        </div>

        <Badge className="shrink-0">
          {opportunity.category}
        </Badge>

      </div>

      <div className="mt-5 flex items-center justify-between gap-3">

        <span className="text-sm text-muted-foreground">
          {opportunity.deadline}
        </span>

        <div className="flex gap-2">

          <Link href={`/opportunities/${opportunity.id}`}>
            <Button
              variant="secondary"
              size="sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </Link>

          <Link href={`/dashboard/opportunities/${opportunity.id}/edit`}>
            <Button
              variant="outline"
              size="sm"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>

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