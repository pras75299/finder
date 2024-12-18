import React from 'react';
import UseCase from './use-cases/UseCase';

const UseCases = () => {
  const useCases = [
    {
      number: '01',
      title: 'Marketers',
      subtitle: 'Find Your Inspiration',
      description: 'Save and organize all your campaign ideas and inspirations in one place—from webpages to emails, tweets, and Instagram reels. Use AI to ideate and discover memories for your next big campaign.'
    },
    {
      number: '02',
      title: 'Researchers',
      subtitle: 'Streamline Your Research',
      description: 'Centralize your research and references in one hub. Findr helps you store, search, and connect ideas, uncover patterns, and retrieve information from papers, notes, charts, and more.'
    },
    {
      number: '03',
      title: 'Developers',
      subtitle: 'Your Technical Library',
      description: 'Save code snippets, GitHub discussions, Reddit forums, and more in one place. Use AI to search, explain, and combine sources to solve problems and generate code faster.'
    },
    {
      number: '04',
      title: 'Writers',
      subtitle: 'Write Without Distractions',
      description: 'Bring all your ideas, inspirations, and notes into one space. Use AI to resurface connections, spark creativity, and write faster without switching between multiple apps.'
    },
    {
      number: '05',
      title: 'Founders',
      subtitle: 'Your Virtual Assistant',
      description: 'Store and search emails, LinkedIn posts, favorite PD pages—in one place. Search across all your apps and resources to get instant AI answers to questions using your memories i.e. uploaded files and apps. It is your private and personalised perplexity.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Different use cases</h2>
          <p className="text-gray-600">Expand your visual memory</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <UseCase key={useCase.number} {...useCase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;