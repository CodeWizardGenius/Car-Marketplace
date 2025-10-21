
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { BrandList } from './components/BrandList';
import { PopularCars } from './components/PopularCars';
import { BottomNav } from './components/BottomNav';
import { Car } from './types';
import { fetchCars } from './services/carService';

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true);
        const carData = await fetchCars();
        setCars(carData);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen font-sans">
      <div className="w-full max-w-sm h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-32 h-8 bg-black rounded-full z-20"></div>
        
        <div className="flex-grow overflow-y-auto pb-24">
            <div className="p-6">
              <Header />
              <SearchBar />
              <BrandList />
              <PopularCars cars={cars} loading={loading} />
            </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default App;
