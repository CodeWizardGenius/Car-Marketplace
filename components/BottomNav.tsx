
import React, { useState } from 'react';
import { HomeIcon, HeartIcon, ShoppingBagIcon, SettingsIcon } from '../constants';

const navItems = [
    { id: 'home', icon: HomeIcon },
    { id: 'favorites', icon: HeartIcon },
    { id: 'cart', icon: ShoppingBagIcon },
    { id: 'settings', icon: SettingsIcon },
];

export const BottomNav: React.FC = () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] bg-gray-800 text-white rounded-full shadow-lg">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => setActiveItem(item.id)}
                        className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-colors ${
                            activeItem === item.id ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                        <item.icon className="h-6 w-6" />
                        {activeItem === item.id && (
                           <div className="absolute top-0 left-0 w-full h-full bg-white/20 rounded-full scale-125 opacity-50"></div>
                        )}
                    </button>
                ))}
            </div>
        </nav>
    );
};
