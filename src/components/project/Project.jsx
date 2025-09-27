

import React, { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { motion, } from "framer-motion";

const PropertyCard = ({ 
  image, 
  price, 
  title, 
  address, 
  bedrooms, 
  bathrooms, 
  area 
}) => (
  <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-sm border border-gray-200">
    <div className="w-full  overflow-hidden p-5">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[350px] object-cover"
      />
    </div>
    
    <div className="p-5 space-y-3 pb-10">
      <div className="text-2xl font-bold text-gray-900">
        {price}
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-lg text-gray-600">
          {address}
        </p>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 ">
        <div className="flex items-center gap-1">
          <FaBed size={16} />
          <span>{bedrooms} bd </span>
        </div>
        <div className="flex items-center gap-1 px-2 border-l">
          <FaBath size={16} />
          <span>{bathrooms} bd </span>
        </div>
        <div className="flex items-center gap-1 px-2 border-l">
          <FaRulerCombined size={16} />
          <span>{area}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Project() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Random property images for banner rotation
  const bannerImages = [
    'https://static.vecteezy.com/system/resources/previews/017/508/529/non_2x/construction-real-estate-contractor-concept-residential-house-building-drawings-free-photo.jpg',
    'https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg',
    'https://static1.squarespace.com/static/5491b846e4b07a0c1fb4d840/t/66eb34ce16f23a1c722839ba/1726690510472/Denver+custom+home+opt.jpg?format=1500w',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
  ];

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center",
      price: "$786,000",
      title: "The Grand Haven",
      address: "1220C Queen Street west - Toronto,ON",
      bedrooms: 3,
      bathrooms: 3,
      area: "760 m"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center",
      price: "$786,000",
      title: "The Grand Haven",
      address: "1220C Queen Street west - Toronto,ON",
      bedrooms: 3,
      bathrooms: 3,
      area: "760 m"
    }
  ];
   const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className=" bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
        {/* Background Images with Animation */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
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
          <div className="max-w-4xl">
            <motion.h1
             initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}  className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 leading-snug md:leading-tight">
              Find your perfect <br className="hidden md:block" />
              home with ease
            </motion.h1>
            <motion.p
            variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} className="text-sm sm:text-base md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Explore listings and find your perfect home with expert guidance and seamless search.
            </motion.p>
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

      {/* Property Listings Section */}
      <div className=" container pt-10  mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-12">
            <motion.h2
             initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </motion.h2>
            <motion.p 
            variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in the most desirable locations.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                price={property.price}
                title={property.title}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}