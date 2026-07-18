"use client";

import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {Card} from "@/components/ui/Card";
import SaveOpportunityButton from "@/components/SaveOpportunityButton";
import { Avatar } from "@/components/ui";

type OpportunityCardProps = {
  id: number;
  title: string;
  organization: string;
  category: string;
  location: string;
  type: string;
  salary?: string;
  deadline: string;
  featured?: boolean;
};

export default function OpportunityCard({
  id,
  title,
  organization,
  category,
  location,
  type,
  salary,
  deadline,
  featured = false,
}: OpportunityCardProps) {
  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        justify-between
        rounded-3xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        p-4
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div className="flex flex-wrap gap-2">

          <Badge>
            {category}
          </Badge>

          {featured && (
            <Badge>
              <Sparkles className="h-3.5 w-3.5" />
              Featured
            </Badge>
          )}

        </div>

        <div className="shrink-0">
          <SaveOpportunityButton jobId={id} />
        </div>

        

      </div>

      {/* Body */}

      <div className="mt-6">

        <h3
          className="
            line-clamp-2
            text-2xl
            font-bold
            text-default
            transition-colors
            group-hover:text-primary
          "
        >
          {title}
        </h3>

        {/* Company */}

        <div className="mt-6 flex items-center gap-3">

          <Avatar name={organization} />

          <div>

            <p className="font-semibold text-default">
              {organization}
            </p>

            <div className="mt-1 flex items-center gap-1 text-sm text-muted">
              <Building2 className="h-4 w-4" />
              Organization
            </div>

          </div>

        </div>

        {/* Meta */}

        <div className="mt-8 space-y-3">

          <MetaItem
            icon={<MapPin className="h-4 w-4" />}
            label={location}
          />

          <MetaItem
            icon={<BriefcaseBusiness className="h-4 w-4" />}
            label={type}
          />

          <MetaItem
            icon={<Banknote className="h-4 w-4" />}
            label={salary || "Negotiable"}
          />

          <MetaItem
            icon={<CalendarDays className="h-4 w-4" />}
            label={deadline}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8">

        <Link href={`/opportunities/${id}`}>

          <Button
            fullWidth
            rightIcon={
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            }
          >
            View Details
          </Button>

        </Link>

      </div>

    </Card>
  );
}

type MetaItemProps = {
  icon: React.ReactNode;
  label: string;
};

function MetaItem({
  icon,
  label,
}: MetaItemProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-default
        bg-background
        px-4
        py-3
      "
    >
      <div className="text-primary">
        {icon}
      </div>

      <span className="text-sm text-muted">
        {label}
      </span>
    </div>
  );
}