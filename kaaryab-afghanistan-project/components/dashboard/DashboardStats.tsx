"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  Globe,
  Clock,
  Layers,
} from "lucide-react";

import DashboardCard from "./DashboardCard";
import {
  getDashboardStats,
  DashboardStats as DashboardStatsType,
} from "@/lib/dashboard";

export default function DashboardStats() {
  const [stats, setStats] =
    useState<DashboardStatsType | null>(null);

    // Load dashboard statistics on initial render.
  useEffect(() => {
    async function loadStats() {
      const data = await getDashboardStats();
      setStats(data);
    }

    loadStats();
  }, []);

  if (!stats) {
    return (
      <p className="text-sm text-muted">
        Loading dashboard...
      </p>
    );
  }

  // Dashboard summary cards displayed at the top of the page.
  const cards = [
    {
      title: "Total Opportunities",
      value: stats.total,
      icon: <Layers size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Jobs",
      value: stats.jobs,
      icon: <Briefcase size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Scholarships",
      value: stats.scholarships,
      icon: <GraduationCap size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "Internships",
      value: stats.internships,
      icon: <Laptop size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Remote Work",
      value: stats.remoteWork,
      icon: <Globe size={28} />,
      color: "bg-cyan-600",
    },
    {
      title: "Expiring Soon",
      value: stats.expiringSoon,
      icon: <Clock size={28} />,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </section>
  );
}