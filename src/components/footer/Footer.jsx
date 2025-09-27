import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logo from "../../assets/logo/Logo2.png";

const Footer = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const whatsappNumber = '1234567890';
  
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsWhatsAppOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <footer className="bg-gray-50 pt-16 mt-10 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {/* Logo and Tagline */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded">
                 <img src={logo} alt="Company Logo" />
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
                <li><Link to="/project" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link></li>
                <li><Link to="/project" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link></li>
                <li><Link to="/project" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About us</Link></li>
                <li><Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
                <li><Link to="/customers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Customers</Link></li>
                <li><Link to="/brand" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Brand</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/community" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Community</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link to="/dpa" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">DPA</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of service</Link></li>
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
                <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</Link>
                <Link to="/policy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Policy service</Link>
                <Link to="/cookie-policy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Cookie Policy</Link>
                <Link to="/partners" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Partners</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Widget */}
      {/* (unchanged code below) */}
      <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
        {/* Chat Window */}
        {isWhatsAppOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Chat with Narpavi</h3>
                  <p className="text-green-100 text-xs">We'll reply shortly</p>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsAppOpen(false)}
                className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 min-h-[200px]">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm border-l-4 border-green-500">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you today?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Send us a message and we'll get back to you soon!
                </p>
              </div>

              {/* Quick Reply Buttons */}
              <div className="space-y-2 mb-4">
                <button
                  onClick={() => setMessage('I need help with your services')}
                  className="w-full text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700 transition-colors"
                >
                  💼 I need help with your services
                </button>
                <button
                  onClick={() => setMessage('I have a question about pricing')}
                  className="w-full text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700 transition-colors"
                >
                  💰 I have a question about pricing
                </button>
                <button
                  onClick={() => setMessage('I want to know more about your company')}
                  className="w-full text-left bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700 transition-colors"
                >
                  ℹ️ I want to know more about your company
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by WhatsApp
              </p>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer relative"
        >
          <FaWhatsapp className="w-8 h-8" />
          {!isWhatsAppOpen && (
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
