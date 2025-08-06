import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, Search, PieChart, Handshake, FileText, TrendingUp } from 'lucide-react';
import Contact from '../components/Contact';
const BuyingSellingPage = () => {
  const services = [{
    icon: <Search className="h-8 w-8 text-primary-blue" />,
    title: 'Property Search',
    description: 'Targeted search for properties that meet your specific requirements and budget.'
  }, {
    icon: <PieChart className="h-8 w-8 text-primary-blue" />,
    title: 'Market Analysis',
    description: 'In-depth analysis of property values and market trends in Uganda.'
  }, {
    icon: <Handshake className="h-8 w-8 text-primary-blue" />,
    title: 'Negotiation Support',
    description: 'Expert negotiation to secure the best possible terms for your transaction.'
  }, {
    icon: <FileText className="h-8 w-8 text-primary-blue" />,
    title: 'Documentation',
    description: 'Comprehensive handling of all legal documents and paperwork.'
  }, {
    icon: <TrendingUp className="h-8 w-8 text-primary-blue" />,
    title: 'Marketing Strategy',
    description: 'Effective marketing strategies to showcase your property to potential buyers.'
  }];
  return <main>
      <PageHeader title="Buying & Selling Services" description="Expert guidance for buying and selling properties with transparent and efficient processes." bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Real Estate Transaction Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're buying your dream home or selling a property
                investment, HereHomes provides expert guidance through every
                step of the process in Uganda's dynamic real estate market.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team combines local market knowledge with professional
                negotiation skills to ensure you achieve the best possible
                outcome for your real estate transaction.
              </p>
              <div className="space-y-4">
                {['In-depth market knowledge', 'Transparent pricing strategies', 'Effective property marketing', 'Expert negotiation skills', 'Comprehensive documentation support'].map((item, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-green mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="Real estate transaction" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-green rounded-lg hidden md:block z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Transaction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services for both buyers and sellers in
              Uganda's real estate market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-green">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                For Buyers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Property search based on your specific requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Arrangement of property viewings at your convenience
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Detailed property information and market comparisons
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Negotiation support to secure the best purchase price
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Assistance with financing options and mortgage applications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guidance through the entire closing process</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                For Sellers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Comprehensive property valuation and market analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Strategic pricing recommendations to maximize returns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Professional photography and compelling property listings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Targeted marketing to reach qualified potential buyers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Screening of potential buyers to ensure serious offers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Negotiation of favorable terms and conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>;
};
export default BuyingSellingPage;