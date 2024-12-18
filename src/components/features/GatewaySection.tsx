import React from 'react';
import FeatureCard from './FeatureCard';

const GatewaySection = () => {
  const features = [
    {
      title: "That thing you saved?",
      description: "Yes, it's here. Never lose important ideas. Find things at the speed of thought."
    },
    {
      title: "Pinterest for your mind",
      description: "Your ideas are perfectly organised and instantly accessible."
    },
    {
      title: "All your ideas, connected",
      description: "Save what sparks your curiosity: articles, videos, notes, PDFs, and everything in between."
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        Gateway to <span className="text-indigo-600">infinite</span> memory
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GatewaySection;