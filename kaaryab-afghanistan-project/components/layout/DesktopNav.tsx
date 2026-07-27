"use client";

import { Link } from "lucide-react";
import { navigation } from "../navigation";
import NavItem from "./NavItem";
import Button from "@/components/ui/Button";
import { id } from "zod/locales";

export default function DesktopNav() {
    return (
        <div
            className="
                hidden
                lg:flex
                lg:items-center
                lg:justify-between
                lg:flex-1
                lg:ml-12
            "
        >
            {/* Navigation Links */}

            <nav
                className="
                    flex
                    items-center
                    gap-8
                "
                aria-label="Main Navigation"
            >
                {navigation.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                    />
                ))}
            </nav>

            {/* Right Side */}

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                <Link href={`/opportunities/add/${id}`}>
                <Button
                    size="md"
                >
                    Post Opportunity
                </Button>
                </Link>
                
            </div>
        </div>
    );
}