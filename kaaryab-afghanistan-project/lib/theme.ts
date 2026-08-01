/**
 * -----------------------------------------------------------------------------
 * KaarYab Theme Configuration
 * -----------------------------------------------------------------------------
 * Central place for theme-related constants.
 * This file keeps theme names in one place and makes future updates easier.
 * -----------------------------------------------------------------------------
 */

export const THEMES = {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export const DEFAULT_THEME: Theme = THEMES.SYSTEM;

export const STORAGE_KEY = "kaaryab-theme";