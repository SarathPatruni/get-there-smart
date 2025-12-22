import { ArrowRight, Zap, DollarSign, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_72%_50%/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary animate-fade-in">
            <Zap className="h-4 w-4" />
            <span>Compare prices across Uber, Ola & Rapido</span>
          </div>
          
          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
            Compare Ride Prices
            <br />
            <span className="text-gradient">Instantly</span>
          </h1>
          
          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Stop switching between apps. Find the cheapest and fastest rides in seconds. 
            Get real-time price comparisons from all major ride providers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/compare" className="group">
                Compare Rides Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card">
              <DollarSign className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">₹120+</div>
              <div className="text-sm text-muted-foreground">Avg. savings per ride</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card">
              <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Major providers compared</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card">
              <Clock className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">&lt;5s</div>
              <div className="text-sm text-muted-foreground">Comparison time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
