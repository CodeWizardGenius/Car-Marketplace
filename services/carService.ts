
import { Car } from '../types';
import { CARS_DATA } from '../constants';

export const fetchCars = (): Promise<Car[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CARS_DATA);
    }, 1000); // Simulate 1 second network delay
  });
};
