 'use client';

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Citizens Are Saying
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See how our platform is making a difference in communities across the country.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300" />
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-900">Emanuel K.</div>
                <div className="text-gray-500">Kigali Resident</div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &ldquo;After reporting a broken water pipe through CitizenVoice, I received a response within hours and the issue was fixed the next day. This system is exactly what our community needed.&rdquo;
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300" />
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-900">Marie C.</div>
                <div className="text-gray-500">Business Owner</div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &ldquo;As a business owner, I needed urgent attention for a road issue affecting my customers&apos; access. The platform allowed me to submit my concern and track its progress until resolution.&rdquo;
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300" />
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-900">Jean P.</div>
                <div className="text-gray-500">District Official</div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &ldquo;From the government side, this system has revolutionized how we handle citizen concerns. We can now prioritize issues more effectively and provide better service to our communities.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;