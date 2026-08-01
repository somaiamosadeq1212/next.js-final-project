"use client";

import { useEffect, useState } from "react";
import ChartCard from "@/components/dashboard/ChartCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentTable from "@/components/dashboard/RecentTable";

import {
  getCategoryChart,
  getMonthlyChart,
  ChartDataItem,
} from "@/lib/dashboard";

// Dashboard overview with stats, charts, and recent opportunities.
export default function DashboardPage() {
  const [monthlyData, setMonthlyData] = useState<ChartDataItem[]>([]);
  const [categoryData, setCategoryData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      const monthly = await getMonthlyChart();
      const categories = await getCategoryChart();

      setMonthlyData(monthly);
      setCategoryData(categories);
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-8">
      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Monthly Opportunities"
          type="bar"
          data={monthlyData}
        />

        <ChartCard
          title="Categories"
          type="pie"
          data={categoryData}
        />
      </div>

      <RecentTable />
    </div>
  );
}