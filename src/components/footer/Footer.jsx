import React from 'react';
import logo from "../../assets/logo/Logo.png"
import logo2 from "../../assets/logo/Logo2.png"

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 mt-10 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20   flex items-center justify-center rounded">
                <img src={logo2} alt="" />
              </div>
             
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>More Comfortable.</p>
              <p>More Classy.</p>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Customers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Brand</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">DPA</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Copyright */}
            <div className="text-xs text-gray-500 mb-4 md:mb-0">
              © 2025 Narpavi. All rights reserved
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Policy service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Cookie Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;