import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              Ride<span className="text-primary">Compare</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 RideCompare. All rights reserved. We redirect you to book on official provider apps.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
