import React, { useState, useEffect } from "react";
import Bg from "../../assets/homeImg/Hero.png"
import overlay from "../../assets/homeImg/Overlay.png"
import about1 from "../../assets/homeImg/about1.png"
import about2 from "../../assets/homeImg/about2.png"
import about3 from "../../assets/homeImg/about3.png"
import about4 from "../../assets/homeImg/about4.png"
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaUserTie, FaBuilding, FaHandsHelping, FaMedal, } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi"

import {
  FaHome,
  FaCalendarAlt,
  FaCreditCard,
  FaFire,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "../footer/Faq";
import Project from "../project/Project";

const Home = () => {

  // home section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [Bg, about1, Bg];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // about section
  const img = [about1, about2, about3, about4];
  const features = [
    {
      icon: <FaUserTie size={20} />,
      title: "Expert Guidance",
      desc: "Find homes by filtering for bidding wars and recent market price updates to make informed buying decisions easily.",
    },
    {
      icon: <FaBuilding size={20} />,
      title: "Premium Property Selection",
      desc: "Find homes by filtering for bidding wars and recent market price updates to make informed buying decisions easily.",
    },
    {
      icon: <FaHandsHelping size={20} />,
      title: "Stress-Free Process",
      desc: "Find homes by filtering for bidding wars and recent market price updates to make informed buying decisions easily.",
    },
    {
      icon: <FaMedal size={20} />,
      title: "Proven Track Record",
      desc: "Find homes by filtering for bidding wars and recent market price updates to make informed buying decisions easily.",
    },
  ];

  const slides = [
    {
      title: "Find the perfect house",
      desc: "Find your perfect home with personalized searches, expert guidance, and seamless viewings—all tailored to your dream lifestyle and budget.",
      points: [
        "Handpicked homes matching your needs",
        "Expert guidance every step of the buying journey",
        "Seamless process from search to closing",
      ],
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
      title: "Your dream apartment",
      desc: "Explore modern apartments in prime locations with world-class amenities, curated for comfort and convenience.",
      points: [
        "Prime city locations",
        "Modern interiors and layouts",
        "Exclusive community features",
      ],
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      title: "Luxury villas for you",
      desc: "Indulge in spacious villas designed for elegance, privacy, and luxury living with seamless purchase options.",
      points: [
        "Spacious villas with private gardens",
        "Secure and peaceful neighborhoods",
        "Premium lifestyle and comfort",
      ],
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    },
    {
      title: "Luxury villas for you",
      desc: "Indulge in spacious villas designed for elegance, privacy, and luxury living with seamless purchase options.",
      points: [
        "Spacious villas with private gardens",
        "Secure and peaceful neighborhoods",
        "Premium lifestyle and comfort",
      ],
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    },
  ];
  const steps = [
    { icon: <FaHome />, label: "Discover House" },
    { icon: <FaCalendarAlt />, label: "Schedule to Visit" },
    { icon: <FaCreditCard />, label: "Hassle-Free Purchase" },
    { icon: <FaFire />, label: "Buyback Guarantee" },
  ];

  const [current, setCurrent] = useState(0);

  const handleNextcard = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const projects = [
    {
      id: 1,
      title: "Royal Skyline Premium Hotel",
      category: "Commercial Building",
      size: "25,642 SQ.FT",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600", // replace with your image
    },
    {
      id: 2,
      title: "Horizon View Commercial",
      category: "Apartment",
      size: "18,200 SQ.FT",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600",
    },
    {
      id: 3,
      title: "Crest Mansion Shopping",
      category: "Resort & Hospitality",
      size: "25,600 SQ.FT",
      img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600",
    },
    {
      id: 4,
      title: "Bowl Skyline Residential",
      category: "Apartment and Condo",
      size: "19,200 SQ.FT",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    },
  ];

const [items, setItems] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    }, 700); // Match duration with CSS transition
  };

  const getCardClasses = (index) => {
    const base =
      "relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-700 ease-in-out";
    
    switch (index) {
      case 0:
        return `${base} w-80 h-96 scale-100 z-30 rotate-y-0`;
      case 1:
        return `${base} w-80 h-96 scale-100 z-20`;
      case 2:
        return `${base} w-80 h-96 scale-100 z-10`;
      case 3:
        return `${base} w-40 h-64 opacity-60 scale-75 z-0 rotate-y-90`;
      default:
        return base;
    }
  };

  // testimonial card

  const testimonials = [
    {
      id: 1,
      name: "Valentine Alsgnar",
      role: "CTO Plumbing HVAC Guest",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=50&h=50&fit=crop&crop=face&facepad=2.5",
      rating: 4.5,
      review: "It has been an absolute pleaseworking with Havenly. The team went aboveyond to be us execute on our vision always ensured that we were satisfied.",
      company: "The Grand Haven",
      location: "1200 Queen Street West - Toronto"
    },
    {
      id: 2,
      name: "Valentine ",
      role: "CTO Plumbing HVAC Guest",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&facepad=2.5",
      rating: 4.5,
      review: "It has been an absolute pleaseworking with Havenly. The team went aboveyond to be us execute on our vision always ensured that we were satisfied.",
      company: "The Grand Haven",
      location: "1200 Queen Street West - Toronto"
    },
    {
      id: 3,
      name: "V Alsgnar",
      role: "CTO Plumbing HVAC Guest",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&facepad=2.5",
      rating: 4.5,
      review: "It has been an absolute pleaseworking with Havenly. The team went aboveyond to be us execute on our vision always ensured that we were satisfied.",
      company: "The Grand Haven",
      location: "1200 Queen Street West - Toronto"
    },
    {
      id: 3,
      name: "gnar",
      role: "CTO Plumbing HVAC Guest",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&facepad=2.5",
      rating: 4.5,
      review: "It has been an absolute pleaseworking with Havenly. The team went aboveyond to be us execute on our vision always ensured that we were satisfied.",
      company: "The Grand Haven",
      location: "1200 Queen Street West - Toronto"
    }

  ];
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="w-4 h-4 text-green-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 text-green-500" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaStar key={`empty-${index}`} className="w-4 h-4 text-gray-200" />
        ))}
      </div>
    );
  };


  const [currentSlide, setCurrentSlide] = useState(0);
  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-md mx-auto">
      {/* Header with profile and rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
            <p className="text-xs text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review text */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
        "{testimonial.review}"
      </blockquote>

      {/* Company info */}
      <div className="border-t pt-4">
        <h5 className="font-semibold text-gray-900 text-sm mb-1">{testimonial.company}</h5>
        <div className="flex items-center gap-1 text-gray-500">
          <FaMapMarkerAlt className="w-3 h-3" />
          <span className="text-xs">{testimonial.location}</span>
        </div>
      </div>
    </div>
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const images = [about1, about2, about3, about4];
  const [index, setIndex] = useState(0);
  const total = images.length;

  // Auto-slide continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);



  // Get 4 visible images based on current index
  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(images[(index + i) % total]);
  }

  return (
    <div className='container mx-auto'>
      {/* hero section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images with Carousel */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center transform transition-transform duration-[20000ms] hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
                animation: `slowPan 20s ease-in-out infinite alternate`,
              }}
            />
          </div>
        ))}

        {/* Overlay Image at the Bottom */}
        <div className="absolute bottom-0 w-full">
          <img src={overlay} alt="overlay" className="w-full" />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-6xl text-white"
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Building Dreams, <br /> Creating Landmarks
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-white max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Premium real estate projects designed for a better tomorrow.
          </motion.p>

          {/* Button */}
          <motion.button
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-800 font-semibold rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            Explore Projects
          </motion.button>
        </div>

        {/* Custom CSS for slow pan */}
        <style jsx>{`
        @keyframes slowPan {
          0% {
            transform: scale(1) translateX(0);
          }
          100% {
            transform: scale(1.1) translateX(-2%);
          }
        }
      `}</style>
      </section>
      {/* About section */}
  <section className=''>
        <div className='mt-15 w-[90%] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h1 className='text-3xl md:text-4xl font-medium'>About Us</h1>
            </div>
            <div className='lg:px-4 flex flex-col gap-5 md:gap-7'>
              <p className='text-base md:text-lg'>
                Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.
              </p>
              <div className='flex flex-wrap gap-4 md:gap-10 justify-between'>
                <div className='flex flex-col'>
                  <p className='font-semibold font-inter text-base md:text-2xl'>+100</p>
                  <p>Units ready</p>
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold font-inter text-base md:text-2xl'>+60k</p>
                  <p>Customers</p>
                </div>
                <div className='flex flex-col'>
                  <p className='font-semibold font-inter text-base md:text-2xl'>+70k</p>
                  <p>Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>

     <div className="relative w-full overflow-x-hidden  mt-10">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }} // scroll half width for perfect loop
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {/* ✅ Duplicate 4 times to prevent any gap */}
        {[...img, ...img, ...img, ...img].map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`about-${i}`}
            className={`object-cover w-full sm:w-[48%] md:w-[23%] hover:scale-105 transition-transform duration-300 
              ${i % 4 === 1 || i % 4 === 3 ? "h-72 sm:h-96 md:h-96" : "h-60 sm:h-80 md:h-80"}`}
          />
        ))}
      </motion.div>
    </div>
      </section>
     

      <section className="relative py-16 w-[90%] mx-auto bg-white mt-10">

        <h2 className="text-center text-3xl lg:text-6xl  font-semibold mb-12">
          Why choose our real <br /> estate expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Images */}

          <div className="  rounded-xl flex items-center justify-center lg:justify-start w-full   ">
            <div className='relative w-[200px] h-[200px]  lg:w-[300px] lg:h-[300px] rounded-xl
           ' style={{ backgroundImage: `url(${Bg})` }}
            >
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"
                alt="Meeting"
                className=" w-[200px] h-[200px]  lg:w-[300px] lg:h-[300px] object-cover  absolute top-[30%] -right-[40%]  rounded-xl"
              />
            </div>
          </div>
          {/* Right Features */}
          <div className="flex flex-col relative mt-20 lg:mt-0">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-4 relative pb-10 last:pb-0">
                {/* Icon + dotted line */}
                <div className="flex flex-col items-center relative">
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white z-10">
                    {f.icon}
                  </div>
                  {/* Line (hidden for last item) */}
                  {idx !== features.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-full border-l-2 border-dotted border-gray-300"></div>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* slide section */}
      <section className="bg-[#d9ebf4] py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
            The seamless way <br /> to buy property
          </h2>
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center gap-10 md:gap-20">
            {/* Gray dotted line background */}
            <div className="absolute top-7 left-[48px] right-[48px] border-t-2 border-dotted border-gray-400 z-0"></div>

            {/* Solid highlight line (animated slowly) */}
            <div
              className="absolute top-7 left-[48px] h-0.5 bg-sky-500 z-0 transition-all duration-[1500ms] ease-in-out"
              style={{
                width: `calc(${current} / ${steps.length - 1} * (100% - 96px))`,
              }}
            ></div>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-500
            ${idx <= current ? "bg-sky-500 text-white scale-110" : "bg-white text-gray-800"}`}
                >
                  {step.icon}
                </div>

                {/* Label */}
                <p
                  className={`mt-3 h-14 text-sm font-medium transition-colors duration-500 ${idx <= current ? "text-sky-600" : "text-gray-800"
                    }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>




        {/* Content Box */}
        <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-500">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="h-[450px] w-[450px] object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 lg:p-8 py-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {slides[current].title}
            </h3>
            <p className="text-gray-600 mb-6">{slides[current].desc}</p>

            <ul className="space-y-4 mb-6">
              {slides[current].points.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <FaCheckCircle className="w-5 h-5 text-sky-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="p-3 bg-sky-500 rounded-full text-white hover:bg-sky-600 transition"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextcard}
                className="p-3 bg-sky-500 rounded-full text-white hover:bg-sky-600 transition"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* scroll section */}
 <div className="min-h-screen bg-gray-50 py-10 px-4 sm:py-16">
  <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
      See Our Newest <br className="hidden sm:block" /> Projects in Action
    </h1>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base">
      Explore More Projects <FiChevronRight className="w-4 h-4" />
    </button>
  </div>

  <div className="relative">
    <div className="flex items-center justify-center gap-3 sm:gap-6 overflow-hidden perspective-[1000px]">
      {items.map((project, index) => (
        <div
          key={project.id}
          className={`${getCardClasses(index)} w-[70%] sm:w-[40%] md:w-[25%] h-64 sm:h-80 md:h-[28rem] rounded-2xl shadow-lg relative cursor-pointer`}
          onClick={handleNext}
          style={{
            transition: "transform 0.7s ease-in-out, opacity 0.7s ease-in-out",
            transformStyle: "preserve-3d",
            transform:
              isAnimating && index === 0
                ? "rotateY(-90deg) translateX(-100%)"
                : index === items.length - 1
                ? "rotateY(0deg) translateX(0)"
                : "none",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
            <div className="mb-2 sm:mb-3">
              <span className="inline-block bg-black/40 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm">
                {project.category} | {project.size}
              </span>
            </div>
            <h3
              className={`font-bold text-white leading-tight ${
                index === items.length - 1
                  ? "text-xs sm:text-sm mb-1"
                  : "text-lg sm:text-2xl mb-2 sm:mb-4"
              }`}
            >
              {project.title}
            </h3>
          </div>

          <div className="absolute inset-0 bg-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      ))}
    </div>

    <button
      onClick={handleNext}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20"
    >
      <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  </div>
</div>
<div>

</div>

      {/* TestimonialCard */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hear from our
            </h2>
            <h2 className="text-3xl font-bold text-gray-900">
              happy customers
            </h2>
          </div>

          {/* Testimonials Container */}
          {/* Testimonials Container */}
<div className="relative">
  {/* Show 1 card on small, 2 on md+ */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {/* Always show the first card */}
    <TestimonialCard testimonial={testimonials[currentSlide]} />

    {/* Show second card only on medium+ screens */}
    <div className="hidden md:block">
      <TestimonialCard testimonial={testimonials[(currentSlide + 1) % testimonials.length]} />
    </div>
  </div>

  {/* Navigation Arrows */}
  <div className="flex justify-center gap-4 mt-8">
    <button
      onClick={prevSlide}
      className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
    >
      <FaChevronLeft className="w-5 h-5 text-gray-600" />
    </button>
    <button
      onClick={nextSlide}
      className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
    >
      <FaChevronRight className="w-5 h-5 text-gray-600" />
    </button>
  </div>
</div>

        </div>
      </div>


      <FAQ />
      <section className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden mt-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')"
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug max-w-3xl">
            Get in touch – find your dream home today!
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl text-sm md:text-base">
            Reach out today to explore top listings, get expert advice, and find your perfect home with ease.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium shadow-lg">
            Explore Property →
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home