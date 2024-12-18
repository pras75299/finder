import React from 'react';
import GatewaySection from './features/GatewaySection';
import NotesOrganizer from './features/NotesOrganizer';

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <GatewaySection />
        <NotesOrganizer />
      </div>
    </div>
  );
};

export default Features;