"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PlayCircle, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  level: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    imageUrl: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Data Science with Python",
    category: "Data Science",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/2686148_3670_6.jpg",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Machine Learning Foundations",
    category: "AI & ML",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    category: "Marketing",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    category: "Cloud",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/1026604_790b_2.jpg",
    level: "Advanced",
  },
];

const CourseCard = ({ course }: { course: Course }) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="w-72 h-96 shrink-0 rounded-2xl overflow-hidden border border-border shadow-sm bg-card hover:shadow-lg transition-all relative group"
          whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
        >
          <Image
            src={course.imageUrl}
            alt={course.title}
            width={32}
            height={48}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent"></div>

          <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white space-y-2">
            <Badge variant="secondary" className="w-fit">{course.category}</Badge>
            <CardTitle className="text-lg md:text-xl font-semibold">
              {course.title}
            </CardTitle>
            <p className="text-xs opacity-80">{course.level} Level</p>

            <Button
              size="sm"
              variant="secondary"
              className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2"
            >
              <PlayCircle className="h-4 w-4" />
              Start Learning
            </Button>
          </div>
        </motion.div>
      </TooltipTrigger>

      <TooltipContent side="top" className="text-xs text-muted-foreground">
        {course.title} — {course.category}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function CarouselCourses() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDragConstraint(containerWidth - trackWidth);
      }
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="outline" className="text-sm">
            Featured Courses
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Learn. Build. Grow.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore trending courses crafted by industry experts. Boost your skills and shape your career in tech.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={trackRef}
            className="flex space-x-6 pb-6 px-4"
            drag="x"
            dragConstraints={{ right: 0, left: dragConstraint - 32 }}
            dragElastic={0.15}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
