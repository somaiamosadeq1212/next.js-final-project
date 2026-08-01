"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DeadlineBadge from "./DeadlineBadge";
import { Opportunity } from "@/components/types/opportunity";

type OpportunityRowProps = {
  opportunity: Opportunity;
  onDelete: (id: number) => void;
};

export default function OpportunityRow({
  opportunity,
  onDelete,
}: OpportunityRowProps) {

  return (
    <tr className="border-b border-border hover:bg-muted/40 transition-theme">

      <td className="max-w-xs px-4 py-4 xl:px-6 xl:py-5">
        <p className="truncate font-medium">
          {opportunity.title}
        </p>
      </td>

      <td className="px-4 py-4 xl:px-6 xl:py-5">
        <Badge>{opportunity.category}</Badge>
      </td>

      <td className="max-w-[220px] px-4 py-4 xl:px-6 xl:py-5">
        <p className="truncate">
          {opportunity.organization}
        </p>
      </td>

      <td className="px-4 py-4 xl:px-6 xl:py-5">
        <DeadlineBadge
          deadline={opportunity.deadline}
        />
      </td>

      <td className="px-4 py-4 xl:px-6 xl:py-5">
        <div className="flex items-center justify-end gap-2 whitespace-nowrap">

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
            size="sm"
            variant="destructive"
            onClick={() => onDelete(opportunity.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>
      </td>

    </tr>
  );
}