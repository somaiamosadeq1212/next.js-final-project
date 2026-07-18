import Link from "next/link";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const quickLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Opportunities",
        href: "/opportunities",
    },
    {
        label: "Saved Jobs",
        href: "/saved",
    },
    {
        label: "Dashboard",
        href: "/dashboard",
    },
];

const companyLinks = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Footer() {
    return (
        <footer
            className="
                mt-20

                border-t
                border-default

                bg-surface
            "
        >
            <Container>

                {/* Top */}

                <div
                    className="
                        grid
                        gap-12

                        py-14

                        md:grid-cols-2

                        lg:grid-cols-4
                    "
                >

                    {/* Logo */}

                    <div>

                        <Logo />

                        <p
                            className="
                                mt-5

                                max-w-xs

                                text-sm
                                leading-7

                                text-muted
                            "
                        >
                            KaarYab Afghanistan helps students,
                            graduates and professionals discover
                            jobs, internships, scholarships and
                            remote opportunities.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-default
                            "
                        >
                            Quick Links
                        </h3>

                        <ul
                            className="
                                mt-5

                                space-y-3
                            "
                        >
                            {quickLinks.map((link) => (

                                <li key={link.href}>

                                    <Link
                                        href={link.href}
                                        className="
                                            text-muted

                                            transition-colors

                                            hover:text-primary
                                        "
                                    >
                                        {link.label}
                                    </Link>

                                </li>

                            ))}
                        </ul>

                    </div>

                    {/* Company */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-default
                            "
                        >
                            Company
                        </h3>

                        <ul
                            className="
                                mt-5

                                space-y-3
                            "
                        >
                            {companyLinks.map((link) => (

                                <li key={link.href}>

                                    <Link
                                        href={link.href}
                                        className="
                                            text-muted

                                            transition-colors

                                            hover:text-primary
                                        "
                                    >
                                        {link.label}
                                    </Link>

                                </li>

                            ))}
                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-default
                            "
                        >
                            Contact
                        </h3>

                        <ul
                            className="
                                mt-5

                                space-y-3

                                text-sm
                                text-muted
                            "
                        >
                            <li>Email</li>

                            <li>info@kaaryab.af</li>

                            <li>Kabul, Afghanistan</li>

                        </ul>

                    </div>

                </div>

                {/* Bottom */}

                <div
                    className="
                        flex
                        flex-col

                        items-center
                        justify-between

                        gap-4

                        border-t
                        border-default

                        py-6

                        text-sm
                        text-muted

                        md:flex-row
                    "
                >

                    <p>
                        © {new Date().getFullYear()} KaarYab Afghanistan.
                        All rights reserved.
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            gap-6
                        "
                    >

                        <Link
                            href="/privacy"
                            className="hover:text-primary transition-colors"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-primary transition-colors"
                        >
                            Terms
                        </Link>

                    </div>

                </div>

            </Container>
        </footer>
    );
}