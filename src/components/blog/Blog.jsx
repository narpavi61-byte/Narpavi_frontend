import React, { useRef, useState, useEffect } from "react";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const videoRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const hideTimer = useRef(null);

  // Auto-hide after 2 seconds
  const startAutoHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);

    hideTimer.current = setTimeout(() => {
      if (isPlaying) setShowButton(false);
    }, 2000);
  };

  // Show button when mouse moves
  const handleMouseMove = () => {
    if (isPlaying) {
      setShowButton(true);
      startAutoHide();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("mousemove", handleMouseMove);

    return () => {
      video.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlaying]);

  const events = [
    {
      id: 1,
      title: "Singhvi Emerald Site Visit",
      description:
        "Clients visited the Sanghvi Emerald site to explore the available plots and villas. Our team guided them through the property layout and amenities.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2413T01.JPG",
    },
    {
      id: 2,
      title: "Client Interaction Session",
      description:
        "We organized a special session for our clients to answer questions, explain payment options, and showcase property plans at Sanghvi Emerald.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2409T01.JPG",
    },
    {
      id: 3,
      title: "Property Tour Event",
      description:
        "A guided tour was arranged for prospective buyers to walk through the plots and villas at Sanghvi Emerald and experience the location first-hand.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2406T01.JPG",
    },
    {
      id: 4,
      title: "Investment Opportunity Seminar",
      description: "We hosted a seminar to explain the investment potential of Sanghvi Emerald properties and future growth prospects.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2402T01.JPG",
    },
    {
      id: 5,
      title: "Open House Event",
      description: "Clients were invited for an open house to view available plots and villas, ask questions, and finalize bookings with our team.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2444T01.JPG?updatedAt=1760605241574",
    },
    {
      id: 6,
      title: "Property Showcase Day",
      description: "We showcased Sanghvi Emerald’s key plots, villa layouts, and amenities to interested buyers, providing a complete property experience.",
      img: "https://ik.imagekit.io/zpswxfgjd/C2439T01.JPG",
    },
  ];

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
            "url('https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202025-11-12%20at%2023.27.34_237fb8f1.jpg?updatedAt=1763606642145')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-3xl z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-5xl font-medium text-white leading-tight"
          >
            Insights, Trends & Stories from the World of Real Estate
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            Stay updated with expert opinions, property market trends, lifestyle inspirations, and company news...
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-24 md:-mt-28 px-4 z-20 mb-20">
        <div className="max-w-5xl mx-auto rounded-2xl pb-5">
          <div className="relative w-full">

            {/* VIDEO */}
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              controls
              poster="https://ik.imagekit.io/zpswxfgjd/3d-electric-car-building.jpg?updatedAt=1760528895369"
              onCanPlay={() => {
                setLoading(false);
                setShowButton(true);
              }}
              onWaiting={() => {
                setLoading(true);
                setShowButton(false);
              }}
              onPlay={() => {
                setIsPlaying(true);
                startAutoHide();
              }}
              onPause={() => {
                setIsPlaying(false);
                setShowButton(true);
              }}
            >
              <source
                src="https://res.cloudinary.com/dsvkiwxrk/video/upload/v1763625120/Narpavi_Web_video.out_nutubl.mp4"
                type="video/mp4"
              />
            </video>

            {/* LOADING SPINNER */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* PLAY / PAUSE CENTER BUTTON */}
            {showButton && !loading && (
              <button
                onClick={() => {
                  const video = videoRef.current;
                  if (video.paused) video.play();
                  else video.pause();
                }}
                className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center 
                    bg-black/50 backdrop-blur-md text-white rounded-full text-3xl 
                    hover:bg-black/60 transition"
              >
                {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
              </button>
            )}
          </div>

          <h2 className="text-2xl font-semibold text-center mt-6">
            What is Cluster Housing by Narpavi Properties?
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Cluster housing means a group of houses built together...
          </p>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-10 bg-white">
        <h2 className="text-center text-3xl font-semibold mb-8">Recent Events</h2>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative rounded-2xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                  <p className="text-white text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
