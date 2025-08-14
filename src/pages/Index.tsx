import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import FeaturedStory from "@/components/news/FeaturedStory";
import NewsCard from "@/components/news/NewsCard";
import CategoryFilter from "@/components/news/CategoryFilter";
import CourseCard from "@/components/education/CourseCard";
import NewsletterSignup from "@/components/newsletter/NewsletterSignup";
import { ArrowRight, TrendingUp, BookOpen, Zap } from "lucide-react";

// Import generated images
import heroImage from "@/assets/hero-ai-news.jpg";
import breakingNewsImage from "@/assets/breaking-news.jpg";
import aiEducationImage from "@/assets/ai-education.jpg";
import aiResearchImage from "@/assets/ai-research.jpg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Latest", "Trending", "Research", "Tools", "Industry"];

  const featuredStory = {
    title: "OpenAI Announces Revolutionary GPT-5 with 100x Performance Improvement",
    excerpt: "The latest breakthrough in language models promises to transform how we interact with AI, featuring unprecedented reasoning capabilities and multimodal understanding.",
    image: breakingNewsImage,
    category: "Breaking",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    readTime: "5 min"
  };

  const newsStories = [
    {
      title: "Google's Gemini AI Surpasses Human Performance in Complex Reasoning Tasks",
      excerpt: "New benchmark results show significant advancement in AI reasoning capabilities.",
      image: aiResearchImage,
      category: "Research",
      author: "Alex Rodriguez",
      publishedAt: "4 hours ago",
      readTime: "3 min"
    },
    {
      title: "Meta Releases Open-Source AI Model Competing with GPT-4",
      excerpt: "The new Llama 3.5 model promises better performance while remaining completely free.",
      image: heroImage,
      category: "Industry",
      author: "Emily Johnson",
      publishedAt: "6 hours ago",
      readTime: "4 min"
    },
    {
      title: "AI Tools Market Reaches $50 Billion Valuation",
      excerpt: "Unprecedented growth in AI adoption across industries drives market expansion.",
      image: aiEducationImage,
      category: "Industry",
      author: "Michael Kim",
      publishedAt: "8 hours ago",
      readTime: "6 min"
    }
  ];

  const courses = [
    {
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of ML algorithms, data preprocessing, and model evaluation.",
      image: aiEducationImage,
      level: "Beginner" as const,
      duration: "8 weeks",
      studentsCount: 15420,
      rating: 4.8,
      price: "Free",
      instructor: "Dr. Lisa Wang"
    },
    {
      title: "Advanced Neural Networks",
      description: "Deep dive into CNNs, RNNs, and transformer architectures with hands-on projects.",
      image: aiResearchImage,
      level: "Advanced" as const,
      duration: "12 weeks",
      studentsCount: 8930,
      rating: 4.9,
      price: "$199",
      instructor: "Prof. David Miller"
    },
    {
      title: "AI Ethics and Responsible Development",
      description: "Understanding bias, fairness, and ethical considerations in AI development.",
      image: heroImage,
      level: "Intermediate" as const,
      duration: "6 weeks",
      studentsCount: 12340,
      rating: 4.7,
      price: "Free",
      instructor: "Dr. Anna Thompson"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <TrendingUp className="h-3 w-3 mr-1" />
                #1 AI News Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                Stay Ahead in the
                <span className="text-primary"> AI Revolution</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Breaking AI news, comprehensive education, and expert insights. 
                Your ultimate source for artificial intelligence updates and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Explore News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="AI Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Featured Story</h2>
        </div>
        <FeaturedStory {...featuredStory} />
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest AI News</h2>
          <Button variant="outline">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsStories.map((story, index) => (
            <NewsCard key={index} {...story} />
          ))}
        </div>
      </section>

      {/* AI Education Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="h-3 w-3 mr-1" />
              AI Education
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Master AI Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From fundamentals to advanced concepts, our comprehensive courses 
              help you build expertise in artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup 
            title="Never Miss an AI Breakthrough"
            description="Join 50,000+ AI enthusiasts getting weekly insights, breaking news, and exclusive educational content."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AI</span>
                </div>
                <span className="font-black text-xl">PULSE LEARN</span>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Your trusted source for AI news, education, and insights. 
                Stay ahead in the artificial intelligence revolution.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">News</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Breaking News</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Industry Updates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tool Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Education</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Free Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Learning Paths</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2024 AI Pulse Learn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
