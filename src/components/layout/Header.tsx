import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Breaking News Ticker */}
      <div className="bg-ticker-bg text-ticker-text py-2 overflow-hidden">
        <div className="ticker-scroll whitespace-nowrap">
          <span className="text-sm font-medium">
            🚨 BREAKING: Google announces breakthrough in AI efficiency • 
            OpenAI releases GPT-5 preview • 
            New EU AI regulations come into effect • 
            Meta's AI assistant reaches 1 billion users •
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <span className="font-black text-xl">PULSE LEARN</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/news" 
                className="font-medium hover:text-primary transition-colors"
              >
                Breaking News
              </Link>
              <Link 
                to="/education" 
                className="font-medium hover:text-primary transition-colors"
              >
                AI Education
              </Link>
              <Link 
                to="/tools" 
                className="font-medium hover:text-primary transition-colors"
              >
                AI Tools
              </Link>
              <Link 
                to="/research" 
                className="font-medium hover:text-primary transition-colors"
              >
                Research
              </Link>
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:flex"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Subscribe Button */}
              <Button size="sm" className="hidden md:block">
                Subscribe
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="py-4 border-t border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search AI news, courses, and tools..."
                  className="pl-10"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/news" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Breaking News
              </Link>
              <Link 
                to="/education" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Education
              </Link>
              <Link 
                to="/tools" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <Link 
                to="/research" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <div className="pt-4 border-t border-border">
                <Button size="sm" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;