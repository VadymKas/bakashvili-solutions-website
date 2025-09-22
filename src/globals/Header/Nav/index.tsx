"use client";

import React, { useState } from "react";
import type { Header as HeaderType } from "@/payload-types";
import { CMSLink } from "@/components/Link";
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils';

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
    const pathname = usePathname();
    const navItems = data?.navItems || [];
    const [open, setOpen] = useState(false);

    return (
        <div className="relative lg:flex">
            <button
                className="relative z-50 h-8 w-8 my-[18px] mx-auto flex  flex-col items-center justify-center gap-1.5 lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle navigation"
            >
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-black transition-transform duration-300",
                        open && "translate-y-2 rotate-45",
                    )}
                />
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-black transition-opacity duration-300",
                        open && "opacity-0",
                    )}
                />
                <span
                    className={cn(
                        "block h-0.5 w-6 bg-black transition-transform duration-300",
                        open && "-translate-y-2 -rotate-45",
                    )}
                />
            </button>

            <nav
                className={cn(
                    "flex top-full left-0 w-full bg-white lg:static lg:w-auto lg:bg-transparent",
                    "flex-col gap-4 lg:p-0 lg:flex lg:flex-row lg:gap-20 items-center",
                    "transition-all duration-500 ease-in-out overflow-hidden", 
                    open
                        ? "max-h-96 opacity-100 translate-y-0" 
                        : "max-h-0 opacity-0 -translate-y-2 lg:max-h-none lg:opacity-100 lg:translate-y-0", 
                )}
            >
                {navItems.map(({ link }, i) => {
                    const isActive =
                        (link.type === "reference" &&
                            typeof link.reference?.value === "object" &&
                            `/${link.reference.value.slug}` === pathname) ||
                        (link.type === "custom" && link.url === pathname);

                    return (
                        <CMSLink
                            key={i}
                            {...link}
                            appearance="link"
                            className={cn(
                                "hover:text-theme text-base lg:justify-center",
                                isActive && "text-theme underline underline-offset-6 decoration-2",
                            )}
                        />
                    );
                })}
            </nav>
        </div>
    );
};
