import React from 'react';
import PricingTier from './pricing/PricingTier';
import PricingFeature from './pricing/PricingFeature';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started with basic organization',
      features: [
        'Up to 100 notes and files',
        'Basic search functionality',
        'Mobile app access',
        '2 collections',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '12',
      description: 'Ideal for professionals who need advanced features',
      features: [
        'Unlimited notes and files',
        'Advanced AI search',
        'Priority support',
        'Unlimited collections',
        'API access',
        'Custom integrations'
      ],
      highlighted: true
    },
    {
      name: 'Team',
      price: '49',
      description: 'For teams that need to collaborate seamlessly',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Admin controls',
        'Advanced analytics',
        'Custom training',
        'Dedicated success manager'
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Enterprise features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingFeature
              title="Advanced Security"
              description="SOC 2 Type II compliance, SSO, and custom security requirements"
              icon={<Check className="w-5 h-5" />}
            />
            <PricingFeature
              title="Custom Deployment"
              description="Deploy on your infrastructure with dedicated support"
              icon={<Check className="w-5 h-5" />}
            />
            <PricingFeature
              title="24/7 Support"
              description="Dedicated support team with guaranteed response times"
              icon={<Check className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;