import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 dark:opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 dark:opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 dark:opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
            <span className="block">Hi, I'm Ismael Najera</span>
            <span className="block mt-2 text-blue-600 dark:text-blue-400">
              IT Professional
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Service Desk Analyst at Warner Bros. Discovery with expertise in IT support, 
            cloud technologies, and system administration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl text-lg font-medium"
            >
              Contact Me
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg text-lg font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="text-gray-600 dark:text-gray-400" size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;