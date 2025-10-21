
import React from 'react';
import { BellIcon } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center pt-8">
      <div className="flex items-center space-x-3">
        <img
          src="https://picsum.photos/id/237/50/50"
          alt="User profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-sm text-gray-500">Welcome 👋</p>
          <h1 className="font-bold text-lg text-gray-800">Shahinur Rahman</h1>
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
        <BellIcon className="h-6 w-6 text-gray-600" />
      </button>
    </header>
  );
};
