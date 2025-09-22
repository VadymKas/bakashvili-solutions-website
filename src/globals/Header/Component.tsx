import React from 'react';

import { getCachedGlobal } from '@/utilities/getGlobals';

import type { Header } from '@/payload-types';
import { HeaderNav } from './Nav';

export async function Header() {
    const headerData: Header = await getCachedGlobal('header', 1)();

    return (
        <header className="container relative z-20">
            <div className="py-4 flex justify-between">
                <HeaderNav data={headerData} />
            </div>
        </header>
    );
}
