import React from 'react';
import { Search, ChevronDown, Image } from 'lucide-react';

const SearchInterface = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-8 dark:text-white">What's on your mind?</h2>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full p-4 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sources</span>
          <button className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
            All sources
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
            Collection <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
            Pages <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Image className="h-4 w-4" />
          <span>My Memories</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border dark:border-gray-700 rounded-lg p-4 dark:bg-gray-800">
            <div className="flex items-center gap-2 mb-2">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="Dubai" className="w-20 h-20 object-cover rounded" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium dark:text-white">1:1 with Nishkarsh</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">1h ago</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis.
                </p>
              </div>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4 dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium dark:text-white">Twitter</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">1h ago</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;