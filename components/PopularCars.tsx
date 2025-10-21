
import React from 'react';
import { CarCard } from './CarCard';
import type { Car } from '../types';

interface PopularCarsProps {
  cars: Car[];
  loading: boolean;
}

const SkeletonCard: React.FC = () => (
    <div className="bg-gray-100 rounded-2xl p-3 animate-pulse">
        <div className="bg-gray-200 h-24 rounded-lg"></div>
        <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
)

export const PopularCars: React.FC<PopularCarsProps> = ({ cars, loading }) => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Popular Car</h2>
        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-800">
          View All
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          cars.map((car) => <CarCard key={car.id} car={car} />)
        )}
      </div>
    </section>
  );
};
