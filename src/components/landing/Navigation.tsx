 'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  colors: {
    blue: string;
    yellow: string;
    green: string;
  };
}

const Navigation: React.FC<NavigationProps> = ({ colors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold" style={{ color: colors.blue }}>Citizen</span>
              <span className="text-2xl font-bold" style={{ color: colors.green }}>Bridge</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Features
              </a>
              <a href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                How It Works
              </a>
              <a href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Testimonials
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white" style={{ backgroundColor: colors.blue }}>
              Login
            </a>
            <a href="#get-started" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white" style={{ backgroundColor: colors.green }}>
              Get Started
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="#features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
            Features
          </a>
          <a href="#how-it-works" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
            How It Works
          </a>
          <a href="#testimonials" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
            Testimonials
          </a>
          <a href="#contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
            Contact
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <a href="#login" className="block text-center px-4 py-2 text-sm text-white rounded-md w-full" style={{ backgroundColor: colors.blue }}>
              Login
            </a>
          </div>
          <div className="mt-3 px-4">
            <a href="#get-started" className="block text-center px-4 py-2 text-sm text-white rounded-md w-full" style={{ backgroundColor: colors.green }}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;