import { Button } from "@/components/ui/button";
import { SiGithub, SiGitlab } from "react-icons/si";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            KHub
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('security')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Security
          </button>
          <button
            onClick={() => scrollToSection('platform')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection('get-started')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <SiGithub className="h-5 w-5" />
          </Button>
          {/* <Button variant="default">
            Documentation
          </Button> */}
        </div>
      </div>
    </nav>
  );
}
