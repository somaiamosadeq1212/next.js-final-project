import { Opportunity } from "@/components/types/opportunity";
import { getOpportunities } from "@/lib/mockApi";

export interface DashboardStats {
  total: number;
  jobs: number;
  internships: number;
  scholarships: number;
  onlineCourses: number;
  remoteWork: number;
  trainingPrograms: number;
  volunteerWork: number;
  featured: number;
  expiringSoon: number;
}

export interface ChartDataItem {
  name: string;
  value: number;
}

const DAY_IN_MS = 1000 * 60 * 60 * 24;

function getDaysRemaining(deadline: string) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const end = new Date(deadline);

  end.setHours(0, 0, 0, 0);

  return Math.ceil(
    (end.getTime() - today.getTime()) / DAY_IN_MS
  );
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const opportunities = await getOpportunities();

  return {
    total: opportunities.length,

    jobs: opportunities.filter(
      (item) => item.category === "Job"
    ).length,

    internships: opportunities.filter(
      (item) => item.category === "Internship"
    ).length,

    scholarships: opportunities.filter(
      (item) => item.category === "Scholarship"
    ).length,

    onlineCourses: opportunities.filter(
      (item) => item.category === "Online Course"
    ).length,

    remoteWork: opportunities.filter(
      (item) => item.category === "Remote Work"
    ).length,

    trainingPrograms: opportunities.filter(
      (item) => item.category === "Training Program"
    ).length,

    volunteerWork: opportunities.filter(
      (item) => item.category === "Volunteer Work"
    ).length,

    featured: opportunities.filter(
      (item) => item.featured
    ).length,

    expiringSoon: opportunities.filter((item) => {
      const days = getDaysRemaining(item.deadline);

      return days >= 0 && days <= 7;
    }).length,
  };
}

export async function getCategoryChart(): Promise<ChartDataItem[]> {
  const opportunities = await getOpportunities();

  const categories = [
    "Job",
    "Internship",
    "Scholarship",
    "Online Course",
    "Remote Work",
    "Training Program",
    "Volunteer Work",
  ];

  return categories.map((category) => ({
    name: category,
    value: opportunities.filter(
      (item) => item.category === category
    ).length,
  }));
}

export async function getMonthlyChart(): Promise<ChartDataItem[]> {
  const opportunities = await getOpportunities();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const values = new Array(12).fill(0);

  opportunities.forEach((item) => {
    const month = new Date(item.deadline).getMonth();

    if (month >= 0 && month <= 11) {
      values[month]++;
    }
  });

  return months.map((month, index) => ({
    name: month,
    value: values[index],
  }));
}

export async function getRecentOpportunities(
  limit = 5
): Promise<Opportunity[]> {
  const opportunities = await getOpportunities();

  return opportunities.slice(0, limit);
}

export async function getFeaturedOpportunities() {
  const opportunities = await getOpportunities();

  return opportunities.filter(
    (item) => item.featured
  );
}

export async function getExpiringSoonOpportunities() {
  const opportunities = await getOpportunities();

  return opportunities.filter((item) => {
    const days = getDaysRemaining(item.deadline);

    return days >= 0 && days <= 7;
  });
}

export async function getOpportunitiesByCategory(
  category: string
) {
  const opportunities = await getOpportunities();

  return opportunities.filter(
    (item) => item.category === category
  );
}