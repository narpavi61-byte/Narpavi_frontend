// import React, { useState, useEffect } from "react";
// import { FaChevronRight } from "react-icons/fa";

// const Project = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Royal Skyline Premium Hotel",
//       category: "Commercial Building",
//       size: "25,642 SQ.FT",
//       img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
//     },
//     {
//       id: 2,
//       title: "Horizon View Commercial",
//       category: "Apartment",
//       size: "18,200 SQ.FT",
//       img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600",
//     },
//     {
//       id: 3,
//       title: "Crest Mansion Shopping",
//       category: "Resort & Hospitality",
//       size: "25,600 SQ.FT",
//       img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600",
//     },
//     {
//       id: 4,
//       title: "Bowl Skyline Residential",
//       category: "Apartment and Condo",
//       size: "19,200 SQ.FT",
//       img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
//     },
//   ];

//   // ✅ Separate states for small and large screen sliders
//   const [mobileItems, setMobileItems] = useState(projects);
//   const [desktopItems, setDesktopItems] = useState(projects);

//   // ✅ Separate animation flags
//   const [isMobileAnimating, setIsMobileAnimating] = useState(false);
//   const [isDesktopAnimating, setIsDesktopAnimating] = useState(false);

//   // ✅ Mobile: Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleMobileNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [mobileItems]);

//   // ✅ Desktop: Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleDesktopNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [desktopItems]);

//   // ✅ Mobile slider logic
//   const handleMobileNext = () => {
//     if (isMobileAnimating) return;
//     setIsMobileAnimating(true);
//     setTimeout(() => {
//       setMobileItems((prev) => {
//         const [first, ...rest] = prev;
//         return [...rest, first];
//       });
//       setIsMobileAnimating(false);
//     }, 600);
//   };

//   // ✅ Desktop slider logic
//   const handleDesktopNext = () => {
//     if (isDesktopAnimating) return;
//     setIsDesktopAnimating(true);
//     setTimeout(() => {
//       setDesktopItems((prev) => {
//         const [first, ...rest] = prev;
//         return [...rest, first];
//       });
//       setIsDesktopAnimating(false);
//     }, 600);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:py-16">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
//           See Our Newest <br className="hidden sm:block" /> Projects in Action
//         </h1>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base">
//           Explore More Projects
//         </button>
//       </div>

//       {/* ✅ MOBILE SLIDER */}
//       <div className="block md:hidden relative max-w-xs mx-auto overflow-hidden">
//         <div
//           key={mobileItems[0].id}
//           className="relative rounded-2xl shadow-lg w-full h-72 transition-transform duration-700 ease-in-out cursor-pointer"
//           onClick={handleMobileNext}
//           style={{
//             transform: isMobileAnimating ? "translateX(-100%)" : "translateX(0)",
//           }}
//         >
//           {/* Card Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center rounded-2xl"
//             style={{ backgroundImage: `url(${mobileItems[0].img})` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
//           </div>

//           {/* Card Content */}
//           <div className="relative z-10 h-full flex flex-col justify-end p-4">
//             <span className="inline-block bg-black/40 text-white text-xs px-3 py-1 rounded-full mb-2">
//               {mobileItems[0].category} | {mobileItems[0].size}
//             </span>
//             <h3 className="font-bold text-white text-lg leading-tight">
//               {mobileItems[0].title}
//             </h3>
//           </div>
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleMobileNext}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full border border-white/20 transition"
//         >
//           <FaChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       {/* ✅ DESKTOP SLIDER */}
//       <div className="hidden md:block relative">
//         <div className="flex items-center justify-center gap-4 overflow-hidden perspective-[1000px]">
//           {desktopItems.map((project, index) => (
//             <div
//               key={project.id}
//               className={`relative overflow-hidden rounded-2xl w-[30%] lg:w-[22%] h-80 lg:h-[28rem] shadow-lg cursor-pointer transition-all duration-700 ease-in-out ${
//                 index === 0
//                   ? "z-30"
//                   : index === 1
//                   ? "z-20"
//                   : index === 2
//                   ? "z-10"
//                   : "opacity-60 scale-75"
//               }`}
//               onClick={handleDesktopNext}
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform:
//                   isDesktopAnimating && index === 0
//                     ? "rotateY(-90deg) translateX(-100%)"
//                     : index === desktopItems.length - 2
//                     ? "rotateY(0deg) translateX(0)"
//                     : "none",
//               }}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center rounded-2xl"
//                 style={{ backgroundImage: `url(${project.img})` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
//               </div>
//               <div className="relative z-10 h-full flex flex-col justify-end p-4">
//                 <span className="inline-block bg-black/40 text-white text-xs px-3 py-1 rounded-full mb-2">
//                   {project.category} | {project.size}
//                 </span>
//                 <h3 className="font-bold text-white text-xl leading-tight">
//                   {project.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleDesktopNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full border border-white/20 transition"
//         >
//           <FaChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Project;

import React, { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

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
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 leading-snug md:leading-tight">
              Find your perfect <br className="hidden md:block" />
              home with ease
            </h1>
            <p className="text-sm sm:text-base md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Explore listings and find your perfect home with expert guidance and seamless search.
            </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in the most desirable locations.
            </p>
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