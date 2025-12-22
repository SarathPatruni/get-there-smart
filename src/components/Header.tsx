import { MapPin, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              Ride<span className="text-primary">Compare</span>
            </span>
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/compare" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Compare Rides
            </Link>
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <Link to="/compare">Compare Now</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
