import React from 'react';
import { Store, IndianRupee, Zap, Smartphone, MessageSquare, CheckCircle } from 'lucide-react';
import { whyChoose } from '../mock';

export const WhyChooseSection = () => {
  const iconMap = {
    Store,
    IndianRupee,
    Zap,
    Smartphone,
    MessageSquare,
    CheckCircle
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Fordge?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We understand local businesses and deliver exactly what you need
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChoose.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-orange-50/50 dark:from-gray-800 dark:to-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Take Your Business Online?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of local businesses that trust Fordge for their online presence
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};
