"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow and blur after scrolling
    useEffect(() => {
        function handleScroll() {
            const isScrolled = window.scrollY > 10;

            setScrolled((prev) =>
                prev !== isScrolled ? isScrolled : prev
            );
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent background scrolling while the mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`
                    sticky
                    top-0
                    z-50
                    w-full
                    transition-all
                    duration-300
                    ${scrolled
                        ? `
                            bg-background/90
                            backdrop-blur-lg
                            shadow-card
                            border-b
                            border-default
                          `
                        : `
                            g-surface
                          `
                    }
                `}
            >
                <Container>
                    <div
                        className="
                            flex
                            h-20
                            items-center
                            justify-between
                        "
                    >
                        {/* Brand Logo */}

                        <Logo />

                        {/* Desktop Navigation */}
                        <DesktopNav />

                        {/* Theme Toggle (Dark Mode) */}
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => {
                                if (!mobileMenuOpen) {
                                    setMobileMenuOpen(true);
                                }
                            }}
                            disabled={mobileMenuOpen}
                            aria-label="Open Menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                            className="
                                flex
                                items-center
                                justify-center
                                rounded-xl
                                p-2
                                transition-colors
                                hover:bg-muted
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-primary
                                focus-visible:ring-offset-2
                                lg:hidden
                            "
                        >
                            <Menu className="h-6 w-6 text-default" />
                        </button>
                    </div>
                </Container>
            </header>

            <MobileNav
                open={mobileMenuOpen}
                onClose={() =>
                    setMobileMenuOpen(false)
                }
            />
        </>
    );
}

