import { FC } from 'react';
import { AboutUs as AboutUsType } from '@/payload-types';
import { cn } from '@/lib/utils';
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import Container from '@/components/Container';

type Props = AboutUsType & {
    className?: string;
};

const AboutUs: FC<Props> = ({ title, description, media, enableLink, link, className }) => {
    return (
        <section className={cn('py-10 overflow-hidden', className)}>
            <h2 className="text-center font-bold capitalize mb-10">{title}</h2>
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                <div>
                    <p className="mb-4">{description}</p>
                    {enableLink && <CMSLink {...link} className='w-full md:w-fit' />}
                </div>
                <Media resource={media} videoClassName="h-full object-cover" />
            </Container>
        </section>
    );
};

export default AboutUs;
