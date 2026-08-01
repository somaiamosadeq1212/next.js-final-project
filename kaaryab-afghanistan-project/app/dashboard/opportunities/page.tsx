import OpportunityTable from "@/components/dashboard/OpportunityTable";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function DashboardOpportunitiesPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>

          <h1 className="text-3xl font-bold">
            Opportunities
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage all opportunities from one place.
          </p>

        </div>

        <Link href="/dashboard/opportunities/add">
          <Button>
            Add Opportunity
          </Button>
        </Link>

      </div>

      <OpportunityTable />

    </section>
  );
}