import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  highlighted = false
}) => {
  return (
    <div 
      className={`rounded-2xl p-8 ${
        highlighted 
          ? 'bg-indigo-50 border-2 border-indigo-500 relative' 
          : 'bg-white border border-gray-200'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-center justify-center mb-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-indigo-500 mr-2" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-medium ${
          highlighted
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
        }`}
      >
        Get started
      </button>
    </div>
  );
};

export default PricingTier;