import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, ChefHat, UtensilsCrossed } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export const RestaurantDemo = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">Demo Website</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Spice Garden Restaurant</h1>
            <p className="text-xl md:text-2xl mb-6">Authentic Indian Cuisine</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Book a Table
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-orange-500" />
              <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-orange-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Spice Garden
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Experience the finest Indian cuisine in a warm and inviting atmosphere. Our chefs use traditional recipes and the freshest ingredients to bring you authentic flavors from across India.
          </p>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Popular Dishes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Butter Chicken', 'Biryani', 'Paneer Tikka'].map((dish, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-900 dark:to-red-900 rounded-lg mb-4 flex items-center justify-center">
                  <ChefHat className="h-16 w-16 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{dish}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Traditional recipe with authentic spices
                </p>
                <p className="text-2xl font-bold text-orange-600">₹299</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white">
          <UtensilsCrossed className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Reserve Your Table</h2>
          <p className="text-lg mb-6">Call us or visit us today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-orange-100 dark:bg-orange-900/20 border-t-4 border-orange-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 dark:text-gray-300 text-lg">
            <strong>This is a demo website.</strong> Want a website like this for your restaurant?{' '}
            <a href="/#contact" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
              Contact Fordge
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
