export type Provider = 'uber' | 'ola' | 'rapido';
export type RideType = 'cab' | 'bike' | 'auto';

export interface RideOption {
  id: string;
  provider: Provider;
  rideType: RideType;
  rideName: string;
  estimatedPrice: number;
  estimatedETA: number;
  surgeMultiplier?: number;
  distance: number;
}

export interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface SearchQuery {
  pickup: Location;
  drop: Location;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

export type SortOption = 'cheapest' | 'fastest';
