import React from 'react';
import Testimonial from './testimonials/Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      author: 'Aditya Arora',
      role: 'CTO Fund Capital Setup',
      company: 'Influencer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
      content: 'With Findr, accessing the right information when needed has become effortless. It searches through mountains of data points and information and delivers precise results, making our team to make smarter investment decisions.'
    },
    {
      author: 'Tom Orbach',
      role: 'Digital Marketing at WC',
      company: 'WIZ',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
      content: 'The search feature is amazing. I can find emails, files, or chat history all in one spot.'
    },
    {
      author: 'Gabe Moronta',
      role: 'Marketing at Vista',
      company: 'Vista',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=faces',
      content: 'We are all victims of modern technology where we have so many different tools available to us, and while we think were pretty good at storing information, we are not very good at being able to find things. Findr makes it so very easy!',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          From people who <span className="text-indigo-600">never forget</span> anything anymore
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;