import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import TenantRelationsPage from './pages/TenantRelationsPage';
import BuyingSellingPage from './pages/BuyingSellingPage';
import InvestmentAdvisoryPage from './pages/InvestmentAdvisoryPage';
import StaffPage from './pages/StaffPage';
export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/property-management" element={<PropertyManagementPage />} />
          <Route path="/services/tenant-relations" element={<PropertyManagementPage />} />
          <Route path="/services/buying-selling" element={<BuyingSellingPage />} />
          <Route path="/services/investment-advisory" element={<InvestmentAdvisoryPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}