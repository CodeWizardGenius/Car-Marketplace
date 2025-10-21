
import React, { useState } from 'react';
import { BRANDS } from '../constants';

export const BrandList: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('Cadillac');

  return (
    <div className="mt-8">
      <div className="flex justify-around items-center">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => setSelectedBrand(brand.name)}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full transition-colors ${
                selectedBrand === brand.name ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              <brand.logo
                className={`h-8 w-8 ${
                  selectedBrand === brand.name ? 'text-white' : 'text-gray-800'
                }`}
              />
            </div>
            <p className="text-xs font-medium text-gray-600">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
