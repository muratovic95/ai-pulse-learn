import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  variant?: "default" | "minimal" | "floating";
}

const NewsletterSignup = ({
  title = "Stay Ahead in AI",
  description = "Get the latest AI news, insights, and educational content delivered to your inbox.",
  placeholder = "Enter your email address",
  variant = "default"
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our next newsletter within 24 hours.",
      });
    }, 1000);
  };

  if (variant === "minimal") {
    return (
      <div className="border-t border-border pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
          </div>
          {!isSubmitted ? (
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </div>
          ) : (
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Successfully subscribed!
            </div>
          )}
        </form>
      </div>
    );
  }

  if (variant === "floating") {
    return (
      <Card className="border-primary/20 bg-gradient-to-r from-background to-primary/5">
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm">{title}</span>
            </div>
            {!isSubmitted ? (
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-sm"
                  required
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            ) : (
              <div className="flex items-center text-green-600 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Thank you for subscribing!
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSubmitted ? (
            <>
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Subscribe to Newsletter
              </Button>
            </>
          ) : (
            <div className="text-center py-4">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-600 mb-2">Welcome aboard!</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive our next newsletter within 24 hours.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;