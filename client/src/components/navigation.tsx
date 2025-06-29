import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm"
    } border-b border-gray-100`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-navy">Chetan Chaudhari</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("home")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105 relative group"
                onClick={() => scrollToSection("experience")}
              >
                Experience
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse group-hover:bg-accent-teal"></span>
              </Button>
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="text-navy-light hover:text-accent-teal font-medium transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </div>
          </div>
          <button className="md:hidden text-navy-light">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
