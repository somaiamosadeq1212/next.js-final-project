import { jobs } from "@/app/data/jobs";

export function getOpportunityData() {
  const total = jobs.length;

  const jobsCount = jobs.filter(
    (item) => item.category === "Jobs"
  ).length;

  const internshipCount = jobs.filter(
    (item) => item.category === "Internships"
  ).length;

  const scholarshipCount = jobs.filter(
    (item) => item.category === "Scholarships"
  ).length;

  const courseCount = jobs.filter(
    (item) => item.category === "Online Courses"
  ).length;

  const remoteCount = jobs.filter(
    (item) => item.category === "Remote Work"
  ).length;

  const volunteerCount = jobs.filter(
    (item) => item.category === "Volunteer"
  ).length;

  return {
    jobs,
    total,

    featured: jobs.slice(0, 6),

    statistics: [
      {
        title: "Jobs",
        value: jobsCount,
        icon: "💼",
      },
      {
        title: "Scholarships",
        value: scholarshipCount,
        icon: "🎓",
      },
      {
        title: "Internships",
        value: internshipCount,
        icon: "🚀",
      },
      {
        title: "Remote Work",
        value: remoteCount,
        icon: "🌍",
      },
    ],

    categories: [
      {
        title: "Jobs",
        icon: "💼",
        count: jobsCount,
      },
      {
        title: "Internships",
        icon: "🚀",
        count: internshipCount,
      },
      {
        title: "Scholarships",
        icon: "🎓",
        count: scholarshipCount,
      },
      {
        title: "Online Courses",
        icon: "📚",
        count: courseCount,
      },
      {
        title: "Remote Work",
        icon: "🌍",
        count: remoteCount,
      },
      {
        title: "Volunteer",
        icon: "🤝",
        count: volunteerCount,
      },
    ],
  };
}