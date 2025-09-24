'use client';

import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { CMSLink } from '@/components/Link';
import { Button } from '@/components/ui/button';
import type { Header as HeaderType } from '@/payload-types';

interface NavBarProps {
    data: HeaderType;
}

const NavBarMobile: FC<NavBarProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = data.navItems || [];

    return (
        <div className='md:hidden'>
            <Button
                variant="link"
                className="p-0 size-8 flex flex-col items-center justify-center gap-1.5"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span
                    className={cn(
                        'h-0.5 w-8 bg-black transition-transform duration-300',
                        isOpen && 'translate-y-2 rotate-45',
                    )}
                />
                <span
                    className={cn(
                        'h-0.5 w-full bg-black transition-opacity duration-300',
                        isOpen && 'opacity-0',
                    )}
                />
                <span
                    className={cn(
                        'h-0.5 w-full bg-black transition-transform duration-300',
                        isOpen && '-translate-y-2 -rotate-45',
                    )}
                />
            </Button>
            <div
                className={cn(
                    'fixed top-0 right-0 h-full w-2/3 shadow-lg z-50 transform transition-transform duration-300 md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                )}
            >
                <nav className="h-full bg-primary/10 flex flex-col px-6 py-12 gap-8 z-50">
                    {navItems.map(({ link }, i) => (
                        <CMSLink
                            key={i}
                            {...link}
                            appearance="link"
                            className="text-base"
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </nav>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-white/30 backdrop-blur-sm z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default NavBarMobile;
