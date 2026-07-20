"use client";

import Link from "next/link";
import { getOpportunityData } from "@/lib/opportunities";

export default function RecentTable() {
  const { jobs  } = getOpportunityData();

  const recent = jobs.slice(0, 5);

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
          </tbody>
        </table>
      </div>
    </div>
  );
}