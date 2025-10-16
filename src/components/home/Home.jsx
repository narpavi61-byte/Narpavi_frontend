import React, { useState, useEffect } from "react";
import Bg from "../../assets/homeImg/Hero.png"
import Bg2 from "../../assets/homeImg/Hero2.jpg"
import Bg3 from "../../assets/homeImg/hero3.jpg"
import overlay from "../../assets/homeImg/Overlay.png"
import about1 from "../../assets/homeImg/about1.jpg"
import about2 from "../../assets/homeImg/about2.jpg"
import about3 from "../../assets/homeImg/about3.png"
import about4 from "../../assets/homeImg/about4.png"
import about5 from "../../assets/homeImg/about5.png"
import icon1 from '../../assets/logo/icon1.png'
import icon2 from '../../assets/logo/icon2.png'
import icon3 from '../../assets/logo/icon3.png'
import icon4 from '../../assets/logo/icon4.png'
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiHouseLine } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiWallet } from "react-icons/pi";
import { PiFire } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import FAQ from "../footer/Faq";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {

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



  // Heading blur-to-clear
  const headingVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0.5, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
    exit: { opacity: 0.5, y: -20, transition: { duration: 0.1, ease: "easeIn" } },
  };

  // Content animation: fade + vertical float with slight delay
  const contentVariants = {
    hidden: { opacity: 0.5, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut", delay: 0.1 } },
    exit: { opacity: 0.5, y: -10, transition: { duration: 0.1, ease: "easeIn" } },
  };



  // Hover animation for icons
  const iconHover = { scale: 1.15, transition: { duration: 0.3, ease: "easeOut" } };

  const cardVariants = {
    hidden: {
      opacity: 0.5,
      scale: 1,

    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0.5,
      scale: 0.9,

      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  // home section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [Bg, Bg2, Bg3];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // about section
  const img = [about1, about2, about3, about4, about5];
  const features = [
    {
      icon: icon1,
      title: "Expert Guidance",
      desc: "At Narpavi Properties, our experienced team helps you make the right real estate decisions. From property selection to final registration, we guide you through every step with honest advice and clear communication.",
    },
    {
      icon: icon2,
      title: "Premium Property Selection",
      desc: "We offer a handpicked collection of premium homes, plots, and commercial spaces in prime locations. Every property we list is verified and chosen to give you the best value for your investment.",
    },
    {
      icon: icon3,
      title: "Stress-Free Process",
      desc: "Buying or selling a property can be complicated — but with Narpavi Properties, it’s smooth and worry-free. We handle all the paperwork and coordination so you can focus on your next move with peace of mind.",
    },
    {
      icon: icon4,
      title: "Proven Track Record",
      desc: "Our satisfied clients and successful deals speak for our reliability. Narpavi Properties has built a strong reputation for trust, transparency, and timely service in the real estate market.",
    },
  ];

 const slides = [
  {
    title: "Discover Your Ideal Plot",
    desc: "Explore a wide range of verified plots across prime locations, curated to match your budget and purpose — from residential to investment opportunities.",
    points: [
      "Handpicked plots with complete verification",
      "Prime locations with future growth potential",
      "Detailed insights and transparent pricing",
    ],
    img: "https://ik.imagekit.io/zpswxfgjd/medium-shot-blurry-couple-indoors.jpg?updatedAt=1760589247877", // open land image
  },
  {
    title: "Schedule a Site Visit",
    desc: "Book a convenient site visit and experience your chosen property firsthand. Walk through the land, assess surroundings, and get complete clarity before you buy.",
    points: [
      "Flexible visit scheduling as per your availability",
      "On-site expert guidance and assistance",
      "Clear boundary markings and layout plans",
    ],
    img: "https://ik.imagekit.io/zpswxfgjd/real-estate-agents-visiting-building.jpg ", 
  },
  {
    title: "Hassle-Free Purchase Process",
    desc: "We make land buying simple and secure. From documentation to payment, everything is handled smoothly with complete transparency.",
    points: [
      "Simple documentation and ownership transfer",
      "Secure payment and registration support",
      "Dedicated experts for end-to-end assistance",
    ],
    img: "https://ik.imagekit.io/zpswxfgjd/serious-businessman-businesswoman-signing-contract.jpg?updatedAt=1760589291770", // transaction/land image
  },
  {
    title: "Guaranteed Value & Buyback Assurance",
    desc: "Invest with confidence knowing your property value is backed by trusted developers and a guaranteed buyback option for peace of mind.",
    points: [
      "Buyback assurance for qualified properties",
      "Excellent appreciation and resale potential",
      "Trustworthy developers and clear titles",
    ],
    img: "https://ik.imagekit.io/zpswxfgjd/realtor-agent-giving-key-apartment-new-owner.jpg?updatedAt=1760589281984", // gated layout / premium land image
  },
];

  const steps = [
    { icon: <PiHouseLine />, label: "Discover Plot" },
    { icon: <IoCalendarClearOutline />, label: "Schedule to Visit" },
    { icon: <PiWallet />, label: "Hassle-Free Purchase" },
    { icon: <PiFire />, label: "Buyback Guarantee" },
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
    title: "Singhvi Emerald",
    category: "Plots",
    size: "19,200 SQ.FT",
    img: "https://ik.imagekit.io/zpswxfgjd/projects4.jpg", // open land / plots
  },
  {
    id: 2,
    title: "Chengalpattu Plots",
    category: "Villa Plots",
    size: "1,095 to 1,800 SQ.FT",
    img: "https://ik.imagekit.io/zpswxfgjd/2.jpg", 
  },
  {
    id: 3,
    title: "Hill View Plots & Villas",
    category: "Plots",
    size: "5,000 SQ.FT",
    img: "https://ik.imagekit.io/zpswxfgjd/1.jpg", // hill / nature landscape
  },
  {
    id: 4,
    title: "ECR Plots",
    category: "Plots and Villas",
    size: "8,000 SQ.FT",
    img: "https://ik.imagekit.io/zpswxfgjd/8.jpg", // coastal / villa image
  },
];


  const [items, setItems] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('idle'); // idle, exit, enter

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // Increased from 3000ms to 6000ms for slower auto-advance
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Start exit animation
    setAnimationPhase('exit');

    setTimeout(() => {
      // Move items after exit animation
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      // Start enter animation
      setAnimationPhase('enter');

      setTimeout(() => {
        // Reset to idle state
        setAnimationPhase('idle');
        setIsAnimating(false);
      }, 350); // SPEED CHANGE: 500ms → 350ms to match faster animation duration

    }, 350); // SPEED CHANGE: 500ms → 350ms to match faster exit animation duration
  };

  // Define animation classes with responsive transitions
  const getCardClass = (index) => {
    let baseClass = "";
    let animationClass = "";

    switch (index) {
      case 0:
        baseClass = "z-30 opacity-100";
        break;
      case 1:
        baseClass = "z-20 opacity-90 hidden sm:block";
        break;
      case 2:
        baseClass = "z-10 opacity-80 hidden lg:block";
        break;
      case 3:
        baseClass = "z-0 opacity-70  hidden md:block";
        break;
      default:
        return "hidden";
    }

    // RESPONSIVE ANIMATIONS: Simple fade for mobile, smooth flow for larger screens
    if (animationPhase === 'exit') {
      switch (index) {
        case 0:
          // MOBILE: Simple fade out, MD+: Smooth slide out
          animationClass = "animate-[mobileFadeOut_300ms_ease-out_forwards] md:animate-[slideOutLeft_350ms_linear_forwards]";
          break;
        case 1:
          // MD+: Smooth movement to first position (hidden on mobile)
          animationClass = "animate-[moveToFirst_350ms_linear_forwards]";
          break;
        case 2:
          // MD+: Smooth movement to second position (hidden on mobile)
          animationClass = "animate-[moveToSecond_350ms_linear_forwards]";
          break;
        case 3:
          // DESKTOP ONLY: Smooth movement to third position (hidden on mobile/tablet)
          animationClass = "md:animate-[moveToThird_900ms_linear_forwards]";
          break;
      }
    } else if (animationPhase === 'enter') {
      if (index === 3) {
        // MOBILE: Simple fade in, MD+: Smooth slide in from right
        animationClass = "animate-[mobileFadeIn_350ms_ease-out_forwards] md:animate-[slideInRight_350ms_linear_forwards]";
      }
    }

    return `${baseClass} ${animationClass}`;
  };


  // testimonial card

 const testimonials = [
  {
    id: 1,
    name: "Suresh Kumar",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=50&h=50&fit=crop&crop=face&facepad=2.5",
    rating: 4,
    review: "Narpavi Properties helped me find my dream home. The team was friendly, patient, and guided me through every step. I’m really happy with their service!",
    company: "Narpavi Properties",
    location: "Chengalpattu, Tamil Nadu"
  },
  {
    id: 2,
    name: "Priya Ramesh",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&facepad=2.5",
    rating: 4.5,
    review: "The experience with Narpavi Properties was smooth and transparent. They provided all the details clearly and helped me make a smart investment.",
    company: "Narpavi Properties",
    location: "ECR,Chennai, Tamil Nadu"
  },
  {
    id: 3,
    name: "Arun Raj",
    role: "Apartment Buyer",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=50&h=50&fit=crop&crop=face&facepad=2.5",
    rating: 5,
    review: "Very professional and trustworthy team. They delivered what they promised and made the entire process easy for me and my family.",
    company: "Narpavi Properties",
    location: "Chennai, Tamil Nadu"
  },
  {
    id: 4,
    name: "Divya Lakshmi",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop&crop=face&facepad=2.5",
    rating: 4.5,
    review: "As a first-time home buyer, I was nervous at first, but the Narpavi team made it simple and stress-free. Highly recommend them!",
    company: "Narpavi Properties",
    location: "Villupuram, Tamil Nadu"
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
      <div className="border-t space-y-3 pt-4">
        <div>
          <h5 className="font-semibold text-gray-900 text-sm md:text-base mb-1">{testimonial.company}</h5>
        </div>
        <div className="flex items-center gap-2  text-gray-500">
          <FaMapMarkerAlt className="w-3 h-3" />
          <span className="text-xs md:text-sm">{testimonial.location}</span>
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
    <div className=''>
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-10">
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
            onClick={handleClick}
          >
            Explore Projects
          </motion.button>
        </div>


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
      <section className="container lg:pt-10 mx-auto">
        <div className="mt-15 mb-5 w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* ✅ Blur-to-Clear Heading Animation */}
              <motion.h1
                className="text-3xl md:text-6xl font-medium"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                About Us
              </motion.h1>
            </div>

            {/* ✅ Staggered Animation Container */}
            <motion.div
              className="lg:px-4 flex flex-col gap-5 md:gap-7"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Paragraph animation */}
              <motion.p className="text-base md:text-lg" variants={fadeUp}>
                At Narpavi Properties, we specialize in connecting people with their dream homes and profitable investments. With years of expertise in the real estate industry, we offer trusted guidance in buying, selling, and renting residential and commercial properties. Our commitment to transparency, customer satisfaction, and long-term relationships sets us apart in today’s property market.
              </motion.p>

              {/* Numbers animation */}
              <motion.div
                className="flex flex-wrap gap-4 md:gap-10 justify-between"
                variants={containerVariants}
              >
                {[
                  { value: "+100", label: "Units ready" },
                  { value: "+60k", label: "Customers" },
                  { value: "+70k", label: "Review" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col"
                    variants={fadeUp}
                  >
                    <p className="font-semibold font-inter text-base md:text-2xl">
                      {item.value}
                    </p>
                    <p>{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ✅ Scrolling Images Section (unchanged) */}
        <div className="relative  overflow-x-hidden mt-10">
          <motion.div
            className="flex gap-4 p-6 w-full"
            animate={{ x: ["0%", "-50%"] }} // continuous scrolling effect
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...img, ...img, ...img, ...img].map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`about-${i}`}
                className={`object-cover w-[48%] md:w-[23%] hover:scale-105 transition-transform duration-300 rounded-2xl
              ${i % 4 === 1 || i % 4 === 3
                    ? "h-72 md:h-96"
                    : "h-60 md:h-80"
                  }`}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/* why choose */}
      <section className="container mx-auto">
        <div className="relative py-16 w-[90%] mx-auto bg-white">
          {/* ✅ Blur-to-Clear Heading Animation */}
          <motion.h2
            className="text-center text-3xl lg:text-6xl font-medium mb-12"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Why choose our real <br /> estate expertise
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Images with hover animation */}
            <motion.div
              className="rounded-xl flex items-center lg:pl-0 md:pl-32 pl-10 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-xl bg-cover"
                style={{
                  backgroundImage: "url('https://ik.imagekit.io/zpswxfgjd/choose4_Iu-bjXDNz?updatedAt=1760528531784')",
                }}
                whileHover={{ scale: 1.05 }} // hover zoom
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src=" https://ik.imagekit.io/zpswxfgjd/choose3_KDws8lpoe?updatedAt=1760528342092"
                  alt="Meeting"
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover absolute top-[30%] -right-[40%] rounded-xl"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Right Features with staggered animations */}
            <motion.div
              className="flex flex-col relative mt-20 lg:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 relative pb-10 last:pb-0"
                  variants={fadeUp}
                >
                  {/* Icon + dotted line */}
                  <div className="flex flex-col items-center relative">
                    {/* ✅ Icon with hover animation */}
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white z-10 bg-white shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="w-3/4 h-3/4 object-contain"
                      />
                    </motion.div>

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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* slide section */}
      <section className="bg-[#d9ebf4] py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl md:text-6xl font-medium text-gray-900" initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}>
            The seamless way <br /> to buy property
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center p-[5px] gap-10 md:gap-20">
            {/* Gray dotted line background */}
            <div className="absolute top-6 md:top-7 left-[48px] right-[48px] border-t-2 border-dotted border-gray-400 z-0"></div>

            {/* Solid highlight line (animated slowly) */}
            <div
              className="absolute top-6 md:top-7 left-[48px] h-0.5 bg-sky-500 z-0 transition-all duration-[1500ms] ease-in-out"
              style={{
                width: `calc(${current} / ${steps.length - 1} * (100% - 96px))`,
              }}
            ></div>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative z-10 "
              >
                {/* Icon Circle */}
                <motion.div

                  className={`md:w-14 md:h-14 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md transition-all duration-500
            ${idx <= current ? "bg-sky-500 text-white scale-110" : "bg-white text-gray-800"}`}
                  onClick={() => setCurrent(idx)}
                >
                  <span className=" text-xl md:text-2xl">{step.icon}</span>
                </motion.div>

                {/* Label */}
                <p
                  className={`mt-3 h-14 md:text-sm text-xs font-medium transition-colors duration-500 ${idx <= current ? "text-sky-600" : "text-gray-800"
                    }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>




        {/* Content Box */}
        <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row transition-all duration-500">
          {/* Image */}
          <motion.div
            key={slides[current].img}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:w-1/2 w-full mb-3 lg:mb-0">
            <img
              src={slides[current].img}
              alt={slides[current].title}
              className="lg:h-[450px] h-[300px] lg:w-[450px] w-full mx-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            key={slides[current].title}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:w-1/2 w-full lg:p-8 py-4 flex flex-col justify-center">
            <h3 className="text-3xl font-medium text-gray-900 mb-4">
              {slides[current].title}
            </h3>
            <p className="text-gray-600 text-lg mb-6">{slides[current].desc}</p>

            <div className="space-y-4  mb-6">
              {slides[current].points.map((item, i) => (
                <div key={i} className="flex gap-3 text-gray-800">
                  <span><IoCheckmarkCircle className="w-6 h-6 text-[#057CC0] " /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="p-3 bg-[#057CC0] rounded-full text-white hover:bg-sky-600 transition"
              >
                <HiArrowLeft size={20} />
              </button>
              <button
                onClick={handleNextcard}
                className="p-3 bg-[#057CC0] rounded-full text-white hover:bg-sky-600 transition"
              >
                <HiArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* scroll section */}
      <div className=" bg-gray-50">
        {/* Custom CSS for animations */}
        <style jsx>{`
        /* DESKTOP/TABLET: Smooth conveyor belt transitions */
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          20% {
            transform: translateX(-20%);
            opacity: 0.8;
          }
          40% {
            transform: translateX(-40%);
            opacity: 0.6;
          }
          60% {
            transform: translateX(-60%);
            opacity: 0.4;
          }
          80% {
            transform: translateX(-80%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          20% {
            transform: translateX(80%);
            opacity: 0.2;
          }
          40% {
            transform: translateX(60%);
            opacity: 0.4;
          }
          60% {
            transform: translateX(40%);
            opacity: 0.5;
          }
          80% {
            transform: translateX(20%);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0);
            opacity: 0.7;
          }
        }
        
        @keyframes moveToFirst {
          0% {
            transform: translateX(0);
            opacity: 0.9;
          }
          20% {
            transform: translateX(-5%);
            opacity: 0.93;
          }
          40% {
            transform: translateX(-10%);
            opacity: 0.96;
          }
          60% {
            transform: translateX(-15%);
            opacity: 0.98;
          }
          80% {
            transform: translateX(-20%);
            opacity: 0.99;
          }
          100% {
            transform: translateX(-25%);
            opacity: 1;
          }
        }
        
        @keyframes moveToSecond {
          0% {
            transform: translateX(0);
            opacity: 0.8;
          }
          20% {
            transform: translateX(-5%);
            opacity: 0.83;
          }
          40% {
            transform: translateX(-10%);
            opacity: 0.86;
          }
          60% {
            transform: translateX(-15%);
            opacity: 0.88;
          }
          80% {
            transform: translateX(-20%);
            opacity: 0.89;
          }
          100% {
            transform: translateX(-25%);
            opacity: 0.9;
          }
        }
        
        @keyframes moveToThird {
          0% {
            transform: translateX(0);
            opacity: 0.7;
          }
          20% {
            transform: translateX(-5%);
            opacity: 0.73;
          }
          40% {
            transform: translateX(-10%);
            opacity: 0.76;
          }
          60% {
            transform: translateX(-15%);
            opacity: 0.78;
          }
          80% {
            transform: translateX(-20%);
            opacity: 0.79;
          }
          100% {
            transform: translateX(-25%);
            opacity: 0.8;
          }
        }

        /* MOBILE: Simple fade transitions - NO WHITE SPACE */
        @keyframes mobileFadeOut {
          0% {
            opacity: 1;
           
          }
          100% {
            opacity: 0.5;
          
          }
        }
        
        @keyframes mobileFadeIn {
          0% {
            opacity: 0.5;
           
          }
          100% {
            opacity: 1;
           
          }
        }
      `}</style>

        <div className="container mx-auto py-10 px-4 sm:py-16">
          {/* Heading */}
          <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
            < motion.h1 className="text-3xl  md:text-6xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headingVariants}>
              See Our Newest <br className="hidden sm:block" /> Projects in Action
            </motion.h1>
            <button onClick={handleClick} className="bg-[#057CC0]  transition-all  transform hover:scale-105   text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md  duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base">
              Explore More Projects
              <span className="text-white text-lg"><FaArrowRight /> </span>
            </button>
          </div>

          {/* Carousel - RESPONSIVE LAYOUT */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-4 lg:gap-6 overflow-hidden perspective-[1200px]" style={{ transformStyle: "preserve-3d" }}>
              {items.slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  onClick={handleNext}
                  className={`
                  relative overflow-hidden rounded-2xl shadow-lg cursor-pointer
                  transition-all duration-300 ease-out transform
                  ${getCardClass(index)}
                  w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] 
                  ${index === 3
                      ? 'h-72 sm:h-80 md:h-96 lg:h-[25rem]' // Fourth card has reduced height on large screens
                      : 'h-72 sm:h-80 md:h-96 lg:h-[28rem]' // Other cards maintain full height
                    }
                `}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Image background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url(${project.img})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
                    <div className="mb-2 sm:mb-3">
                      <span className="inline-block bg-black/40 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm">
                        {project.category} | {project.size}
                      </span>
                    </div>
                    <h3
                      className={`font-medium text-white leading-tight ${index === items.length - 1
                        ? "text-xs sm:text-sm mb-1"
                        : "text-lg sm:text-2xl mb-2 sm:mb-4"
                        }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-500 border border-white/20"
            >

            </button>
          </div>
        </div>
      </div>

      <div>

      </div>

      {/* TestimonialCard */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-18"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}>
            <h2 className="text-3xl lg:text-6xl font-medium text-gray-900 mb-2">
              Hear from our
            </h2>
            <h2 className="text-3xl lg:text-6xl font-medium text-gray-900">
              happy customers
            </h2>
          </motion.div>
          {/* Testimonials Container */}
          <div className="relative">
            {/* Show 1 card on small, 2 on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Always show the first card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`testimonial-${currentSlide}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <TestimonialCard testimonial={testimonials[currentSlide]} />
                </motion.div>
              </AnimatePresence>

              {/* Show second card only on medium+ screens */}
              <div className="hidden md:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`testimonial-${(currentSlide + 1) % testimonials.length}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <TestimonialCard testimonial={testimonials[(currentSlide + 1) % testimonials.length]} />
                  </motion.div>
                </AnimatePresence>
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
          <motion.h1 className="text-3xl md:text-6xl font-medium leading-snug max-w-3xl
          "
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}>
            Get in touch – find your dream home today!
          </motion.h1>
          <motion.p className="mt-4 text-gray-200 max-w-xl text-base md:text-lg" variants={fadeUp}
            initial="hidden"
            animate="visible">
            Reach out today to explore top listings, get expert advice, and find your perfect home with ease.
          </motion.p>
          <button onClick={handleClick} className="mt-6 px-6 py-3 bg-[#057CC0]  transition-all duration-300 transform hover:scale-105  flex items-center gap-2 rounded-lg font-medium shadow-lg">
            Explore Property
            <span className="text-white text-lg"><FaArrowRight /> </span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home