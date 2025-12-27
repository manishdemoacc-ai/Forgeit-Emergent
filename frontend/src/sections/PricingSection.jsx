import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../mock';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 px-4 py-1">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-4 border-orange-500 shadow-2xl scale-105 md:scale-110'
                  : 'border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 shadow-lg">
                    <Star className="h-3 w-3 inline mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/10"
                >
                  <Link to={plan.route}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-900/30">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">All plans include:</span> Free SSL Certificate, Mobile Optimization, and Technical Support
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need a custom solution? <a href="#contact" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">Contact us</a> for a personalized quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
