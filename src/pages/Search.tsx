
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import { Filter, Star, MapPin, Clock } from 'lucide-react';

const Search: React.FC = () => {
  const [searchResults] = useState([
    {
      id: 1,
      name: 'Butter Chicken with Naan',
      chef: 'Priya\'s Kitchen',
      rating: 4.8,
      price: 280,
      originalPrice: 350,
      image: 'https://images.unsplash.com/photo-1574653853027-5d3348d37e7b?w=300&h=200&fit=crop',
      distance: '0.8 km',
      time: '25-30 min',
      tags: ['North Indian', 'Spicy', 'Popular']
    },
    {
      id: 2,
      name: 'South Indian Thali',
      chef: 'Amma\'s Kitchen',
      rating: 4.9,
      price: 220,
      originalPrice: 280,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop',
      distance: '1.2 km',
      time: '20-25 min',
      tags: ['South Indian', 'Healthy', 'Vegetarian']
    }
  ]);

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Search Results</h1>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Filter Bar */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium whitespace-nowrap">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">
              Distance
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">
              Price
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">
              Rating
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="p-4 space-y-4">
          {searchResults.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1 p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.chef}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-orange-500">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>
                    <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
