import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

type ContainerProps = {
    className?: string;
    children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
    return <div className={cn('container px-4 mx-auto', className)}>{children}</div>;
};

export default Container;
