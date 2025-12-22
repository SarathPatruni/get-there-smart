import { Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { RideOption } from '@/types/ride';
import { providerDeepLinks } from '@/data/mockRides';
import { cn } from '@/lib/utils';

interface RideCardProps {
  ride: RideOption;
  isCheapest?: boolean;
  isFastest?: boolean;
  index: number;
}

const providerStyles = {
  uber: {
    bg: 'bg-foreground/10',
    accent: 'border-foreground/30',
    button: 'uber' as const,
    logo: '🚗',
  },
  ola: {
    bg: 'bg-ola/10',
    accent: 'border-ola/30',
    button: 'ola' as const,
    logo: '🟢',
  },
  rapido: {
    bg: 'bg-rapido/10',
    accent: 'border-rapido/30',
    button: 'rapido' as const,
    logo: '🏍️',
  },
};

const rideTypeIcons = {
  cab: '🚕',
  bike: '🏍️',
  auto: '🛺',
};

const RideCard = ({ ride, isCheapest, isFastest, index }: RideCardProps) => {
  const style = providerStyles[ride.provider];
  
  const handleBook = () => {
    window.open(providerDeepLinks[ride.provider], '_blank');
  };
  
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg animate-slide-up",
        style.bg,
        (isCheapest || isFastest) && "ring-2 ring-primary/50"
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Badges */}
      <div className="absolute right-4 top-4 flex gap-2">
        {isCheapest && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
            💰 Cheapest
          </span>
        )}
        {isFastest && (
          <span className="inline-flex items-center gap-1 rounded-full bg-ola px-2.5 py-1 text-xs font-medium text-foreground">
            ⚡ Fastest
          </span>
        )}
        {ride.surgeMultiplier && ride.surgeMultiplier > 1 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-destructive/20 px-2.5 py-1 text-xs font-medium text-destructive">
            <TrendingUp className="h-3 w-3" />
            {ride.surgeMultiplier}x surge
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          {/* Provider & Ride Info */}
          <div className="flex items-center gap-4">
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl text-2xl",
              style.bg
            )}>
              {rideTypeIcons[ride.rideType]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold capitalize">{ride.provider}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{ride.rideName}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="capitalize">{ride.rideType}</span>
                <span>•</span>
                <span>{ride.distance.toFixed(1)} km</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Price & ETA */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Estimated Price</div>
            <div className="text-3xl font-bold">₹{ride.estimatedPrice}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              ETA
            </div>
            <div className="text-xl font-semibold">{ride.estimatedETA} min</div>
          </div>
        </div>
        
        {/* Book Button */}
        <Button
          variant={style.button}
          className="mt-6 w-full"
          onClick={handleBook}
        >
          Book on {ride.provider.charAt(0).toUpperCase() + ride.provider.slice(1)}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default RideCard;
