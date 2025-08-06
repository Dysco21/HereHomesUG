import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle, TrendingUp, BarChart2, DollarSign, Target, LineChart } from 'lucide-react';
import Contact from '../components/Contact';
const InvestmentAdvisoryPage = () => {
  const services = [{
    icon: <TrendingUp className="h-8 w-8 text-primary-blue" />,
    title: 'Market Analysis',
    description: "In-depth analysis of Uganda's real estate market trends and opportunities."
  }, {
    icon: <BarChart2 className="h-8 w-8 text-primary-blue" />,
    title: 'Investment Strategy',
    description: 'Tailored investment strategies based on your financial goals and risk tolerance.'
  }, {
    icon: <DollarSign className="h-8 w-8 text-primary-blue" />,
    title: 'ROI Forecasting',
    description: 'Detailed projections of potential returns on property investments.'
  }, {
    icon: <Target className="h-8 w-8 text-primary-blue" />,
    title: 'Portfolio Diversification',
    description: 'Guidance on diversifying your real estate investments for optimal returns.'
  }, {
    icon: <LineChart className="h-8 w-8 text-primary-blue" />,
    title: 'Performance Monitoring',
    description: 'Regular assessment of investment performance and market position.'
  }];
  return <main>
      <PageHeader title="Investment Advisory Services" description="Strategic advice on property investments to maximize returns in the East African market." bgImage="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Investment advisory" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-blue rounded-lg hidden md:block z-[-1]"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Investment Guidance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HereHomes provides expert investment advisory services to help
                you make informed decisions in Uganda's dynamic real estate
                market. Our team of specialists combines local market knowledge
                with financial expertise to maximize your investment returns.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a first-time investor or looking to expand your
                property portfolio, we offer tailored strategies to help you
                achieve your financial goals through real estate investments.
              </p>
              <div className="space-y-4">
                {['Data-driven market analysis', 'Personalized investment strategies', 'Risk assessment and mitigation', 'Opportunity identification', 'Portfolio performance tracking'].map((item, index) => <div key={index} className="flex items-start">
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
              Our Advisory Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive investment advisory services to help you
              maximize returns in Uganda's real estate market.
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
              Investment Opportunities in Uganda
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uganda offers diverse real estate investment opportunities across
              various sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            title: 'Residential Properties',
            description: 'High demand for quality housing in urban areas offers strong rental yields.',
            image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }, {
            title: 'Commercial Real Estate',
            description: 'Office spaces and retail properties in strategic locations provide stable returns.',
            image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
          }, {
            title: 'Land Development',
            description: 'Strategic land acquisition and development offers significant appreciation potential.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80'
          }, {
            title: 'Hospitality Sector',
            description: 'Tourism growth creates opportunities in hotels and serviced apartments.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }].map((opportunity, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={opportunity.image} alt={opportunity.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-blue rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Ready to grow your real estate portfolio?
                </h3>
                <p className="text-white/90 mb-8">
                  Schedule a consultation with our investment advisors to
                  discuss your financial goals and explore opportunities in
                  Uganda's real estate market.
                </p>
                <a href="#contact" className="inline-block bg-white text-primary-blue font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Schedule a Consultation
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Investment consultation" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>;
};
export default InvestmentAdvisoryPage;