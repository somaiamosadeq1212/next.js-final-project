"use client";

import { Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header
      className="
        h-16
        border-b
        bg-white
        px-8
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h1 className="text-xl font-bold">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Manage opportunities
        </p>
      </div>

      <button className="relative">

        <Bell size={22} />

        <span
          className="
            absolute
            -top-1
            -right-1
            h-2
            w-2
            rounded-full
            bg-red-500
          "
        />

      </button>
    </header>
  );
}