 'use client';

import { MessageSquare, Clock, BarChart2 } from 'lucide-react';

interface FeaturesProps {
  colors: {
    blue: string;
    yellow: string;
    green: string;
  };
}

const Features: React.FC<FeaturesProps> = ({ colors }) => {
  return (
    <div id="features" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.blue }}>
            Features
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Everything you need to be heard
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our comprehensive platform ensures your concerns reach the right people, with the tools to track progress every step of the way.
          </p>
        </div>
        <div className="mt-16">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative">
              <div className="relative h-12 w-12 rounded-md flex items-center justify-center" style={{ backgroundColor: colors.blue }}>
                <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900">Easy Submission Process</p>
              <p className="mt-2 text-base text-gray-500">
                Submit complaints or feedback through our intuitive web or mobile interface. Attach photos and provide location details for context.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-12 w-12 rounded-md flex items-center justify-center" style={{ backgroundColor: colors.yellow }}>
                <Clock className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900">Real-time Status Tracking</p>
              <p className="mt-2 text-base text-gray-500">
                Track the status of your submission from receipt to resolution. Receive notifications at each step of the process.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-12 w-12 rounded-md flex items-center justify-center" style={{ backgroundColor: colors.green }}>
                <BarChart2 className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-6 text-lg font-medium text-gray-900">Data-Driven Insights</p>
              <p className="mt-2 text-base text-gray-500">
                Access analytics on common issues in your community and see how your government is performing in addressing citizen concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;