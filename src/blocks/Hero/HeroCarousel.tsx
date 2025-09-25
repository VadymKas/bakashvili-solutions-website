'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { Hero as HeroType } from '@/payload-types';
import { Media } from '@/components/Media';
import Overlay from '@/components/Overlay';
import { cn } from '@/lib/utils';

type Props = Pick<HeroType, 'items'>;

const HeroCarousel: FC<Props> = ({ items }) => {
    const [imageIndex, setimageIndex] = useState(0);
    const scrollYRef = useRef(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!items?.length) return;

        const intervalId = setTimeout(() => {
            handleImageChange((imageIndex + 1) % items.length);
        }, 5000);
        return () => clearTimeout(intervalId);
    }, [items?.length, imageIndex]);

    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
            if (containerRef.current) {
                requestAnimationFrame(() => {
                    const speed = 0.5;
                    containerRef.current!.style.transform = `translateY(${scrollYRef.current * speed}px)`;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleImageChange = (newIndex: number) => {
        if (newIndex !== imageIndex) {
            setimageIndex(newIndex);
        }
    };

    return (
        <>
            <div ref={containerRef} className="absolute inset-0 overflow-hidden">
                {items?.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ${index === imageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                        style={{
                            transform: `translateY(${(index - imageIndex) * 5}%)`,
                        }}
                    >
                        <Media
                            resource={image.media}
                            fill
                            priority={index === imageIndex}
                            imgClassName="object-cover object-center"
                        />
                    </div>
                ))}
            </div>
            <Overlay />
            <div className="absolute right-4 bottom-4 z-50">
                <div className="flex gap-2">
                    {items?.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={cn(
                                'w-12 h-2 rounded-full transition-all duration-300 shadow cursor-pointer',
                                imageIndex === index
                                    ? 'bg-primary/35'
                                    : 'bg-white hover:bg-primary/70',
                            )}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroCarousel;
