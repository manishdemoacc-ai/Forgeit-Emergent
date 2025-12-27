import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Fordge</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering local businesses with digital presence
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              At Fordge, we believe every local business deserves a strong online presence. Whether you run a restaurant, retail store, clinic, or any local service, we make it simple and affordable to get your business online.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is to bridge the digital gap for small businesses by providing professional websites without the technical hassle or expensive price tags.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Focus on Local
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in helping shops, restaurants, clinics, and service providers
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Simple & Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No complicated processes. We handle everything from start to finish
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Affordable Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional websites at prices that work for small businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
