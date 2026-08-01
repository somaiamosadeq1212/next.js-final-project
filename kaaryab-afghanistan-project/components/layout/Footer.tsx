import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { Mail, MapPin } from "lucide-react";

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
                bg-background
            ">
            <Container>

                {/* Top */}
                <div
                    className="
                        grid
                        gap-12
                        py-14
                        md:grid-cols-2
                        lg:grid-cols-4
                        text-center
                        md:text-left
                    ">

                    {/* Logo */}
                    <div>
                        <div className="flex justify-center md:justify-start">
                            <Logo />
                        </div>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
                            KaarYab Afghanistan helps students, graduates and professionals discover
                            jobs, internships, scholarships and remote opportunities.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-default">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="
                                            rounded-md
                                            text-muted
                                            transition-colors
                                            hover:text-primary
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-primary
                                            focus-visible:ring-offset-2
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
                        <h3 className="text-lg font-semibold text-default">
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
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-primary
                                            focus-visible:ring-offset-2
                                            rounded-md
                                        "
                                    >
                                        {link.label}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* contact */}
                    <address className="not-italic">
                        <h3 className="text-lg font-semibold text-default">
                            Contact
                        </h3>

                        <ul
                            className="
                                mt-5
                                space-y-4
                                text-sm
                                text-muted
                            "
                        >
                            <li
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    md:justify-start
                                "
                            >
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <a
                                    href="mailto:info@kaaryab.af"
                                    className="
                                        rounded-md
                                        transition-colors
                                        hover:text-primary
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-primary
                                        focus-visible:ring-offset-2
                                    "
                                >
                                    info@kaaryab.af
                                </a>
                            </li>

                            <li
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    md:justify-start
                                "
                            >
                                <MapPin className="h-4 w-4 text-primary shrink-0" />

                                <span>Kabul, Afghanistan</span>
                            </li>
                        </ul>
                    </address>
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