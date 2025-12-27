import React from 'react';
import { FileText, Code, Rocket } from 'lucide-react';
import { howItWorks } from '../mock';

export const HowItWorksSection = () => {
  const iconMap = {
    FileText,
    Code,
    Rocket
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get your business online in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {howItWorks.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={step.step}
                    className="relative"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Step Card */}
                    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 hover:-translate-y-2 ${isEven ? 'md:mt-0' : 'md:mt-12'}`}>
                      {/* Step Number Badge */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                          {step.step}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6 mt-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-700 flex items-center justify-center">
                          <Icon className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 rounded-full px-8 py-4 text-white shadow-xl">
            <p className="text-lg font-semibold">
              ⚡ Your website will be live in just <span className="text-2xl font-bold">5-7 days</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
