import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";

const faqs = [
  {
    question: "What is cluster housing perumnas?",
    answer:
      "Cluster housing perumnas is a housing concept that consists of several houses in a gated cluster. Cluster housing perumnas offers comfortable, secure, and affordable housing with various complete and modern facilities."
  },
  {
    question: "Where is the location of cluster housing perumnas?",
    answer:
      "Cluster housing perumnas are usually located in strategic residential areas, close to public facilities and infrastructure."
  },
  {
    question: "How much are the prices and types of houses in cluster housing perumnas?",
    answer:
      "Prices and types vary depending on the project, location, and facilities provided."
  },
  {
    question: "What are the facilities provided in cluster housing perumnas?",
    answer:
      "Facilities usually include security, playgrounds, parks, and community spaces."
  }
]
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    
    <section  className="container mx-auto">
      <div className="w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2  gap-8">
      {/* Left Side */}
      <div>
        <motion.h2 
         initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-medium mb-4">Frequently Asked <br />Questions</motion.h2>
        <p className="text-gray-600">
          If there are question you want to ask.<br />
          We will answer all your question.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="border rounded-lg p-4 cursor-pointer shadow-sm"
            variants={fadeUp}
             initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}

          >
            {/* Question */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(idx)}
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === idx ? <RiSubtractLine/> : <MdAdd />}
              </span>
            </div>

            {/* Answer with animation */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </ motion.div>
        ))}
      </div>
    </div>
    </section>
    
  )
}