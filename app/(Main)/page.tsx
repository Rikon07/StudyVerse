// (Main)/page.tsx

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: 'Comprehensive Course Library',
    description: 'Access a wide range of courses across various subjects, all designed by industry experts to ensure quality learning.',
    icon: '📚',
  },
  {
    title: 'Interactive Learning',
    description: 'Engage with interactive content, quizzez, and assignments that make learning fun and effective.',
    icon: '🎮',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress tracking and performance analytics.',
    icon: '📊'
  },
  {
    title: 'Community Support',
    description: 'Join a vibrant community of learners and educators to share knowledge, ask questions, and collaborate.',
    icon: '🫂',
  }
]

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

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))
          }
        </section>
    </>
  );
}
