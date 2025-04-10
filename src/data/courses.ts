
import { Course } from "../types";

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    tags: ["Programming", "Web Development", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns and optimize your applications for performance.",
    instructor: "Michael Chen",
    duration: "6 weeks",
    level: "Advanced",
    tags: ["Programming", "React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and user experience design to create intuitive digital products.",
    instructor: "Emma Rodriguez",
    duration: "10 weeks",
    level: "Beginner",
    tags: ["Design", "UI/UX", "Adobe XD", "Figma"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Digital Marketing Strategies",
    description: "Develop effective digital marketing strategies to grow your business online.",
    instructor: "David Williams",
    duration: "12 weeks",
    level: "Intermediate",
    tags: ["Marketing", "SEO", "Social Media", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Data Science with Python",
    description: "Explore data science techniques and tools using Python programming language.",
    instructor: "Alex Thompson",
    duration: "14 weeks",
    level: "Intermediate",
    tags: ["Programming", "Data Science", "Python", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile applications with Google's Flutter framework.",
    instructor: "Jessica Park",
    duration: "9 weeks",
    level: "Intermediate",
    tags: ["Programming", "Mobile Development", "Flutter", "Dart"],
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Blockchain Fundamentals",
    description: "Understand the principles of blockchain technology and its applications.",
    instructor: "Ryan Cooper",
    duration: "7 weeks",
    level: "Beginner",
    tags: ["Blockchain", "Cryptocurrency", "Web3", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "8",
    title: "Photography Masterclass",
    description: "Master the art of photography from composition to post-processing techniques.",
    instructor: "Sophia Lee",
    duration: "11 weeks",
    level: "Intermediate",
    tags: ["Design", "Photography", "Lightroom", "Photoshop"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const getAllTags = (): string[] => {
  const allTags = coursesData.flatMap(course => course.tags);
  return [...new Set(allTags)].sort();
};
