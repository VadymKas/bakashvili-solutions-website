import { getCachedGlobal } from '@/utilities/getGlobals';
import type { Footer } from '@/payload-types';

export async function Footer() {
    const footerData: Footer = await getCachedGlobal('footer', 1)();

    const navItems = footerData?.navItems || [];

    return (
        <footer className="mt-auto">
            <div className="bg-theme text-white">FOOTER</div>
        </footer>
    );
}
