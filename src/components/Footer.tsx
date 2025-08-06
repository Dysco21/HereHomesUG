import React from 'react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-5">
              <img src="/HEREHOMES_BUILD_01.png" alt="HereHomes Logo" className="h-12 w-auto bg-white p-1 rounded" />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted property partner in Uganda, providing comprehensive
              real estate solutions across East Africa.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} HereHomes Company Ltd. All rights
              reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="text-gray-300 hover:text-primary-green transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Tenant Relations
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Buying & Selling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Investment Advisory
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property updates and
              market insights.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary-green text-gray-900" />
              <button type="submit" className="bg-primary-green text-primary-blue px-4 py-2 rounded-r-md hover:bg-green-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;