import { FC } from 'react';
import { CoreValues as CoreValuesType } from '@/payload-types';
import { cn } from '@/lib/utils';
import { Media } from '@/components/Media';
import Container from '@/components/Container';

type Props = CoreValuesType & {
    className?: string;
};

const CoreValues: FC<Props> = ({ title, description, values, className }) => {
    return (
        <section className={cn('py-10 text-center', className)}>
            <Container>
                <h2 className="font-bold capitalize mb-4">{title}</h2>
                {description && <p className="mb-4">{description}</p>}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {values?.map((value, index) => {
                        return (
                            <article
                                key={index}
                                className={cn(
                                    'p-8 flex flex-col items-center hover:scale-110 transition-all duration-300',
                                )}
                            >
                                <Media
                                    resource={value.media}
                                    imgClassName="size-20"
                                    className="mb-4"
                                    priority={true}
                                />
                                <div className="text-center space-y-4">
                                    <h4 className="h-16.5 font-semibold tracking-wide line-clamp-2">
                                        {value.title}
                                    </h4>
                                    <p>{value.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;
