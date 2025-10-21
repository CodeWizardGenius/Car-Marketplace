
import React, { useState } from 'react';
import { HeartIcon, StarIcon } from '../constants';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(car.isFavorited);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-3 flex flex-col space-y-2 hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-24 object-cover rounded-lg"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full"
        >
          <HeartIcon
            className={`h-4 w-4 ${isFavorited ? 'text-red-500' : 'text-gray-700'}`}
            filled={isFavorited}
          />
        </button>
      </div>
      <div>
        <h3 className="font-bold text-gray-800 truncate">{car.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm font-semibold text-gray-700">{formatPrice(car.price)}</p>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="text-xs font-medium text-gray-500">{car.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
