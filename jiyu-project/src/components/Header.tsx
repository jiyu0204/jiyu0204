import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";


interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: " 🌟首页" },
  { id: "works", label: "🎵星途偕章" },
  { id: "growth", label: "🌱物料档案馆" },
  { id: "weibo", label: "📱朝夕碎片" },
  { id: "birthday", label: "🎂岁岁同欢日" }, 
];

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const handleNavClick = (sectionId: string) => {
  onNavigate(sectionId);
  setIsMobileMenuOpen(false);
};

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 hidden">
            <Heart className="w-6 h-6 text-zhangji-primary fill-zhangji-primary" />
            <span className="text-lg font-bold bg-gradient-to-r from-zhangji-primary to-zeyu-primary bg-clip-text text-transparent">极禹</span>
            <Heart className="w-6 h-6 text-zeyu-primary fill-zeyu-primary" />
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeSection === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"
              )}>
                {item.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" style={{color: 'ff799c'}}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className={cn(
                "px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200",
                activeSection === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              )}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}