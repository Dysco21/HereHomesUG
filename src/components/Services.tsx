import React from 'react';
import { Home, Users, Building, Briefcase } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Property Management',
    description: 'Comprehensive management solutions for residential and commercial properties across Uganda.',
    icon: <Building size={36} className="text-primary-blue" />
  }, {
    title: 'Tenant Relations',
    description: 'Professional tenant screening, placement, and ongoing support to ensure satisfaction.',
    icon: <Users size={36} className="text-primary-blue" />
  }, {
    title: 'Buying & Selling',
    description: 'Expert guidance for buying and selling properties with transparent and efficient processes.',
    icon: <Home size={36} className="text-primary-blue" />
  }, {
    title: 'Investment Advisory',
    description: 'Strategic advice on property investments to maximize returns in the East African market.',
    icon: <Briefcase size={36} className="text-primary-blue" />
  }];
  return <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HereHomes provides comprehensive property solutions tailored to meet
            your needs in Uganda's dynamic real estate market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary-green">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;