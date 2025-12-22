import { Search, Bell, MessageSquare, ExternalLink } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Comparison',
    description: 'Compare prices and ETAs from Uber, Ola, and Rapido in one place. No more app switching.',
  },
  {
    icon: Bell,
    title: 'Price Alerts',
    description: 'Get notified when surge pricing drops or a better deal becomes available.',
  },
  {
    icon: MessageSquare,
    title: 'Bot Assistant',
    description: 'Our smart bot helps you find the best ride based on your preferences.',
  },
  {
    icon: ExternalLink,
    title: 'Quick Booking',
    description: 'One-tap redirect to your preferred provider\'s app to complete booking.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Why Choose <span className="text-gradient">RideCompare</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We make finding the best ride simple, fast, and transparent.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
