import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, ShoppingBag, Shirt, Watch, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export const StoreDemo = () => {
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
      <div className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">Demo Website</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fashion Hub Boutique</h1>
            <p className="text-xl md:text-2xl mb-6">Your Style, Our Passion</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                New Arrivals
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
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span>New Collection Every Week</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-purple-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-purple-500" />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Fashion Hub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Discover the latest trends in fashion. From casual wear to elegant evening outfits, we have everything you need to express your unique style. Quality products at affordable prices.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Designer Dress', icon: Shirt, price: '₹1,999' },
              { name: 'Casual Shirt', icon: Shirt, price: '₹799' },
              { name: 'Accessories', icon: Watch, price: '₹499' }
            ].map((product, idx) => {
              const Icon = product.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-lg mb-4 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Premium quality, latest design
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-purple-600">{product.price}</p>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Order Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-lg mb-6">Contact us via WhatsApp for orders!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp Order
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-purple-100 dark:bg-purple-900/20 border-t-4 border-purple-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 dark:text-gray-300 text-lg">
            <strong>This is a demo website.</strong> Want a website like this for your store?{' '}
            <a href="/#contact" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
              Contact Fordge
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
