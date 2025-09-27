import React from 'react'
import { motion, } from "framer-motion";

const Blog = () => {
  
    const events = [
  {
    id: 1,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Lorem",
    description: "Another event description goes here.",
    img: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Lorem",
    description: "Another event description goes here.",
    img: "https://images.unsplash.com/photo-1515165562835-c3b8e3fc7a1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Lorem",
    description: "Another event description goes here.",
    img: "https://images.unsplash.com/photo-1520975922076-13d6d2222b66?q=80&w=800&auto=format&fit=crop",
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
            Get in touch with us!
          </motion.h1>
          <motion.p
          variants={fadeUp}
            initial="hidden"
            whileInView="visible" className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Reach out to us for expert real estate guidance, property inquiries,
            or personalized assistance today.
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-24 md:-mt-28 px-4 z-20 mb-20">
        <div className="max-w-5xl mx-auto  rounded-2xl   shadow-xs ">
          <video
            className="w-full rounded-xl"
            controls
        
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-2xl font-semibold text-center mt-6">
            What is cluster housing perumnas?
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Cluster housing perumnas is a housing concept that consists of several
            houses in a gated cluster. Cluster housing perumnas offers comfortable,
            secure, and affordable housing with various complete and modern facilities.
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