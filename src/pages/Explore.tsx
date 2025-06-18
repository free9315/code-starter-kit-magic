
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import { MapPin, ChevronDown, ShoppingCart, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';

const Explore: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const exploreCategories = [
    {
      id: 'north-indian',
      name: 'North Indian',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop',
      description: 'Rich curries and breads',
      dishes: '45+ dishes'
    },
    {
      id: 'south-indian',
      name: 'South Indian',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop',
      description: 'Dosas, idlis and more',
      dishes: '30+ dishes'
    },
    {
      id: 'chinese',
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=300&h=200&fit=crop',
      description: 'Noodles and stir-fries',
      dishes: '25+ dishes'
    },
    {
      id: 'italian',
      name: 'Italian',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      description: 'Pasta and pizza',
      dishes: '20+ dishes'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop',
      description: 'Sweet treats',
      dishes: '15+ dishes'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop',
      description: 'Fresh drinks',
      dishes: '10+ drinks'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Categories' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'new', name: 'Newly Added' },
    { id: 'quick', name: 'Quick Meals' }
  ];

  const handleCategoryClick = (categoryId: string) => {
    console.log('Exploring category:', categoryId);
    // Navigate to category-specific page or filter products
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1 py-0">
                  <span className="text-black text-lg font-bold">Explore</span>
                  <ChevronDown className="w-4 h-4 text-black" />
                </div>
                <span className="opacity-90 text-black font-semibold text-xs">Discover amazing home-cooked meals</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/cart')}
                className="relative"
              >
                <ShoppingCart className="w-5 h-5 text-black" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">H</span>
              </div>
            </div>
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

        {/* Categories Grid */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Food Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exploreCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{category.dishes}</span>
                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                      View All →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Chefs Section */}
        <div className="bg-white mt-4 p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Home Chefs</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'Chef Priya',
                specialty: 'North Indian',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop',
                rating: 4.8,
                orders: '150+'
              },
              {
                name: 'Chef Rajesh',
                specialty: 'South Indian',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop',
                rating: 4.9,
                orders: '200+'
              }
            ].map((chef, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{chef.name}</h4>
                  <p className="text-sm text-gray-600">{chef.specialty}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      ⭐ {chef.rating}
                    </span>
                    <span className="text-xs text-gray-500">{chef.orders} orders</span>
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
