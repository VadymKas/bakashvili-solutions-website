"use client";

import React from "react";
import { useTheme } from "..";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeSelector2: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        if (!theme || theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <Button
            size="icon"
            variant="toggler"
            className="size-8 my-[18px] rounded-full relative overflow-hidden transition-colors"
            onClick={handleThemeChange}
        >
            <SunIcon
                size={16}
                className={`stroke-inherit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    theme === "dark" ? "opacity-0 scale-50" : "opacity-100 scale-100"
                }`}
            />
            <MoonIcon
                size={16}
                className={`stroke-inherit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
            />
        </Button>
    );
};
