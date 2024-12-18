import React from 'react';
import { FolderKanban, Search, Brain, Wand2 } from 'lucide-react';

const NotesOrganizer = () => {
  const features = [
    {
      icon: <FolderKanban className="w-6 h-6" />,
      title: "Visually organise your memories",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Extremely powerful universal search",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI for instant answers",
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Magically organise everything",
      description: "Create collections to organise related content - notes, files, webpages, screenshots, and anything else. Use AI to chat with entire collections, at once.",
      highlighted: true
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1">
        <h2 className="text-4xl font-bold leading-tight mb-12">
          Your notes, thoughts, files, and apps
          <br />
          all in one place, at last.
        </h2>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex gap-4 ${feature.highlighted ? 'bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-600' : ''}`}
            >
              <div className={`${feature.highlighted ? 'text-indigo-600' : 'text-gray-600'}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                {feature.description && (
                  <p className="text-gray-600">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesOrganizer;