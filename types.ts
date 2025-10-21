
import React from 'react';

export interface Brand {
  name: string;
  logo: React.FC<{ className?: string }>;
}

export interface Car {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  isFavorited: boolean;
}
