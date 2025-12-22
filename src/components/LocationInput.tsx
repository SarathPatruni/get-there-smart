import { MapPin, Navigation } from 'lucide-react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: 'pickup' | 'drop';
  className?: string;
}

const LocationInput = ({ label, value, onChange, placeholder, icon, className }: LocationInputProps) => {
  return (
    <div className={cn("relative", className)}>
      <label className="mb-2 block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <div className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full",
          icon === 'pickup' ? 'bg-ola/20 text-ola' : 'bg-destructive/20 text-destructive'
        )}>
          {icon === 'pickup' ? (
            <Navigation className="h-4 w-4" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
        </div>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-14 pl-16 text-base"
        />
      </div>
    </div>
  );
};

export default LocationInput;
