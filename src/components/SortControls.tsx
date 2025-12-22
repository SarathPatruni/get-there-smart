import { ArrowUpDown, DollarSign, Clock, RefreshCw, Car, Bike } from 'lucide-react';
import { Button } from './ui/button';
import { SortOption, RideType } from '@/types/ride';
import { cn } from '@/lib/utils';

interface SortControlsProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  filterType: RideType | 'all';
  onFilterChange: (type: RideType | 'all') => void;
  onRefresh: () => void;
  isLoading?: boolean;
}

const SortControls = ({
  sortBy,
  onSortChange,
  filterType,
  onFilterChange,
  onRefresh,
  isLoading,
}: SortControlsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowUpDown className="h-4 w-4" />
          Sort by:
        </span>
        <div className="flex gap-2">
          <Button
            variant={sortBy === 'cheapest' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onSortChange('cheapest')}
          >
            <DollarSign className="mr-1.5 h-4 w-4" />
            Cheapest
          </Button>
          <Button
            variant={sortBy === 'fastest' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onSortChange('fastest')}
          >
            <Clock className="mr-1.5 h-4 w-4" />
            Fastest
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">Filter:</span>
        <div className="flex gap-1.5">
          {(['all', 'cab', 'bike', 'auto'] as const).map((type) => (
            <Button
              key={type}
              variant={filterType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(type)}
              className="capitalize"
            >
              {type === 'all' && '🚀 All'}
              {type === 'cab' && '🚕 Cabs'}
              {type === 'bike' && '🏍️ Bikes'}
              {type === 'auto' && '🛺 Auto'}
            </Button>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        disabled={isLoading}
        className={cn(isLoading && "animate-spin")}
      >
        <RefreshCw className="mr-1.5 h-4 w-4" />
        Refresh
      </Button>
    </div>
  );
};

export default SortControls;
