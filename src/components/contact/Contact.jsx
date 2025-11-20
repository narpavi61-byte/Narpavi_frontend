import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import FAQ from '../footer/Faq';
import { motion } from "framer-motion";

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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh
    const { firstName, lastName, email, phone, message } = formData;

    const text = `📩 *New Property Enquiry*\n\n👤 Name: ${firstName} ${lastName}\n📧 Email: ${email}\n📞 Phone: ${phone}\n💬 Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/919043031050?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
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
            "url('https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-11-12%20at%2023.27.34_36f8ee33.jpg?updatedAt=1763606643049')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-medium text-white leading-tight"
          >
            Get in touch <br /> with us!
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            Reach out to us for expert real estate guidance, property inquiries,
            or personalized assistance today.
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-24 md:-mt-28 px-4 z-20 mb-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-300 shadow-xs p-4 md:p-12"
        >
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
                  required
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
                  required
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
                  required
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
                  required
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-vertical"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#057CC0] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Submit Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="mt-5 flex flex-col w-full lg:flex-row gap-6 justify-center items-center">
                <div className="flex items-center border border-gray-300 gap-4 rounded-lg px-6 py-4 w-full lg:w-1/2">
                  <div className="bg-[#D4E8F3] rounded-full p-3">
                    <FaEnvelope className="w-6 h-6 text-[#176B9B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Our Email</p>
                    <a
                      href="mailto:narpaviproperties@gmail.com"
                      className="font-semibold text-sm md:text-base text-gray-700 hover:underline"
                    >
                      narpaviproperties@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center border border-gray-300 gap-4 rounded-lg px-6 py-4 w-full lg:w-1/2">
                  <div className="bg-[#D4E8F3] rounded-full p-3">
                    <HiPhone className="w-6 h-6 text-[#176B9B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <a href="tel:+919043031050" className="font-semibold text-gray-700 hover:text-blue-600 transition">
                      +91 9043031050
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>



      <FAQ />

      <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-[#057CC0]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-wide">
          Find Us on the Map
        </h2>
        <p className="text-slate-300 mb-8 text-center max-w-xl">
          Visit Narpavi Properties – we're easy to locate and always happy to assist!
        </p>

        {/* Map Wrapper */}
        <div className="
    w-full max-w-4xl 
    rounded-3xl overflow-hidden shadow-2xl relative
    bg-white/10 backdrop-blur-lg border border-white/20
    transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl
  ">
          <iframe
            title="Narpavi Properties map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15559.471190466198!2d80.0813307!3d12.8518142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614e14812405%3A0xff3c8325268e25f4!2sNARPAVI%20PROPERTIES!5e0!3m2!1sen!2sin!4v1763617482927!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>


      </div>
    </div>
  );
}
