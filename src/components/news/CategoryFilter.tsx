import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={`
            category-filter transition-all duration-200
            ${activeCategory === category 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-card-hover"
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;