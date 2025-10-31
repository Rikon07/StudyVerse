import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Link } from "lucide-react";


export default function Home() {
  return (
    <>
        <section className="relative py-20">
            <div className="flex flex-col items-center text-center space-y-8">
                <Badge variant='outline'>
                    The Future of Online Education
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning experience</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere.</p>

                <div className="flex flex-col sm-flex-row gap-4 mt-8">
                  <Link className={buttonVariants({
                    size: "lg",
                  })} href='/courses'>Explore Courses</Link>
                  <Link className={buttonVariants({
                    size: "lg",
                    variant: 'outline',
                  })} href='/courses'>Sign In</Link>
                </div>
            </div>
        </section>
    </>
  );
}
