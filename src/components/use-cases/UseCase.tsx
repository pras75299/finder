import React from 'react';

interface UseCaseProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const UseCase: React.FC<UseCaseProps> = ({ number, title, subtitle, description }) => {
  return (
    <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="text-indigo-600 font-medium mb-2">{number} {title}</div>
      <h3 className="text-xl font-semibold mb-3">{subtitle}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default UseCase;