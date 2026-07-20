"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/opportunities",
    label: "Opportunities",
    icon: Briefcase,
  },
  {
    href: "/dashboard/opportunities/new",
    label: "Add Opportunity",
    icon: PlusCircle,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  return (
    <aside
      className="
        w-64
        bg-white
        border-r
        min-h-screen
      "
    >
      <div className="p-6">

        <h2 className="text-2xl font-bold text-primary">
          KaarYab
        </h2>

      </div>

      <nav className="space-y-2 px-4">

        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                hover:bg-primary
                hover:text-white
                transition
              "
            >
              <Icon size={20} />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
