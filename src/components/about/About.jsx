import React, { useState, useEffect } from 'react';
import { FaPlay, FaHome, FaBullseye, FaEye, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FAQ from '../footer/Faq';
import { motion, } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project"); // Redirect to Project page
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Random property images for banner rotation
  const bannerImages = [
    'https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-11-12%20at%2023.27.34_36f8ee33.jpg?updatedAt=1763606643049',
    'https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-11-12%20at%2023.27.33_3a06d5fe.jpg?updatedAt=1763606642543',
    'https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-11-12%20at%2023.27.34_625cc7ce.jpg?updatedAt=1763606642465',

  ];

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const agents = [
    {
      name: 'Naresh kumar',
      role: 'Software engineer',
      image: 'https://ik.imagekit.io/zpswxfgjd/IMG-20251107-WA0001.jpg?updatedAt=1762532738928',
      socials: ['facebook', 'twitter']
    },
    {
      name: 'Meena',
      role: 'Property Manager',
      image: 'https://ik.imagekit.io/zpswxfgjd/IMG-20251101-WA0008.jpg?updatedAt=1762532738938',
      socials: ['facebook', 'linkedin']
    },
    {
      name: 'selvi',
      role: 'Real Estate Broker',
      image: 'https://ik.imagekit.io/zpswxfgjd/IMG-20251104-WA0067.jpg?updatedAt=1762532739222',
      socials: ['facebook', 'linkedin']
    }
  ];

  const testimonials = [
    {
      name: 'Rohit Kumar',
      role: 'Villa Plot Buyer',
      image: 'https://ik.imagekit.io/zpswxfgjd/IMG-20251107-WA0001.jpg?updatedAt=1762532738928',
      testimonial:
        'Buying my villa plot through Narpavi Properties was an amazing experience. The team was supportive, honest, and made the entire process completely hassle-free. I’m excited to start building my dream villa soon!'
    },
    {
      name: 'Suresh Chandran',
      role: 'Business Owner & Investor',
      image: 'https://ik.imagekit.io/zpswxfgjd/IMG-20251101-WA0008.jpg?updatedAt=1762532738938',
      testimonial:
        'Narpavi Properties helped me find a premium plot in a great location for both personal use and investment. Their professionalism and clarity throughout the process truly stood out.'
    },
    {
      name: 'Meena',
      role: 'Land Investor',
      image: 'https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-12-07%20at%2023.34.23_ed0c619d.jpg',
      testimonial:
        'Exceptional service and expert guidance! Narpavi Properties made purchasing my villa plot effortless and provided valuable insights that helped me make a confident investment.'
    }
  ];



  const getSocialIcon = (social) => {
    switch (social) {
      case 'facebook': return <FaFacebookF className="w-4 h-4" />;
      case 'twitter': return <FaTwitter className="w-4 h-4" />;
      case 'linkedin': return <FaLinkedinIn className="w-4 h-4" />;
      default: return null;
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
        {/* Background Images with Animation */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center transform transition-transform duration-[20000ms] hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
                animation: `slowPan 20s ease-in-out infinite alternate`
              }}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-3 sm:px-4">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4 sm:mb-6 leading-snug md:leading-tight">
              Experience a Seamless Journey<br className="hidden md:block" />
              to Your Dream Villa Plot
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Welcome to Narpavi Properties, where premium villa plots meet peace of mind. Discover a seamless way to own land in prime locations with trust and transparency

            </motion.p>
            <button onClick={handleClick} className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-800 font-semibold rounded-xl cursor-pointer">
              Explore Projects
            </button>
          </div>
        </div>

        {/* Custom CSS for animation */}
        <style jsx>{`
    @keyframes slowPan {
      0% { transform: scale(1) translateX(0); }
      100% { transform: scale(1.1) translateX(-2%); }
    }
  `}</style>
      </div>


      {/* Leading the Way Section */}
      <div className="lg:py-18 py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-medium text-gray-900 mb-12 leading-tight">
                Leading the Way in<br />
                Property Excellence
              </motion.h2>

              {/* Experiential Living */}
              <div className="mb-10">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#057CC0] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaHome className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">
                      Experiential Living
                    </h3>
                    <motion.p className="text-gray-600 leading-relaxed">
                      At Narpavi Properties, we believe your home begins with the land you choose.
                      Our premium villa plots are thoughtfully located to offer a perfect blend of
                      comfort, connectivity, and lifestyle — turning your dream of luxurious living into reality.
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* Smart Investment */}
              <div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start">
                  <div className="w-12 h-12 bg-[#057CC0] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPlay className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Smart Investment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Investing in premium villa plots with Narpavi Properties is not just about owning land —
                      it’s about securing a high-value asset for your future. Our strategically located plots
                      promise strong appreciation, ensuring your investment grows with time.
                    </p>
                  </div>

                </motion.div>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://ik.imagekit.io/zpswxfgjd/beautiful-landscape-with-red-pin.jpg?updatedAt=1762318039869"
                alt="Modern Property"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="md:py-16 py-10 pr-4 md:pl-10 pl-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} className="grid md:grid-cols-3 text-center md:text-left gap-8">
            <div className='border-b border-[#C4C7D7] pb-10 mr-2'>
              <h3 className=" text-2xl md:text-5xl font-medium text-gray-900 mb-2">+15</h3>
              <p className="text-gray-600 md:text-lg">Projects</p>
            </div>
            <div className='border-b border-[#C4C7D7] pb-10 mr-2'>
              <h3 className=" text-2xl md:text-5xl font-medium text-gray-900 mb-2">+2K</h3>
              <p className="text-gray-600 md:text-lg">Customers</p>
            </div>
            <div className='border-b border-[#C4C7D7] pb-10 mr-2'>
              <h3 className=" text-2xl md:text-5xl font-medium text-gray-900 mb-2">+5K</h3>
              <p className="text-gray-600 md:text-lg">Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="md:py-20 py-14 px-4 bg-[#EEF9FF]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }} className="text-3xl md:text-6xl font-medium text-gray-900 mb-4">
            Our Mission is Driven by a Clear Set<br />
            of Guiding Values
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Our Mission */}
          <div

            className="text-center p-8 rounded-xl" style={{ backgroundColor: '#D4E8F3' }}>
            <div className="w-16 h-16 bg-[#176B9B] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBullseye className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At Narpavi Properties, our mission is to make land ownership simple, reliable,
              and rewarding for everyone. We strive to help people invest confidently in premium
              villa plots through expert guidance, trusted service, and a commitment to long-term value.
            </p>
          </div>

          {/* Our Vision */}
          <div
            className="text-center p-8 rounded-xl" style={{ backgroundColor: '#D4E8F3' }}>
            <div className="w-16 h-16 bg-[#176B9B] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEye className="text-white w-8 h-8" />
            </div>
            <motion.h3
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl font-medium text-gray-900 mb-4"
            >
              Our Vision
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              To redefine real estate by creating exceptional villa plot communities
              that inspire modern living and lasting value. Narpavi Properties envisions
              becoming a trusted name known for quality, innovation, and customer satisfaction
              in every property we deliver.
            </motion.p>

          </div>
        </motion.div>
      </div>



      {/* Our Expert Agents Section */}
      {/* <div className="md:py-18 py-14 px-4 bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-6xl font-medium text-gray-900">Our Expert Agents</motion.h2>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              View All Agents
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="py-6 px-2 flex justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">{agent.name}</h3>
                    <p className="text-gray-600 mb-4">{agent.role}</p>
                  </div>
                  <div className="flex space-x-3">
                    {agent.socials.map((social, socialIndex) => (
                      <button
                        key={socialIndex}
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                      >
                        {getSocialIcon(social)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div> */}


      {/* Testimonials Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }} className="text-3xl  md:text-6xl font-medium text-gray-900 text-center md:text-left mb-6 md:mb-0">
              Trusted Real Estate Clients
            </motion.h2>

            <div className="flex justify-center md:justify-end space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-16 bg-[#EEF9FF] rounded-2xl items-center">
            {/* Left - Image */}
            <div className="relative flex ">
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].name}
                className="w-full md:w-[100%] h-64 md:h-[30rem]   object-cover rounded-2xl lg:rounded-bl-xl lg:rounded-tl-xl"
              />
            </div>

            {/* Right - Testimonial Content */}
            <div className="text-center lg:text-left py-5 md:py-10 px-5 flex flex-col justify-between h-full">
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentTestimonialIndex].testimonial}"
              </blockquote>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonialIndex].name}
                </h4>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {testimonials[currentTestimonialIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <FAQ />


    </div>
  );
}
