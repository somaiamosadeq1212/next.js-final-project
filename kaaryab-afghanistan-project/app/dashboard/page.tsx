import ChartCard from "@/components/dashboard/ChartCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
// import {ChartCard} from "@/components/dashboard/ChartCard";
import RecentTable from "@/components/dashboard/RecentTable";

import { monthlyData, categoryData } from "@/lib/chart-data";

export default function DashboardPage() {
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

      {/* <ChartCard /> */}

      <RecentTable />

    </div>
  );
}