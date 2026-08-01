"use client";

import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import NavItem from "./NavItem";
import { navigation } from "../navigation";
import Link from "next/link";

type MobileNavProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileNav({
    open,
    onClose,
}: MobileNavProps) {

    return (
        <>
            {/* Overlay */}

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

            {/* Mobile Navigation Drawer */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                className={`
                    fixed
                    top-0
                    right-0
                    z-50
                    flex
                    h-screen
                    w-[320px]
                    max-w-[85vw]
                    flex-col
                    bg-surface
                    border-l
                    border-default
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-out
                    lg:hidden
                    ${open
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-default
                        px-6
                        py-5
                    "
                >
                    <h2
                        id="mobile-menu-title"
                        className="
                            text-lg
                            font-bold
                            text-default
                        "
                    >
                        Menu
                    </h2>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close Menu"
                        className="
                            rounded-lg
                            p-2
                            transition
                            hover:bg-muted
                            dark:hover:bg-slate-800
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary
                            focus-visible:ring-offset-2
                        "
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation Links */}

                <nav
                    className="
                        flex-1
                        space-y-2
                        px-6
                        py-8
                    "
                >
                    {navigation.map((item) => (
                        <div
                            key={item.href}
                            className="border-b border-default"
                        >
                            <NavItem
                                href={item.href}
                                label={item.label}
                                onClick={onClose}
                            />
                        </div>
                    ))}
                </nav>

                {/* Footer */}

                <div
                    className="
                        border-t
                        border-default

                        p-6
                    "
                >
                    {/* Primary Action */}
                    <Link href="/dashboard/opportunities/add" onClick={onClose}>
                        <Button fullWidth>
                            Post Opportunity
                        </Button>
                    </Link>
                </div>
            </aside>
        </>
    );
}