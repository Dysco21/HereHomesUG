import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, BarChart3, Home, Briefcase, Users, Clock } from 'lucide-react';
import Contact from '../components/Contact';
const PropertyManagementPage = () => {
  const services = [{
    icon: <Home className="h-8 w-8 text-primary-blue" />,
    title: 'Property Maintenance',
    description: 'Regular inspections and maintenance to preserve property value and ensure tenant satisfaction.'
  }, {
    icon: <Users className="h-8 w-8 text-primary-blue" />,
    title: 'Tenant Screening',
    description: 'Comprehensive background checks and verification to find reliable tenants.'
  }, {
    icon: <BarChart3 className="h-8 w-8 text-primary-blue" />,
    title: 'Financial Reporting',
    description: 'Detailed monthly statements and annual reports on property performance.'
  }, {
    icon: <Clock className="h-8 w-8 text-primary-blue" />,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock assistance for urgent property issues and emergencies.'
  }, {
    icon: <Briefcase className="h-8 w-8 text-primary-blue" />,
    title: 'Legal Compliance',
    description: "Ensuring all property operations meet Uganda's real estate regulations and standards."
  }];
  return <main>
      <PageHeader title="Property Management Services" description="Comprehensive management solutions for residential and commercial properties across Uganda." bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Property Management in Uganda
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At HereHomes, we understand that effective property management
                is about more than just collecting rent. Our comprehensive
                approach ensures your property performs at its best while
                maintaining its value over time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With our local expertise and professional team, we handle every
                aspect of property management, allowing you to enjoy the
                benefits of property ownership without the day-to-day
                responsibilities.
              </p>
              <div className="space-y-4">
                {['Maximized rental income', 'Reduced vacancy periods', 'Quality tenant placement', 'Regular property inspections', 'Detailed financial reporting'].map((item, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-green mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Property management" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-blue rounded-lg hidden md:block z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of property management services tailored
              to meet your specific needs.
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
          <div className="bg-primary-blue rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Ready to experience hassle-free property management?
                </h3>
                <p className="text-white/90 mb-8">
                  Let our team of professionals take care of your property while
                  you focus on what matters most to you.
                </p>
                <a href="#contact" className="inline-block bg-white text-primary-blue font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Get Started Today
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Happy property owner" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>;
};
export default PropertyManagementPage;