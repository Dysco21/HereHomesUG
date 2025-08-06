import React from 'react';
import { Star } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: 'Sarah Namukasa',
    role: 'Property Owner',
    content: 'HereHomes has managed my rental properties for over 5 years. Their professionalism and attention to detail have made property ownership stress-free. I highly recommend their services to any property owner in Uganda.',
    rating: 5
  }, {
    id: 2,
    name: 'David Ochieng',
    role: 'Tenant',
    content: 'Finding a quality apartment in Kampala was challenging until I discovered HereHomes. Their team was helpful throughout the entire process, and they continue to provide excellent support whenever needed.',
    rating: 5
  }, {
    id: 3,
    name: 'Elizabeth Mutesi',
    role: 'Real Estate Investor',
    content: "As an investor in Uganda's property market, I rely on HereHomes for their market insights and property management expertise. They've helped me maximize returns on multiple investments across Kampala.",
    rating: 5
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with HereHomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-green">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;