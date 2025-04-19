"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function OurAdvisor() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ourAdvisorList = [
    {
      name: "Sadhana Panthi",
      image: "https://i.ibb.co/2Ysrss2D/491000740-1041868541161950-3756942902193998104-n.png",
      link: "https://www.sadhanapanthi.com.np/",
      position: "Software Engineer"
    },
    {
      name: "Banshaj Paudel",
      image: "https://i.ibb.co/bjf3DRwB/482658870-3114467838706963-7792256541371545998-n.png",
      link: "https://banshaj.com.np/",
      position: "Tech Advisor"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
            Guidance & Expertise
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Our Advisors
            </span>
          </h1>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            We are grateful to our advisors for their guidance and expertise.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20"
        >
          {ourAdvisorList.map((advisor, index) => (
            <motion.div
              key={`advisor-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="flex flex-col items-center"
            >
              <a
                href={advisor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 hover:shadow-teal-500/10">
                  <img
                    src={advisor.image || advisor.logo}
                    alt={advisor.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  {advisor.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  {advisor.position || "Technical Advisor"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurAdvisor;
