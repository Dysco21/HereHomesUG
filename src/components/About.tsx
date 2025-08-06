import React from 'react';
import { CheckCircle } from 'lucide-react';
const About = () => {
  const highlights = ['Over 10 years of experience in Ugandan real estate', 'Professional team of certified property managers', 'Comprehensive portfolio of residential and commercial properties', 'Transparent and client-focused approach'];
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About HereHomes Company Ltd
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              HereHomes Company Ltd is a leading property management company
              based in Uganda, East Africa. Since our establishment, we've been
              dedicated to providing exceptional real estate services with
              integrity, professionalism, and a deep understanding of the local
              market.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to create value for property owners and provide
              quality housing solutions for tenants across Uganda. We combine
              local expertise with international standards to deliver
              outstanding results for all our clients.
            </p>
            <div className="space-y-3">
              {highlights.map((item, index) => <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>)}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="Modern apartment building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-blue rounded-lg hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-green rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;