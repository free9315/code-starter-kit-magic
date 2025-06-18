
import React, { useState } from 'react';
import { Search, Mic } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="px-4 py-3">
      <div className="relative">
        <div className="flex items-center bg-white rounded-lg shadow-md">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Search for meals, chefs, cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-3 text-sm text-gray-700 bg-transparent outline-none"
          />
          <button className="p-3 text-gray-400 hover:text-gray-600">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
