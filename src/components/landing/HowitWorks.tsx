 'use client';

interface HowItWorksProps {
  colors: {
    blue: string;
    yellow: string;
    green: string;
  };
}

const HowItWorks: React.FC<HowItWorksProps> = ({ colors }) => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our simple 4-step process ensures your voice is heard and issues are resolved efficiently.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.blue }}>
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                </div>
                <p className="mt-3 text-xl font-semibold text-center text-gray-900">Submit</p>
                <p className="mt-3 text-base text-gray-500 text-center">
                  File your complaint or feedback through our platform with all relevant details.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.yellow }}>
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                </div>
                <p className="mt-3 text-xl font-semibold text-center text-gray-900">Route</p>
                <p className="mt-3 text-base text-gray-500 text-center">
                  Our system categorizes and routes your submission to the appropriate government agency.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.green }}>
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                </div>
                <p className="mt-3 text-xl font-semibold text-center text-gray-900">Respond</p>
                <p className="mt-3 text-base text-gray-500 text-center">
                  Government officials review and respond to your submission with updates or resolution plans.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.blue }}>
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                </div>
                <p className="mt-3 text-xl font-semibold text-center text-gray-900">Resolve</p>
                <p className="mt-3 text-base text-gray-500 text-center">
                  Track the resolution process and provide feedback on the outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;