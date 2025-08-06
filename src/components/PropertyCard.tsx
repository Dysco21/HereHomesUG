import React from 'react';
import { MapPin, Home, Maximize2, BedDouble } from 'lucide-react';
interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
}
const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-blue text-white text-sm font-medium px-3 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
          <p className="text-primary-blue font-bold">{price}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <p className="text-sm">{location}</p>
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <BedDouble size={16} className="text-gray-500 mr-1" />
              <span>{bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Home size={16} className="text-gray-500 mr-1" />
              <span>{bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Maximize2 size={16} className="text-gray-500 mr-1" />
              <span>{area}</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PropertyCard;