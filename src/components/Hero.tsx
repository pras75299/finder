import React from 'react';
import { Mail, Slack, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Slack className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Twitter className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
        </div>

        <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          Unlock <span className="bg-indigo-100 dark:bg-indigo-900 px-4 rounded-lg">infinite</span> memory
          <br />
          with your (AI) second brain
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          One platform to organise, search, and utilise information scattered across
          apps, social bookmarks, notes, thoughts, and files.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Recall anything, in seconds
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors">
            Get your second brain
          </button>
          <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg text-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            Personalised demo
          </button>
        </div>

        <div className="flex justify-center space-x-8 mt-16">
          <div className="text-center">
            <div className="border border-indigo-200 dark:border-indigo-800 rounded-full p-4 inline-block">
              <span className="text-gray-700 dark:text-gray-300">1st</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Product of the day</p>
          </div>
          <div className="text-center">
            <div className="border border-indigo-200 dark:border-indigo-800 rounded-full p-4 inline-block">
              <span className="text-gray-700 dark:text-gray-300">1st</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Product of the week</p>
          </div>
          <div className="text-center">
            <div className="border border-indigo-200 dark:border-indigo-800 rounded-full p-4 inline-block">
              <span className="text-gray-700 dark:text-gray-300">3rd</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Product of the month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;