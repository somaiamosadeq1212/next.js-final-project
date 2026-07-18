import { jobs } from "@/app/data/jobs";

export type OpportunityStats = {
  total: number;
  jobs: number;
  internships: number;
  scholarships: number;
  courses: number;
  remote: number;
  volunteer: number;
};

export function getOpportunityStats(): OpportunityStats {
  return {
    total: jobs.length,

    jobs: jobs.filter(
      (job) => job.category.toLowerCase() === "jobs"
    ).length,

    internships: jobs.filter(
      (job) => job.category.toLowerCase() === "internships"
    ).length,

    scholarships: jobs.filter(
      (job) => job.category.toLowerCase() === "scholarships"
    ).length,

    courses: jobs.filter(
      (job) => job.category.toLowerCase() === "online courses"
    ).length,

    remote: jobs.filter(
      (job) => job.category.toLowerCase() === "remote work"
    ).length,

    volunteer: jobs.filter(
      (job) => job.category.toLowerCase() === "volunteer"
    ).length,
  };
}