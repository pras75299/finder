import React from 'react';
import { Box } from 'lucide-react';

const TrustedCompanies = () => {
  const companies = [
    { name: 'Postman', logo: <Box className="h-8 w-auto text-gray-400" /> },
    { name: 'ByteDance', logo: <Box className="h-8 w-auto text-gray-400" /> },
    { name: 'Zapier', logo: <Box className="h-8 w-auto text-gray-400" /> },
    { name: 'MongoDB', logo: <Box className="h-8 w-auto text-gray-400" /> },
    { name: 'Dropbox', logo: <Box className="h-8 w-auto text-gray-400" /> },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">
          Trusted by researchers, thinkers, and superhumans who work at
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;