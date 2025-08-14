import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, BookOpen, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  studentsCount: number;
  rating: number;
  price: "Free" | string;
  instructor: string;
}

const CourseCard = ({
  title,
  description,
  image,
  level,
  duration,
  studentsCount,
  rating,
  price,
  instructor
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-purple-100 text-purple-800";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 news-card">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <Badge className={getLevelColor(level)}>
              {level}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/90">
              {price}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{instructor}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{studentsCount.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full">
          {price === "Free" ? "Start Learning" : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;