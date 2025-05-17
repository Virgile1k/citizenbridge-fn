'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../../public/images/citizenbrige_hero.jpg';

interface CitizenBridgeProps {
  colors: {
    blue: string;
    yellow: string;
    green: string;
  };
}

const CitizenBridge: React.FC<CitizenBridgeProps> = ({ colors }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-90" 
          style={{ backgroundImage: `linear-gradient(to right, ${colors.blue}, ${colors.green})` }} 
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your Voice Matters
            </h1>
            <p className="mt-6 text-xl">
              Submit, track, and resolve public service issues all in one place. Our Citizen Engagement System connects you directly with government agencies for faster response times and better outcomes.
            </p>
            <div className="mt-10 flex space-x-4">
              <a 
                href="#get-started" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Submit a Complaint
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a 
                href="#track" 
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-opacity-20 hover:bg-white"
              >
                Track Status
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="rounded-lg overflow-hidden shadow-xl w-full">
              <Image
                src={heroImage}
                alt="CitizenBridge Platform"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenBridge;