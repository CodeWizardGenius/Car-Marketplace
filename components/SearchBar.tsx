
import React from 'react';
import { SearchIcon, FilterIcon } from '../constants';

export const SearchBar: React.FC = () => {
  return (
    <div className="mt-6 flex items-center space-x-4">
      <div className="relative flex-grow">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search your car"
          className="w-full h-12 pl-12 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
      <button className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-800 text-white rounded-full">
        <FilterIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
