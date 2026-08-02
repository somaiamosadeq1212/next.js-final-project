"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Controls the mobile sidebar.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent body scrolling while the mobile sidebar is open.
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div
      className="
        flex
        min-h-screen
        bg-background
        transition-theme
      "
    >
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div
        className="
          flex
          min-h-screen
          min-w-0
          flex-1
          flex-col
        "
      >
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main
          className="
            flex-1
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}