import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-blue-400">Ismael Najera</h2>
            <p className="text-gray-400 mt-1">IT Professional</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {currentYear} Ismael Najera. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;