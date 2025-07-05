import React from 'react';
import { Target, Users, Gamepad2, Star } from 'lucide-react';

const Studio: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create innovative gaming experiences that connect players worldwide through compelling storytelling and cutting-edge technology."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate developers, artists, and designers united by our love for creating exceptional games."
    },
    {
      icon: Gamepad2,
      title: "Our Games",
      description: "From indie darlings to ambitious projects, we focus on quality, innovation, and player satisfaction in every release."
    },
    {
      icon: Star,
      title: "Our Values",
      description: "Creativity, collaboration, and community drive everything we do. We believe games should inspire and bring people together."
    }
  ];

  return (
    <section id="studio" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface-light rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;