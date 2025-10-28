import React from 'react'
import { motion, } from "framer-motion";

const Blog = () => {

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
            "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Insights, Trends & Stories from the World of Real Estate
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible" className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Stay updated with expert opinions, property market trends, lifestyle inspirations, and company news. Discover everything you need to make informed real estate decisions.
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-24 md:-mt-28 px-4 z-20 mb-20">
        <div className="max-w-5xl mx-auto rounded-2xl pb-5 shadow-xs">
          <video
            className="w-full rounded-xl"
            controls
            poster="https://ik.imagekit.io/zpswxfgjd/3d-electric-car-building.jpg?updatedAt=1760528895369"
          >
            <source
              src="https://res.cloudinary.com/dsvkiwxrk/video/upload/v1760604777/DJI_20250928103748_0003_D_SEP28_1_ohqxbe.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-2xl font-semibold text-center mt-6">
            What is Cluster Housing by Narpavi Properties?
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Cluster housing means a group of houses built together in a safe, gated
            area. Narpavi Properties makes these homes comfortable, secure, and
            affordable, with modern facilities for families.
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
  )
}

export default Blog