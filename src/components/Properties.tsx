import React from 'react';
import PropertyCard from './PropertyCard';
const Properties = () => {
  const properties = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Modern Villa in Kampala',
    price: '$450,000',
    location: 'Kololo, Kampala',
    bedrooms: 4,
    bathrooms: 3,
    area: '350 m²',
    type: 'For Sale'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Luxury Apartment',
    price: '$1,200/mo',
    location: 'Nakasero, Kampala',
    bedrooms: 2,
    bathrooms: 2,
    area: '120 m²',
    type: 'For Rent'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Commercial Building',
    price: '$850,000',
    location: 'Entebbe Road, Kampala',
    bedrooms: 0,
    bathrooms: 4,
    area: '500 m²',
    type: 'Commercial'
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    title: 'Family Home with Garden',
    price: '$320,000',
    location: 'Muyenga, Kampala',
    bedrooms: 3,
    bathrooms: 2,
    area: '250 m²',
    type: 'For Sale'
  }];
  return <section id="properties" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our selection of premium properties across Uganda, from
            residential homes to commercial spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map(property => <PropertyCard key={property.id} image={property.image} title={property.title} price={property.price} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} area={property.area} type={property.type} />)}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-primary-blue text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            View All Properties
          </a>
        </div>
      </div>
    </section>;
};
export default Properties;