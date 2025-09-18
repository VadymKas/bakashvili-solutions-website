import { Button } from '@/components/ui/button';
import './styles.css';

export default async function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Hello</h1>
            <Button>Get Started!</Button>
        </div>
    );
}
