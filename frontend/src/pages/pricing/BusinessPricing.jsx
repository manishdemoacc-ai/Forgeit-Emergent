import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export const BusinessPricing = () => {
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
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1">
              <Star className="h-3 w-3 inline mr-1" />
              Most Popular
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Business Website Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Complete solution for established local businesses
            </p>
            <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              ₹9,999
            </div>
            <p className="text-gray-600 dark:text-gray-400">One-time payment</p>
          </div>

          {/* Features Card */}
          <Card className="mb-12 border-4 border-orange-500 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Premium Features Included</CardTitle>
              <CardDescription>Everything in Starter, plus advanced features</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  '8-10 Page Website',
                  'Premium Custom Design',
                  'Photo Gallery Integration',
                  'Contact & Booking Forms',
                  'WhatsApp Business Integration',
                  'Google Business Profile Setup',
                  'Advanced SEO Optimization',
                  'Free Domain (.com or .in)',
                  '1 Year Premium Hosting',
                  'Social Media Integration',
                  'Performance Optimization',
                  'Analytics Setup',
                  'Multiple Contact Forms',
                  'Image Gallery',
                  'Testimonial Section',
                  'Priority Support'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What You Get */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Premium Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom, professional design that stands out from competitors
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">More Pages</h3>
              <p className="text-gray-600 dark:text-gray-400">
                8-10 pages to showcase all aspects of your business
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Google Setup</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete Google Business Profile setup for local visibility
              </p>
            </div>
          </div>

          {/* Comparison */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Business Plan?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  'Perfect for established businesses ready to grow online',
                  'More pages to showcase products, services, and portfolio',
                  'Google Business Profile setup increases local discovery',
                  'Advanced SEO helps you rank higher in search results',
                  'Photo galleries and testimonials build trust',
                  'Priority support ensures quick resolution of any issues'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <ArrowRight className="h-5 w-5 text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Ideal For */}
          <Card className="mb-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Perfect For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Established restaurants with multiple locations',
                  'Retail stores with large product catalogs',
                  'Professional clinics and healthcare facilities',
                  'Service businesses (salons, spas, gyms)',
                  'Event venues and banquet halls',
                  'Hotels and guest houses'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Check className="h-5 w-5 text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl">
            <Star className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Most Popular Choice!</h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of successful businesses using this plan
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
