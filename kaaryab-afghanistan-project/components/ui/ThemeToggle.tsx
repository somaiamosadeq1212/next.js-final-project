"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="h-10 w-10 rounded-xl" />
        );
    }

    const isDark = resolvedTheme === "dark";

    function toggleTheme() {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-default
                transition-theme
                hover:bg-muted
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2
            "
        >
            {isDark ? (
                <Sun
                    className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        hover:rotate-180
                    "
                />
            ) : (
                <Moon
                    className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        hover:-rotate-12
                    "
                />
            )}
        </button>
    );
}