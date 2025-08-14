import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface FeaturedStoryProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

const FeaturedStory = ({
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime
}: FeaturedStoryProps) => {
  return (
    <article className="relative overflow-hidden rounded-xl bg-card border border-border news-card cursor-pointer">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-ticker-bg text-ticker-text">
              {category}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight hover:text-primary transition-colors">
              {title}
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime} read</span>
              </div>
              <span>•</span>
              <time>{publishedAt}</time>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedStory;