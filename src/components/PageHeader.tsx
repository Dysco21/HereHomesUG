import React from 'react';
interface PageHeaderProps {
  title: string;
  description: string;
  bgImage: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  bgImage
}) => {
  return <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/70"></div>
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>;
};
export default PageHeader;