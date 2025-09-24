'use client';

import { FC } from 'react';
import { CMSLink } from '@/components/Link';
import type { Header as HeaderType } from '@/payload-types';
import { cn } from '@/lib/utils';

interface NavBarProps {
    data: HeaderType;
}

const NavBar: FC<NavBarProps> = ({ data }) => {
    const navItems = data.navItems || [];

    return (
        <>
            <nav className={cn('hidden md:flex gap-8')}>
                {navItems.map(({ link }, i) => {
                    return (
                        <CMSLink key={i} {...link} appearance="link" className={cn('text-base')} />
                    );
                })}
            </nav>
        </>
    );
};

export default NavBar;
