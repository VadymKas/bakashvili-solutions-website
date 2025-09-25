import React from 'react';
import './styles.css';
import { Header } from '@/globals/Header/Component';
import { Providers } from '@/providers';

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
        <html lang="en">
            <head>
                <link href="/logo.svg" rel="icon" sizes="32x32" />
                <link href="/logo.svg" rel="icon" type="image/svg+xml" />
            </head>
            <body>
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <div className='h-[600px]'></div>
                </Providers>
            </body>
        </html>
    );
}
