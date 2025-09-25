import React, { FC } from 'react';
import Container from '@/components/Container';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { Hero as HeroType } from '@/payload-types';
import HeroCarousel from './HeroCarousel';
import { cn } from '@/lib/utils';

type Props = HeroType & {
    className?: string;
};

const Hero: FC<Props> = ({ title, description, items, className }) => {
    return (
        <div className={cn('relative h-screen w-full pt-12 md:pt-0 overflow-hidden', className)}>
            <HeroCarousel items={items} />
            <Container className="relative z-10 h-full flex flex-col justify-between text-white">
                <div />
                <div>
                    <h1 className="my-4 font-bold">
                        {title} with
                        <br />
                        <span className="text-primary/35">OwnInn</span>
                    </h1>
                    <p className="md: max-w-3xl">{description}</p>
                </div>
                <Link
                    href="/"
                    className="w-fit rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce"
                >
                    <FaArrowDown size="24" />
                </Link>
            </Container>
        </div>
    );
};

export default Hero;
