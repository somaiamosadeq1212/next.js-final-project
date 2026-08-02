"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  X,
} from "lucide-react";

type DashboardSidebarProps = {
  open: boolean;
  onClose: () => void;
};

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
    href: "/dashboard/opportunities/add",
    label: "Add Opportunity",
    icon: PlusCircle,
  },
];

export default function DashboardSidebar({
  open,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onClose}
        className={`
        fixed
        inset-0
        z-40
        bg-black/40
        backdrop-blur-sm
        transition-opacity
        duration-300
        lg:hidden
        ${open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
      `}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`
        fixed
        inset-y-0
        left-0
        z-50
        flex
        w-64
        flex-col
        border-r
        border-default
        bg-background
        transition-transform
        duration-300
        ease-in-out
        lg:hidden

        ${open
            ? "translate-x-0"
            : "-translate-x-full"
          }
      `}
      >
        {/* Header */}
        <div
          className="
          flex
          h-16
          items-center
          justify-between
          border-b
          border-default
          px-6
        "
        >
          <h2 className="text-xl font-bold text-primary">
            KaarYab
          </h2>

          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-default
            transition-theme
            hover:bg-accent
          "
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="
          flex-1
          overflow-y-auto
          p-4
          space-y-2
        "
        >
          {links.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-theme

                ${active
                    ? "bg-primary text-white"
                    : "text-default hover:bg-accent"
                  }
              `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className="
        hidden
        lg:flex
        lg:w-64
        lg:shrink-0
        lg:sticky
        lg:top-20
        lg:h-[calc(100vh-5rem)]
        lg:flex-col
        border-r
        border-default
        bg-background
      "
      >
        {/* Header */}
        <div
          className="
          flex
          h-16
          items-center
          border-b
          border-default
          px-6
        "
        >
          <h2 className="text-xl font-bold text-primary">
            KaarYab
          </h2>
        </div>

        {/* Navigation */}
        <nav
          className="
          flex-1
          overflow-y-auto
          p-4
          space-y-2
        "
        >
          {links.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-theme

                ${active
                    ? "bg-primary text-white"
                    : "text-default hover:bg-accent"
                  }
              `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );

}