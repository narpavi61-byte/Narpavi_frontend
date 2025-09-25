import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    
    <section className="w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Frequently Asked <br />Questions</h2>
        <p className="text-gray-600">
          If there are question you want to ask.<br />
          We will answer all your question.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 cursor-pointer shadow-sm"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(idx)}
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === idx ? "−" : "+"}
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
          </div>
        ))}
      </div>
    </section>
    
  )
}