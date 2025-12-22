import { RideOption } from '@/types/ride';

export const generateMockRides = (distance: number): RideOption[] => {
  const basePrice = distance * 12;
  const baseETA = Math.max(3, Math.floor(distance * 2));
  
  return [
    {
      id: 'uber-go',
      provider: 'uber',
      rideType: 'cab',
      rideName: 'UberGo',
      estimatedPrice: Math.round(basePrice * 1.1 + 30),
      estimatedETA: baseETA + 2,
      distance,
    },
    {
      id: 'uber-premier',
      provider: 'uber',
      rideType: 'cab',
      rideName: 'Uber Premier',
      estimatedPrice: Math.round(basePrice * 1.5 + 50),
      estimatedETA: baseETA + 4,
      surgeMultiplier: 1.2,
      distance,
    },
    {
      id: 'uber-moto',
      provider: 'uber',
      rideType: 'bike',
      rideName: 'Uber Moto',
      estimatedPrice: Math.round(basePrice * 0.5 + 15),
      estimatedETA: baseETA - 1,
      distance,
    },
    {
      id: 'ola-mini',
      provider: 'ola',
      rideType: 'cab',
      rideName: 'Ola Mini',
      estimatedPrice: Math.round(basePrice * 0.95 + 25),
      estimatedETA: baseETA + 1,
      distance,
    },
    {
      id: 'ola-prime',
      provider: 'ola',
      rideType: 'cab',
      rideName: 'Ola Prime Sedan',
      estimatedPrice: Math.round(basePrice * 1.4 + 45),
      estimatedETA: baseETA + 3,
      distance,
    },
    {
      id: 'ola-bike',
      provider: 'ola',
      rideType: 'bike',
      rideName: 'Ola Bike',
      estimatedPrice: Math.round(basePrice * 0.45 + 12),
      estimatedETA: baseETA - 2,
      distance,
    },
    {
      id: 'ola-auto',
      provider: 'ola',
      rideType: 'auto',
      rideName: 'Ola Auto',
      estimatedPrice: Math.round(basePrice * 0.7 + 20),
      estimatedETA: baseETA,
      distance,
    },
    {
      id: 'rapido-bike',
      provider: 'rapido',
      rideType: 'bike',
      rideName: 'Rapido Bike',
      estimatedPrice: Math.round(basePrice * 0.4 + 10),
      estimatedETA: baseETA - 3,
      distance,
    },
    {
      id: 'rapido-auto',
      provider: 'rapido',
      rideType: 'auto',
      rideName: 'Rapido Auto',
      estimatedPrice: Math.round(basePrice * 0.65 + 18),
      estimatedETA: baseETA - 1,
      distance,
    },
  ];
};

export const providerDeepLinks = {
  uber: 'https://m.uber.com',
  ola: 'https://book.olacabs.com',
  rapido: 'https://rapido.bike',
};

export const providerLogos = {
  uber: '🚗',
  ola: '🟢',
  rapido: '🏍️',
};
