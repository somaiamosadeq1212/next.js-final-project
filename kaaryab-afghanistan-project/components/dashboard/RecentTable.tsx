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
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Loading recent opportunities...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Recent Opportunities
        </h2>

        <Link
          href="/opportunities"
          className="text-sm font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-left text-sm text-slate-500">
            <tr>
              <th className="py-3">Title</th>
              <th className="py-3">Category</th>
              <th className="py-3">Location</th>
              <th className="py-3">Deadline</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((job) => (
              <tr
                key={job.id}
                className="border-b last:border-0"
              >
                <td className="py-4 font-medium">
                  {job.title}
                </td>

                <td>{job.category}</td>

                <td>{job.location}</td>

                <td>{job.deadline}</td>
              </tr>
            ))}

            {recent.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-slate-500"
                >
                  No opportunities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}