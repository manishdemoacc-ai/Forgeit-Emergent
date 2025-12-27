import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Calendar, Stethoscope, Users } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export const ClinicDemo = () => {
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
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">Demo Website</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">HealthCare Clinic</h1>
            <p className="text-xl md:text-2xl mb-6">Your Health, Our Priority</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Services
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
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-blue-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to HealthCare Clinic
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We provide comprehensive healthcare services with experienced doctors and modern facilities. Your health and well-being are our top priorities. Book your appointment online for quick and convenient service.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'General Consultation', icon: Stethoscope, desc: 'Expert medical advice' },
              { name: 'Diagnostic Tests', icon: Calendar, desc: 'Complete lab facilities' },
              { name: 'Specialist Care', icon: Users, desc: 'Experienced specialists' }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 rounded-lg mb-4 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.desc}
                  </p>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Doctors */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Doctors
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {['Dr. Priya Sharma - General Physician', 'Dr. Amit Patel - Specialist'].map((doctor, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  {doctor.split(' ')[1][0]}{doctor.split(' ')[2][0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{doctor}</h3>
                  <p className="text-gray-600 dark:text-gray-400">MBBS, MD</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <Calendar className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-lg mb-6">Call us or book online today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Calendar className="h-5 w-5 mr-2" />
              Book Online
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-100 dark:bg-blue-900/20 border-t-4 border-blue-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 dark:text-gray-300 text-lg">
            <strong>This is a demo website.</strong> Want a website like this for your clinic?{' '}
            <a href="/#contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Contact Fordge
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
