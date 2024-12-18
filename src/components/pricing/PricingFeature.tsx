import React, { ReactNode } from 'react';

interface PricingFeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-6 rounded-xl bg-gray-50">
      <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PricingFeature;