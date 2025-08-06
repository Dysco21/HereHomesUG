import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/HEREHOMES_BUILD_01.png" alt="HereHomes Logo" className="h-16 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary-blue font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-primary-blue font-medium flex items-center" onClick={toggleServices}>
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isServicesOpen ? 'block' : 'hidden'} group-hover:block`}>
                <div className="py-1">
                  <Link to="/services/property-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Property Management
                  </Link>
                  <Link to="/services/tenant-relations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tenant Relations
                  </Link>
                  <Link to="/services/buying-selling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Buying & Selling
                  </Link>
                  <Link to="/services/investment-advisory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investment Advisory
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/#about" className="text-gray-800 hover:text-primary-blue font-medium">
              About
            </Link>
            <Link to="/#properties" className="text-gray-800 hover:text-primary-blue font-medium">
              Properties
            </Link>
            <Link to="/staff" className="text-gray-800 hover:text-primary-blue font-medium">
              Our Team
            </Link>
            <Link to="/#contact" className="text-gray-800 hover:text-primary-blue font-medium">
              Contact
            </Link>
            <Link to="/#contact" className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-primary-blue focus:outline-none">
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button onClick={toggleServices} className="w-full text-left px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md flex justify-between items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isServicesOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}></path>
                </svg>
              </button>
              {isServicesOpen && <div className="pl-4">
                  <Link to="/services/property-management" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
                    Property Management
                  </Link>
                  <Link to="/services/tenant-relations" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
                    Tenant Relations
                  </Link>
                  <Link to="/services/buying-selling" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
                    Buying & Selling
                  </Link>
                  <Link to="/services/investment-advisory" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
                    Investment Advisory
                  </Link>
                </div>}
            </div>
            <Link to="/#about" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/#properties" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
              Properties
            </Link>
            <Link to="/staff" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
              Our Team
            </Link>
            <Link to="/#contact" className="block px-3 py-2 text-gray-800 hover:bg-primary-blue hover:text-white rounded-md" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/#contact" className="block px-3 py-2 bg-primary-blue text-white rounded-md" onClick={toggleMenu}>
              Get Started
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;