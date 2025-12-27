import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { demoWebsites } from '../mock';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-red-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 px-4 py-1">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            See Our Work in{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional website examples for different types of local businesses
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoWebsites.map((demo, index) => (
            <div
              key={demo.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                <img
                  src={demo.image}
                  alt={demo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 dark:bg-gray-900/90 dark:text-white">
                    {demo.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {demo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {demo.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white group-hover:shadow-xl transition-all"
                >
                  <Link to={demo.route} className="flex items-center justify-center gap-2">
                    View Demo
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Note */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border-2 border-orange-200 dark:border-orange-900/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Transform Your Business Online
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Each demo represents a before & after transformation - from no online presence to a professional, fully-functional website that drives real results.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Click "View Demo" to see complete website examples
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
