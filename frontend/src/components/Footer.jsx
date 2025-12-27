import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import { socialMedia } from '../mock';

export const Footer = () => {
  const iconMap = {
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/logo.png" 
                alt="Forgeit Logo" 
                className="h-10 w-10"
              />
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Forgeit
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Built strong Built online
            </p>
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              We help local businesses build a strong online presence with simple, affordable websites.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              {socialMedia.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      '--hover-color': social.color
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-sm hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#demo" className="text-sm hover:text-orange-500 transition-colors">
                  Demo Websites
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-sm hover:text-orange-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                <a href="mailto:hello@fordge.com" className="hover:text-orange-500 transition-colors">
                  hello@fordge.com
                </a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-4 w-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                <a href="https://wa.me/919876543210" className="hover:text-orange-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2025 Fordge. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
