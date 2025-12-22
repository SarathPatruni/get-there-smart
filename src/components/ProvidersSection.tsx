const providers = [
  {
    name: 'Uber',
    color: 'bg-foreground text-background',
    description: 'Global ride-hailing leader',
  },
  {
    name: 'Ola',
    color: 'bg-ola text-foreground',
    description: 'India\'s favorite cab service',
  },
  {
    name: 'Rapido',
    color: 'bg-rapido text-background',
    description: 'Quick bike & auto rides',
  },
];

const ProvidersSection = () => {
  return (
    <section className="relative border-y border-border/50 bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold">Compare All Major Providers</h2>
          <p className="text-muted-foreground">Get the best prices from these ride services</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 px-6 py-4 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${provider.color} text-lg font-bold`}>
                {provider.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{provider.name}</div>
                <div className="text-xs text-muted-foreground">{provider.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
