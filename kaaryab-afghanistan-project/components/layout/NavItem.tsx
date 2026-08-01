"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    href: string;
    label: string;
    onClick?: () => void;
};

export default function NavItem({
    href,
    label,
    onClick,
}: NavItemProps) {

    const pathname = usePathname();

    // Determine whether the current navigation item is active
    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(href));

    // Render a single navigation link
    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
            className={`
                relative
                inline-flex
                items-center
                px-2
                py-2
                text-sm
                font-medium
                transition-colors
                duration-200
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
                

                ${isActive
                    ? "text-primary"
                    : "text-muted hover:text-default"
                }

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-full
                after:origin-center
                after:scale-x-0
                after:rounded-full
                after:bg-[var(--color-primary)]
                after:transition-transform
                after:duration-300

                ${isActive
                    ? "after:scale-x-100"
                    : "hover:after:scale-x-100"
                }
            `}
        >
            {label}
        </Link>
    );
}
