import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchInterface from './components/SearchInterface';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="fixed top-0 w-full bg-indigo-600 dark:bg-indigo-700 text-white py-2 text-center z-50">
          We're live on ProductHunt - 
          <a href="#" className="underline ml-1">
            Help us become the #1 second brain by upvoting
          </a>
          🎯
        </div>
        <Navbar />
        <Hero />
        <div className="px-4 py-16 bg-indigo-50 dark:bg-gray-800">
          <SearchInterface />
        </div>
        <TrustedCompanies />
        <Features />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;