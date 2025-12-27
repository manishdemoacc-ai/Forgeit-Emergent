import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';

export const StarterPricing = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Pricing Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Starter Website Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Perfect for small businesses just getting started online
            </p>
            <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              ₹4,999
            </div>
            <p className="text-gray-600 dark:text-gray-400">One-time payment</p>
          </div>

          {/* Features Card */}
          <Card className="mb-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">What's Included</CardTitle>
              <CardDescription>Everything you need to establish your online presence</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  '3-5 Page Website',
                  'Mobile Responsive Design',
                  'Contact Form Integration',
                  'Google Maps Integration',
                  'WhatsApp Button',
                  'Basic SEO Setup',
                  'Free Domain (.in)',
                  '1 Year Hosting Included',
                  'Professional Design',
                  'Fast Loading Speed',
                  'Social Media Links',
                  'Email Support'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What You Get */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean, modern, and professional design tailored to your business
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile-First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fully responsive design that works perfectly on all devices
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Setup</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your website will be live within 5-7 days of project start
              </p>
            </div>
          </div>

          {/* Ideal For */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <CardTitle className="text-2xl">Ideal For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  'Small local shops and businesses',
                  'Restaurants and cafes looking for online presence',
                  'Service providers (salons, clinics, etc.)',
                  'Startups testing the market',
                  'Businesses on a tight budget'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <ArrowRight className="h-5 w-5 text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's build your online presence today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
              >
                <a href="/#contact" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link to="/#pricing">View All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
