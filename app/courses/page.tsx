import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, Star, Users, Search } from "lucide-react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  category: string;
  level: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, Node.js and more.",
    instructor: "Sarah Johnson",
    duration: "40 hours",
    students: 15420,
    rating: 4.8,
    price: 89.99,
    category: "Development",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Advanced React & TypeScript",
    description: "Build scalable applications with React, TypeScript, and modern best practices.",
    instructor: "Michael Chen",
    duration: "32 hours",
    students: 8920,
    rating: 4.9,
    price: 109.99,
    category: "Development",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    description: "Learn Python, pandas, scikit-learn, and build real-world ML models.",
    instructor: "Dr. Emily Rodriguez",
    duration: "55 hours",
    students: 12340,
    rating: 4.7,
    price: 129.99,
    category: "Data Science",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with Figma and modern design principles.",
    instructor: "Alex Martinez",
    duration: "28 hours",
    students: 9870,
    rating: 4.8,
    price: 79.99,
    category: "Design",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services, deploy applications, and manage cloud infrastructure.",
    instructor: "David Park",
    duration: "45 hours",
    students: 7650,
    rating: 4.6,
    price: 119.99,
    category: "Cloud",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, content strategy, and analytics.",
    instructor: "Jennifer Lee",
    duration: "25 hours",
    students: 11230,
    rating: 4.5,
    price: 69.99,
    category: "Marketing",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    description: "Protect systems and networks with ethical hacking and security best practices.",
    instructor: "Robert Thompson",
    duration: "38 hours",
    students: 6540,
    rating: 4.7,
    price: 99.99,
    category: "Security",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps for iOS and Android with React Native.",
    instructor: "Lisa Wang",
    duration: "42 hours",
    students: 8320,
    rating: 4.8,
    price: 94.99,
    category: "Development",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
  },
  {
    id: 9,
    title: "Blockchain & Cryptocurrency",
    description: "Understand blockchain technology, smart contracts, and cryptocurrency fundamentals.",
    instructor: "James Wilson",
    duration: "30 hours",
    students: 5430,
    rating: 4.6,
    price: 109.99,
    category: "Blockchain",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop"
  }
];

export default function CoursesPage() {
  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Explore Courses</h1>
        <p className="text-muted-foreground text-lg">
          Discover our comprehensive collection of courses designed to help you achieve your learning goals.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="cloud">Cloud</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3" variant="secondary">
                  {course.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pt-4">
              <div className="mb-2">
                <Badge variant="outline" className="mb-2">
                  {course.category}
                </Badge>
              </div>
              <CardTitle className="mb-2 line-clamp-2">{course.title}</CardTitle>
              <CardDescription className="mb-4 line-clamp-2">
                {course.description}
              </CardDescription>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{course.rating}</span>
                  <span>({Math.floor(course.students * 0.6).toLocaleString()} reviews)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-4 border-t">
              <div className="text-2xl font-bold">${course.price}</div>
              <Button>Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}