import {
  Briefcase,
  GraduationCap,
  Laptop,
  Globe,
  Clock,
  Layers,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

const stats = [
  {
    title: "Total Opportunities",
    value: 126,
    icon: <Layers size={28} />,
    color: "bg-blue-600",
  },
  {
    title: "Jobs",
    value: 58,
    icon: <Briefcase size={28} />,
    color: "bg-green-600",
  },
  {
    title: "Scholarships",
    value: 24,
    icon: <GraduationCap size={28} />,
    color: "bg-purple-600",
  },
  {
    title: "Internships",
    value: 18,
    icon: <Laptop size={28} />,
    color: "bg-orange-500",
  },
  {
    title: "Remote",
    value: 31,
    icon: <Globe size={28} />,
    color: "bg-cyan-600",
  },
  {
    title: "Expiring Soon",
    value: 9,
    icon: <Clock size={28} />,
    color: "bg-red-500",
  },
];

export default function DashboardStats() {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {stats.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  );
}
