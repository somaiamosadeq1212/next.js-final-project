"use client";

import { Bell, Menu } from "lucide-react";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-16
        items-center
        justify-between
        border-b
        border-default
        bg-background/90
        backdrop-blur-md
        px-4
        sm:px-6
        lg:px-8
        transition-theme
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-default
            bg-background
            text-default
            transition-theme
            hover:bg-accent
            lg:hidden
          "
        >
          <Menu size={20} />
        </button>

        {/* Page Title */}
        <div>
          <h1 className="text-lg font-bold text-default sm:text-xl">
            Dashboard
          </h1>

          <p className="hidden text-sm text-muted sm:block">
            Manage opportunities
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Notifications"
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-default
            bg-background
            text-default
            transition-theme
            hover:bg-accent
            focus:outline-none
            focus:ring-2
            focus:ring-primary/20
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              right-2.5
              top-2.5
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>
      </div>
    </header>
  );
}