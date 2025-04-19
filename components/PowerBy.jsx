"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function PoweredBy() {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const PoweredBy = [
    {
      name: "BCA Association-MMC",
      logo: "https://i.ibb.co/8nyYVwsR/Logo-BCA-Association.png",
      link: "https://bcaassociation.tech/",
      isCircular: false,
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const content = scrollContainer.querySelector(".sponsors-row");
    if (!content) return;

    const totalWidth = content.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const handleResize = () => {
      const currentWidth = scrollContainer.clientWidth;

      if (totalWidth < currentWidth * 1.2) {
        content.classList.remove("absolute");
        content.classList.add("mx-auto", "justify-center", "flex-wrap");
        scrollContainer.classList.add("flex", "justify-center");

        // Remove any cloned content when switching to centered mode
        const clones = scrollContainer.querySelectorAll(
          ".sponsors-row:not(:first-child)"
        );
        clones.forEach((clone) => clone.remove());
      } else {
        content.classList.remove("mx-auto", "justify-center", "flex-wrap");
        content.classList.add("absolute");
        scrollContainer.classList.remove("flex", "justify-center");

        // Add clone if needed and not already present
        if (scrollContainer.querySelectorAll(".sponsors-row").length === 1) {
          const clone = content.cloneNode(true);
          scrollContainer.appendChild(clone);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Only setup animation if we have enough logos
    let animationId;

    if (totalWidth >= containerWidth * 1.2) {
      // Make sure we have a clone for the animation
      if (scrollContainer.querySelectorAll(".sponsors-row").length === 1) {
        const clone = content.cloneNode(true);
        scrollContainer.appendChild(clone);
      }

      let scrollPos = 0;
      const scrollSpeed = 0.5;

      const animate = () => {
        scrollPos += scrollSpeed;
        if (scrollPos >= totalWidth) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            Support & Contribution
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Event Powered By
            </span>
          </h1>

          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            We are grateful to our partners for their generous contributions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="overflow-hidden w-full relative"
            style={{
              height: "320px",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <div className="sponsors-row flex justify-center">
              {PoweredBy.map((sponsor, index) => (
                <div
                  key={`sponsor-${index}`}
                  className="flex-shrink-0 p-3 flex items-center justify-center flex-col"
                >
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-60 h-48 mx-4 group"
                  >
                    <div className="w-full h-full flex items-center justify-center p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`object-contain max-w-full max-h-full ${
                          sponsor.isCircular ? "rounded-full" : "rounded-lg"
                        } transition-all duration-300 group-hover:scale-105`}
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <motion.div
                      key={`sponsor-name-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex flex-col items-center justify-center mt-4"
                    >
                      <span className="text-xl font-medium bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                        {sponsor.name}
                      </span>
                     </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
       
      </div>
    </section>
  );
}

export default PoweredBy;
