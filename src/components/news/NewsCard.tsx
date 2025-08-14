import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowUpRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  variant?: "default" | "compact" | "large";
}

const NewsCard = ({
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime,
  variant = "default"
}: NewsCardProps) => {
  const isCompact = variant === "compact";
  const isLarge = variant === "large";

  return (
    <article className={`
      group bg-card border border-border rounded-xl overflow-hidden news-card cursor-pointer
      ${isLarge ? "h-full" : ""}
    `}>
      {/* Image */}
      <div className={`relative overflow-hidden ${
        isCompact ? "h-32" : isLarge ? "h-48" : "h-40"
      }`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-ticker-bg text-ticker-text text-xs">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-background/90 p-1 rounded-full">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${isLarge ? "flex-1" : ""}`}>
        <div className="space-y-3">
          <h3 className={`
            font-semibold leading-tight group-hover:text-primary transition-colors
            ${isCompact ? "text-sm" : isLarge ? "text-lg" : "text-base"}
          `}>
            {title}
          </h3>
          
          {!isCompact && (
            <p className={`
              text-muted-foreground leading-relaxed
              ${isLarge ? "text-base" : "text-sm"}
            `}>
              {excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>{author}</span>
              <span>•</span>
              <time>{publishedAt}</time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;