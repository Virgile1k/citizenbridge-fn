 'use client';

interface StatsProps {
  colors: {
    blue: string;
    yellow: string;
    green: string;
  };
}

const Stats: React.FC<StatsProps> = ({ colors }) => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Making Government Services More Responsive
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our platform connects citizens directly with government agencies, ensuring faster resolution times and greater transparency.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Average Response Time
            </dt>
            <dd className="order-1 text-5xl font-extrabold" style={{ color: colors.blue }}>
              48hrs
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Issues Resolved
            </dt>
            <dd className="order-1 text-5xl font-extrabold" style={{ color: colors.green }}>
              87%
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Citizen Satisfaction
            </dt>
            <dd className="order-1 text-5xl font-extrabold" style={{ color: colors.yellow }}>
              92%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;