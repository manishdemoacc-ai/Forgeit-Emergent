import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';

export const SupportPricing = () => {
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
              Monthly Support Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Ongoing maintenance and updates for your website
            </p>
            <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              ₹999<span className="text-3xl">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Cancel anytime, no long-term contracts</p>
          </div>

          {/* Features Card */}
          <Card className="mb-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">What's Included</CardTitle>
              <CardDescription>Continuous support and maintenance for your website</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Regular Content Updates',
                  'Security Updates & Patches',
                  'Performance Monitoring',
                  'Technical Support',
                  'Backup & Recovery',
                  'Minor Design Changes',
                  'Plugin/Software Updates',
                  'Priority Email Support',
                  'Monthly Reports',
                  'Uptime Monitoring',
                  'Bug Fixes',
                  'SEO Maintenance'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What's Covered */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Regular security updates and patches to keep your site safe
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Updates</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Content updates, text changes, and image uploads as needed
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick response to your queries and technical issues
              </p>
            </div>
          </div>

          {/* Update Examples */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <CardTitle className="text-2xl">Examples of Updates We Handle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Content Updates:</h4>
                  <ul className="space-y-2">
                    {[
                      'Menu items and pricing changes',
                      'New product additions',
                      'Staff/doctor information updates',
                      'Business hours changes',
                      'Contact information updates'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Maintenance:</h4>
                  <ul className="space-y-2">
                    {[
                      'Security patches and updates',
                      'Performance optimization',
                      'Broken link fixes',
                      'Form troubleshooting',
                      'Minor design adjustments'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why You Need This */}
          <Card className="mb-12 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Why Monthly Support?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  'Keep your website secure with regular security updates',
                  'Maintain fresh content to engage returning customers',
                  'Ensure your site runs smoothly without technical issues',
                  'Save time - focus on your business while we handle the website',
                  'Peace of mind knowing experts are monitoring your site',
                  'Avoid expensive emergency fixes with preventive maintenance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Check className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📝 Important Note</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This plan is for existing Fordge website customers. Major design overhauls or new feature additions may incur additional charges. Contact us for custom requirements.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Keep Your Website Running Smoothly</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to monthly support and never worry about maintenance again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
              >
                <a href="/#contact" className="flex items-center gap-2">
                  Subscribe Now
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
