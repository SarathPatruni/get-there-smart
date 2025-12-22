import { useState, useMemo } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import LocationInput from '@/components/LocationInput';
import RideCard from '@/components/RideCard';
import SortControls from '@/components/SortControls';
import { Button } from '@/components/ui/button';
import { generateMockRides } from '@/data/mockRides';
import { RideOption, SortOption, RideType } from '@/types/ride';

const Compare = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [rides, setRides] = useState<RideOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('cheapest');
  const [filterType, setFilterType] = useState<RideType | 'all'>('all');
  
  const handleSearch = () => {
    if (!pickup.trim() || !drop.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const distance = 5 + Math.random() * 15; // Random distance between 5-20km
      const mockRides = generateMockRides(distance);
      setRides(mockRides);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleRefresh = () => {
    if (pickup && drop) {
      handleSearch();
    }
  };
  
  // Filter and sort rides
  const processedRides = useMemo(() => {
    let filtered = rides;
    
    if (filterType !== 'all') {
      filtered = rides.filter((ride) => ride.rideType === filterType);
    }
    
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'cheapest') {
        return a.estimatedPrice - b.estimatedPrice;
      }
      return a.estimatedETA - b.estimatedETA;
    });
    
    return sorted;
  }, [rides, sortBy, filterType]);
  
  // Find cheapest and fastest
  const cheapestId = useMemo(() => {
    if (processedRides.length === 0) return null;
    return processedRides.reduce((min, ride) => 
      ride.estimatedPrice < min.estimatedPrice ? ride : min
    ).id;
  }, [processedRides]);
  
  const fastestId = useMemo(() => {
    if (processedRides.length === 0) return null;
    return processedRides.reduce((min, ride) => 
      ride.estimatedETA < min.estimatedETA ? ride : min
    ).id;
  }, [processedRides]);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pb-24 pt-24">
        {/* Search Section */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
              Compare <span className="text-gradient">Ride Prices</span>
            </h1>
            <p className="text-muted-foreground">
              Enter your pickup and drop locations to compare prices
            </p>
          </div>
          
          {/* Search Form */}
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <LocationInput
                label="Pickup Location"
                value={pickup}
                onChange={setPickup}
                placeholder="Enter pickup address"
                icon="pickup"
              />
              <LocationInput
                label="Drop Location"
                value={drop}
                onChange={setDrop}
                placeholder="Enter destination"
                icon="drop"
              />
            </div>
            
            <Button
              variant="hero"
              size="lg"
              className="mt-6 w-full"
              onClick={handleSearch}
              disabled={isLoading || !pickup.trim() || !drop.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Comparing Prices...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Compare Prices
                </>
              )}
            </Button>
            
            <p className="mt-3 text-center text-xs text-muted-foreground">
              💡 Prices shown are estimates and may vary at booking time
            </p>
          </div>
        </div>
        
        {/* Results Section */}
        {hasSearched && (
          <div className="mx-auto mt-12 max-w-5xl">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Finding the best rides for you...</p>
              </div>
            ) : processedRides.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Available Rides</h2>
                    <p className="text-sm text-muted-foreground">
                      {processedRides.length} options found for {rides[0]?.distance.toFixed(1)} km
                    </p>
                  </div>
                </div>
                
                <SortControls
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  filterType={filterType}
                  onFilterChange={setFilterType}
                  onRefresh={handleRefresh}
                  isLoading={isLoading}
                />
                
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {processedRides.map((ride, index) => (
                    <RideCard
                      key={ride.id}
                      ride={ride}
                      isCheapest={ride.id === cheapestId}
                      isFastest={ride.id === fastestId && ride.id !== cheapestId}
                      index={index}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <MapPin className="h-16 w-16 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No rides found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filter or search again
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Empty State */}
        {!hasSearched && (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
              🚗
            </div>
            <h3 className="mt-6 text-xl font-semibold">Ready to Compare?</h3>
            <p className="mt-2 text-muted-foreground">
              Enter your pickup and drop locations above to see prices from Uber, Ola, and Rapido
            </p>
          </div>
        )}
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Compare;
