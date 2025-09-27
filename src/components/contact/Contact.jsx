import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import FAQ from '../footer/Faq';
import { motion, } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };
   const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}className="text-3xl md:text-6xl  font-medium text-white leading-tight">
            Get in touch <br /> with us!
          </motion.h1>
          <motion.p 
           variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Reach out to us for expert real estate guidance, property inquiries,
            or personalized assistance today.
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-24 md:-mt-28 px-4 z-20 mb-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-300 shadow-xs p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Let&apos;s chat!
          </h2>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-vertical"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                onClick={handleSubmit}
                className="w-full bg-[#057CC0] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Submit Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="mt-5 flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="flex items-center  border border-gray-300 gap-4  rounded-lg px-6 py-4 w-full ">
          <div className="bg-[#D4E8F3] rounded-full p-3">
            <FaEnvelope className="w-6 h-6 text-[#176B9B]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Our Email</p>
            <p className="font-semibold text-gray-700">hello@heavenly.com</p>
          </div>
        </div>

        <div className="flex items-center  border border-gray-300 gap-4  rounded-lg px-6  py-4 w-full ">
          <div className="bg-[#D4E8F3] rounded-full p-3">
            <HiPhone className="w-6 h-6 text-[#176B9B]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-semibold text-gray-700">+91 908069908</p>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>


     <FAQ/> 
    </div>
  );
}