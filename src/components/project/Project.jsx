import React, { useState, useEffect } from 'react';
import { FaRulerCombined, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from "framer-motion";

const PropertyCard = ({
  image,
  price,
  title,
  address,
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
        <div className="flex items-center gap-1 px-2 ">
          <FaRulerCombined size={16} />
          <span>{area}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Project() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // banner images (unchanged)
  const bannerImages = [
    'https://static.vecteezy.com/system/resources/previews/017/508/529/non_2x/construction-real-estate-contractor-concept-residential-house-building-drawings-free-photo.jpg',
    'https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg',
    'https://static1.squarespace.com/static/5491b846e4b07a0c1fb4d840/t/66eb34ce16f23a1c722839ba/1726690510472/Denver+custom+home+opt.jpg?format=1500w',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
  ];

  // Auto-rotate banner images (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // --- Completed Projects (your supplied 14 items) ---
  const completedProjects = [
    {
      id: 1,
      image: "https://ik.imagekit.io/zpswxfgjd/padmavathi%20nagar.jpg?updatedAt=1761631182580",
      price: "₹1,25,00,000",
      title: "Padamavathi Nagar",
      address: "Chengalpattu, Tamil Nadu",
      area: "19,200 sq.ft"
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202022-02-12%20at%2010.55.49%20PM%20(1).jpeg.jpg?updatedAt=1761631077370",
      price: "₹95,00,000",
      title: "Hill View",
      address: "Maraimalai Nagar, Tamil Nadu",
      area: "1,095 to 1,800 sq.ft"
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/zpswxfgjd/omsakthinagar.jpg?updatedAt=1761631077948",
      price: "₹62,00,000",
      title: "Om Sakthi",
      address: "Singaperumal Koil, Tamil Nadu",
      area: "420 sq.ft"
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/zpswxfgjd/marc%20avenue.jpg?updatedAt=1761631078319",
      price: "₹3,50,00,000",
      title: "Marc Avenue",
      address: "Chengalpattu, Tamil Nadu",
      area: "3,400 sq.ft"
    },
    {
      id: 5,
      image: "https://ik.imagekit.io/zpswxfgjd/pcr%20avenue.JPG?updatedAt=1761631099206",
      price: "₹1,10,00,000",
      title: "PCR Avenue",
      address: "Thiruporur, Tamil Nadu",
      area: "1,800 sq.ft"
    },
    {
      id: 6,
      image: "https://ik.imagekit.io/zpswxfgjd/sudhakar.jpg",
      price: "₹25,00,000",
      title: "Sudhakar Residences",
      address: "Tiger Cave (ECR), Tamil Nadu",
      area: "950 sq.ft"
    },
    {
      id: 7,
      image: "https://ik.imagekit.io/zpswxfgjd/srivari%20.jpg?updatedAt=1761631078348",
      price: "₹2,80,00,000",
      title: "Sei Vari Avenue",
      address: "Padappai, Tamil Nadu",
      area: "1,200 sq.ft"
    },
    {
      id: 8,
      image: "https://ik.imagekit.io/zpswxfgjd/8.jpg?updatedAt=1760592484017",
      price: "₹4,20,00,000",
      title: "Swarna Bhoomi",
      address: "Padappai, Tamil Nadu",
      area: "4,500 sq.ft"
    },
    {
      id: 9,
      image: "https://ik.imagekit.io/zpswxfgjd/jewel%20city.jpg?updatedAt=1761631076378",
      price: "₹78,00,000",
      title: "Bharathidhasan Nagar",
      address: "Urapakkam (near Padappai), Tamil Nadu",
      area: "1,000 sq.ft"
    },
    {
      id: 10,
      image: "https://ik.imagekit.io/zpswxfgjd/bharathidassn.jpg?updatedAt=1761632717971",
      price: "₹2,40,00,000",
      title: "SP Nagar",
      address: "Vandalur, Tamil Nadu",
      area: "3,200 sq.ft"
    },
    {
      id: 11,
      image: "https://ik.imagekit.io/zpswxfgjd/jewel.jpg",
      price: "₹1,75,00,000",
      title: "The Jewel City",
      address: "Padappai, Tamil Nadu",
      area: "2,200 sq.ft"
    },
    {
      id: 12,
      image: "https://ik.imagekit.io/zpswxfgjd/avadi.jpg",
      price: "₹85,00,000",
      title: "Chandru Paradise",
      address: "Avadi, Tamil Nadu",
      area: "1,500 sq.ft"
    },
    {
      id: 13,
      image: "https://ik.imagekit.io/zpswxfgjd/caotsel%20crest.jpg",
      price: "₹3,60,00,000",
      title: "Coastal Crest",
      address: "ECR, Tamil Nadu",
      area: "3,800 sq.ft"
    },
    {
      id: 14,
      image: "https://ik.imagekit.io/zpswxfgjd/90%20(2).jpeg?updatedAt=1760599067678",
      price: "₹2,20,00,000",
      title: "Singhvi Emerald",
      address: "Thiruvakkazhukundram, Tamil Nadu",
      area: "2,900 sq.ft"
    }
  ];

  const upcomingProjects = [
    // Upcoming items
    {
      id: 1,
      image: "https://ik.imagekit.io/zpswxfgjd/avadi.jpg?updatedAt=1761632140938",
      price: "",
      title: "Avadi (Upcoming)",
      address: "Avadi, Tamil Nadu",
      area: "3,800 sq.ft",
      status: "upcoming"
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/zpswxfgjd/ecr.jpg?updatedAt=1761631077537",
      price: "",
      title: "OMR Thiruporur (Upcoming)",
      address: "OMR / Thiruporur area, Tamil Nadu",
      area: "2,200 sq.ft",
      status: "upcoming"
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/zpswxfgjd/bharathidassn.jpg?updatedAt=1761632717971",
      price: "",
      title: "Kalpakkam (ECR) (Upcoming)",
      address: "Kalpakkam, ECR, Tamil Nadu",
      area: "2,200 sq.ft",
      status: "upcoming"
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/zpswxfgjd/WhatsApp%20Image%202022-12-08%20at%2012.05.42%20PM%20(1)_1_.jpg",
      price: "",
      title: "The Jewel City PH - III (Upcoming)",
      address: "Padappai / project site, Tamil Nadu",
      area: "4,200 sq.ft",
      status: "upcoming"
    },

    // Ongoing items (marked explicitly)
    {
      id: 5,
      image: "https://ik.imagekit.io/zpswxfgjd/jewel.jpg?updatedAt=1761632973739",
      price: "",
      title: "The Jewel City PH - II",
      address: "Padappai, Tamil Nadu [ongoing]",
      area: "9,200 sq.ft",

    },
    {
      id: 6,
      image: "https://ik.imagekit.io/zpswxfgjd/90%20(2).jpeg?updatedAt=1760599067678",
      price: "",
      title: "Singhvi Emerald [ongoing]",
      address: "Thiruvakkazhukundram, Tamil Nadu",
      area: "8,200 sq.ft",

    }
  ];


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // ----- Carousel logic (only functionality) -----
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perPage, setPerPage] = useState(2); // default 2 per slide

  // New: toggle between completed and upcoming
  const [selectedCategory, setSelectedCategory] = useState('completed'); // 'completed' or 'upcoming'

  // adjust perPage on resize (1 on small screens, 2 on md+)
  useEffect(() => {
    const setSize = () => {
      if (typeof window !== 'undefined') {
        setPerPage(window.innerWidth < 768 ? 1 : 2);
      }
    };
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  // choose active list based on selectedCategory
  const activeList = selectedCategory === 'completed' ? completedProjects : upcomingProjects;

  // recalc slides when activeList or perPage changes
  const totalSlides = Math.ceil(activeList.length / perPage);

  useEffect(() => {
    // reset to first slide when category changes
    setCurrentSlide(0);
  }, [selectedCategory, perPage]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // compute visible items for current slide
  const start = currentSlide * perPage;
  const visibleProperties = activeList.slice(start, start + perPage);

  // If on the last slide and slice doesn't fill, append from start to keep layout consistent
  if (visibleProperties.length < perPage) {
    const need = perPage - visibleProperties.length;
    visibleProperties.push(...activeList.slice(0, need));
  }


  return (
    <div className=" bg-white">

      <div className="relative h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
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

        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-3 sm:px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }} className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 sm:mb-6 leading-snug md:leading-tight">
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

        <style jsx>{`
          @keyframes slowPan {
            0% { transform: scale(1) translateX(0); }
            100% { transform: scale(1.1) translateX(-2%); }
          }
        `}</style>
      </div>


      <div className=" container pt-10  mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-6">
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


          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('completed')}
              className={`px-4 py-2 rounded-lg font-medium ${selectedCategory === 'completed' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setSelectedCategory('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium ${selectedCategory === 'upcoming' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Upcoming / Ongoing
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  title={property.title}
                  address={property.address}
                  area={property.area}

                />
              ))}
            </div>

            {/* Arrows (functionality only) */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md"
              style={{ transform: 'translateY(-50%) translateX(-50%)' }}
            >
              <FaChevronLeft className="text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md"
              style={{ transform: 'translateY(-50%) translateX(50%)' }}
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
