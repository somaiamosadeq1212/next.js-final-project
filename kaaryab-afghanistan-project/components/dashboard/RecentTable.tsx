"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Opportunity } from "@/components/types/opportunity";
import { getRecentOpportunities } from "@/lib/dashboard";

export default function RecentTable() {
  const [recent, setRecent] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecent() {
      try {
        const data = await getRecentOpportunities(5);
        setRecent(data);
      } finally {
        setLoading(false);
      }
    }

    loadRecent();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-default bg-surface p-5 shadow-sm sm:p-6">
        <p className="text-sm text-muted">
          Loading recent opportunities...
        </p>
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-default bg-surface shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 rounded-2xl border border-default p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-default">
            Recent Opportunities
          </h2>

          <p className="mt-1 text-sm text-muted">
            Latest opportunities added to the platform.
          </p>
        </div>

        <Link
          href="/opportunities"
          className="text-sm font-medium text-primary transition-theme hover:opacity-80"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] min-w-full text-sm">
          <thead className="border-b border-default">
            <tr className="text-left text-muted">
              <th className="px-5 py-4 font-medium">Title</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Location</th>
              <th className="px-5 py-4 font-medium">Deadline</th>
            </tr>
          </thead>

          <tbody>
            {/* Recent opportunities */}
            {recent.map((job) => (
              <tr
                key={job.id}
                className="border-b border-default transition-theme last:border-0 hover:bg-muted/40"
              >

                <td className="max-w-xs px-5 py-4">
                  <p className="truncate font-medium text-default">
                    {job.title}
                  </p>
                </td>

                <td className="px-5 py-4 text-muted">
                  {job.category}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-muted">
                  {job.location}
                </td>

                <td className="whitespace-nowrap px-5 py-4 text-muted">
                  {job.deadline}
                </td>
              </tr>
            ))}

            {recent.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-5 py-10 text-center text-muted"
                >
                  No opportunities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}