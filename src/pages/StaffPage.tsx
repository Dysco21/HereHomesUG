import React from 'react';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, Linkedin } from 'lucide-react';
import Contact from '../components/Contact';
const StaffPage = () => {
  const team = [{
    name: 'Tamale Matia',
    position: 'General Manager',
    bio: "With over 10 years of experience in Uganda's real estate sector, Tamale leads our team with expertise in property management and market analysis. His strategic vision has helped HereHomes become a trusted name in Uganda's property market.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    contact: {
      phone: '+256-709 904366',
      email: 'tamale@herehomes.co.ug'
    },
    expertise: ['Property Management', 'Market Analysis', 'Investment Strategy', 'Team Leadership']
  }, {
    name: 'Mukiibi Duncan',
    position: 'Field Officer',
    bio: 'Mukiibi specializes in property inspections and tenant relations. His attention to detail ensures that all properties under our management maintain high standards, and his excellent communication skills help build strong relationships with tenants.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    contact: {
      phone: '+256-783 757040',
      email: 'duncan@herehomes.co.ug'
    },
    expertise: ['Property Inspections', 'Tenant Relations', 'Maintenance Coordination']
  }, {
    name: 'Kizza Fred',
    position: 'Field Officer',
    bio: "Fred brings extensive knowledge of Kampala's real estate landscape to our team. He excels at property evaluations and market research, helping clients make informed decisions about their property investments across Uganda.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    contact: {
      phone: '+256-709 904366',
      email: 'fred@herehomes.co.ug'
    },
    expertise: ['Property Evaluation', 'Market Research', 'Client Relations']
  }];
  return <main>
      <PageHeader title="Our Team" description="Meet the dedicated professionals behind HereHomes' success in Uganda's property market." bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing
              exceptional property services across Uganda.
            </p>
          </div>
          <div className="space-y-20">
            {team.map((member, index) => <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="md:w-1/3">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="rounded-lg shadow-lg w-full h-auto" />
                    <div className={`absolute ${index % 2 === 1 ? '-top-4 -left-4' : '-top-4 -right-4'} w-24 h-24 rounded-lg ${index === 0 ? 'bg-primary-blue' : 'bg-primary-green'} hidden md:block z-[-1]`}></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-medium text-primary-blue mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => <span key={idx} className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-primary-blue/10 text-primary-blue' : 'bg-primary-green/10 text-primary-blue'}`}>
                          {skill}
                        </span>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone size={18} className="text-gray-500 mr-2" />
                        <span>{member.contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={18} className="text-gray-500 mr-2" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Linkedin size={18} className="text-gray-500 mr-2" />
                        <span>LinkedIn Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our team in delivering exceptional
              service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            title: 'Integrity',
            description: 'We operate with transparency and honesty in all our dealings with clients and partners.'
          }, {
            title: 'Excellence',
            description: "We are committed to delivering the highest standard of service in Uganda's property market."
          }, {
            title: 'Innovation',
            description: 'We continuously seek new solutions to meet the evolving needs of our clients.'
          }, {
            title: 'Client Focus',
            description: 'We prioritize understanding and meeting the unique needs of each client we serve.'
          }].map((value, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      <Contact />
    </main>;
};
export default StaffPage;