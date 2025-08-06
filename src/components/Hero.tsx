import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/70"></div>
        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Modern building" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Trusted Property Partner in Uganda
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Professional property management, tenant relations, and real estate
            services across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#properties" className="bg-primary-green text-primary-blue font-medium px-6 py-3 rounded-md hover:bg-white transition-colors inline-flex items-center justify-center">
              View Properties
            </a>
            <a href="#contact" className="bg-white text-primary-blue font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;