"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

                    ${
                        scrolled
                            ? `
                                bg-background/90
                                backdrop-blur-lg
                                shadow-card
                                border-b
                                border-default
                              `
                            : `
                                bg-background
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
                        {/* Logo */}

                        <Logo />

                        {/* Desktop Navigation */}

                        <DesktopNav />

                        {/* Mobile Menu Button */}

                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen(true)
                            }
                            aria-label="Open Menu"
                            className="
                                flex
                                items-center
                                justify-center

                                rounded-xl

                                p-2

                                transition-all

                                hover:bg-slate-100

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

