
import React from 'react';

const EthnicCollection = () => {
  return (
    <div className="px-4 py-6">
      <div className="relative bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Traditional Home Cooking
            </h2>
            <p className="text-gray-700 text-sm mb-3">
              Authentic recipes passed down through generations
            </p>
            <p className="text-orange-600 font-semibold text-sm">
              Made with love, just like mom's cooking
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=150&fit=crop" 
              alt="Traditional cooking" 
              className="w-24 h-20 rounded-lg object-cover shadow-lg"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">❤️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthnicCollection;
