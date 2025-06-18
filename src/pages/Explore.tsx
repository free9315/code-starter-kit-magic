
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import { MapPin, ChevronDown, ShoppingCart, Filter, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Explore: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const homeKitchens = [
    {
      id: 1,
      name: 'Priya\'s Kitchen',
      chef: 'Chef Priya Sharma',
      rating: 4.8,
      distance: '0.8 km',
      specialty: 'North Indian',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop',
      topMeals: [
        { name: 'Butter Chicken', price: 280, image: 'https://images.unsplash.com/photo-1574653853027-5d3348d37e7b?w=100&h=100&fit=crop' },
        { name: 'Dal Makhani', price: 220, image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=100&h=100&fit=crop' },
        { name: 'Naan Combo', price: 150, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 2,
      name: 'Amma\'s Kitchen',
      chef: 'Chef Lakshmi',
      rating: 4.9,
      distance: '1.2 km',
      specialty: 'South Indian',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop',
      topMeals: [
        { name: 'Masala Dosa', price: 120, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=100&h=100&fit=crop' },
        { name: 'Idli Sambar', price: 100, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop' },
        { name: 'Filter Coffee', price: 40, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 3,
      name: 'Maria\'s Kitchen',
      chef: 'Chef Maria Rodriguez',
      rating: 4.7,
      distance: '2.1 km',
      specialty: 'Continental',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop',
      topMeals: [
        { name: 'Pasta Arrabbiata', price: 250, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop' },
        { name: 'Caesar Salad', price: 180, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
        { name: 'Garlic Bread', price: 120, image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=100&h=100&fit=crop' }
      ]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Kitchens' },
    { id: 'nearby', name: 'Nearby' },
    { id: 'top-rated', name: 'Top Rated' },
    { id: 'quick', name: 'Quick Delivery' },
    { id: 'mess', name: 'Mess' },
    { id: 'tiffin', name: 'Tiffin Service' }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section with uploaded image */}
        <div className="relative h-64">
          <img
            src="/lovable-uploads/c0233e86-81ca-4fb5-bc46-d4d9bb83a3db.png"
            alt="Delicious home-cooked meals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Header content over hero image */}
          <div className="absolute top-0 left-0 right-0 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-white text-lg font-bold">Explore</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-xs opacity-90">Discover amazing home kitchens</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button onClick={() => navigate('/cart')} className="relative">
                  <ShoppingCart className="w-5 h-5 text-white" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">H</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h1 className="text-2xl font-bold mb-2">Explore Home Kitchens</h1>
            <p className="text-sm opacity-90">Fresh, homemade meals from certified home chefs</p>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Filter Tabs */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Home Kitchens */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Home Kitchens Near You</h2>
          <div className="space-y-6">
            {homeKitchens.map((kitchen) => (
              <div key={kitchen.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Kitchen Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={kitchen.image}
                      alt={kitchen.chef}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{kitchen.name}</h3>
                      <p className="text-sm text-gray-600">{kitchen.chef}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{kitchen.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{kitchen.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">25-30 min</span>
                        </div>
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {kitchen.specialty}
                    </span>
                  </div>
                </div>

                {/* Top 3 Meals */}
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Top 3 Meals</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {kitchen.topMeals.map((meal, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={meal.image}
                          alt={meal.name}
                          className="w-full h-16 object-cover rounded-lg mb-2"
                        />
                        <p className="text-xs font-medium text-gray-900 truncate">{meal.name}</p>
                        <p className="text-xs text-orange-500 font-bold">₹{meal.price}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg">
                      Order Now
                    </button>
                    <button className="flex-1 py-2 border border-orange-500 text-orange-500 text-sm font-medium rounded-lg">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
