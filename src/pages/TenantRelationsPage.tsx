import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, Phone, MessageSquare, Clock, Shield, FileText } from 'lucide-react';
import Contact from '../components/Contact';
const TenantRelationsPage = () => {
  const services = [{
    icon: <Phone className="h-8 w-8 text-primary-blue" />,
    title: 'Responsive Communication',
    description: 'Quick response to tenant inquiries and concerns through multiple channels.'
  }, {
    icon: <MessageSquare className="h-8 w-8 text-primary-blue" />,
    title: 'Complaint Resolution',
    description: 'Efficient and fair resolution of tenant issues and disputes.'
  }, {
    icon: <Clock className="h-8 w-8 text-primary-blue" />,
    title: 'Timely Maintenance',
    description: 'Prompt attention to repair requests and regular maintenance needs.'
  }, {
    icon: <Shield className="h-8 w-8 text-primary-blue" />,
    title: 'Lease Enforcement',
    description: 'Fair and consistent enforcement of lease terms and property rules.'
  }, {
    icon: <FileText className="h-8 w-8 text-primary-blue" />,
    title: 'Documentation Management',
    description: 'Proper handling of all tenant-related paperwork and records.'
  }];
  return <main>
      <PageHeader title="Tenant Relations Services" description="Professional tenant screening, placement, and ongoing support to ensure satisfaction." bgImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tenant relations" className="rounded-lg shadow-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-green rounded-lg hidden md:block z-[-1]"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Positive Tenant Relationships
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At HereHomes, we believe that happy tenants lead to successful
                property investments. Our tenant relations services focus on
                creating positive experiences for both tenants and property
                owners.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From thorough tenant screening to responsive maintenance and
                clear communication, we handle every aspect of the tenant
                relationship with professionalism and care.
              </p>
              <div className="space-y-4">
                {['Comprehensive tenant screening', 'Clear lease agreements', 'Responsive maintenance service', 'Regular property inspections', 'Professional rent collection'].map((item, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-green mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Tenant Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tenant relations services that benefit
              both property owners and tenants.
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Tenant Screening Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a thorough screening process to find reliable tenants
              for your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            number: '01',
            title: 'Application',
            description: 'Detailed tenant application with personal and employment information.'
          }, {
            number: '02',
            title: 'Verification',
            description: 'Income and employment verification to ensure financial stability.'
          }, {
            number: '03',
            title: 'Background Check',
            description: 'Criminal background and credit history checks.'
          }, {
            number: '04',
            title: 'References',
            description: 'Previous landlord references and character testimonials.'
          }].map((step, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="text-5xl font-bold text-primary-blue/10 absolute top-2 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>
      <Contact />
    </main>;
};
export default TenantRelationsPage;