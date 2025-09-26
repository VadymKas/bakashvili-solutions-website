'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import type { Header as HeaderType } from '@/payload-types';
import { Logo } from '@/components/Logo';
import { NavBar, NavBarMobile } from './NavBar';

interface HeaderClientProps {
    data: HeaderType;
}

export const HeaderClient: FC<HeaderClientProps> = ({ data }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                'w-full md:block fixed top-0 left-0 z-50 transition-all duration-200',
                isScrolled
                    ? 'bg-white/15 backdrop-blur-md text-black'
                    : 'bg-transparent text-white',
            )}
        >
            <div className="container px-4 mx-auto flex items-center justify-between h-16">
                <Link href="/">
                    <Logo loading="eager" priority="high" />
                </Link>
                <NavBar data={data} />
                <NavBarMobile data={data} />
            </div>
        </header>
    );
};
