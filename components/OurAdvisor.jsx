"use client";
import React, { useEffect, useRef } from "react";

function SupportedBy() {
  const scrollRef = useRef(null);
  const ourAdvisorList = [
    {
      name: "Sadhana Panthi",
      logo: "https://i.ibb.co/2Ysrss2D/491000740-1041868541161950-3756942902193998104-n.png",
      // link: "https://bcaassociation.tech/",
      // isCircular: false,
    },
    {
      name: "Banshaj Paudel",
      logo: "https://i.ibb.co/bjf3DRwB/482658870-3114467838706963-7792256541371545998-n.png",
      // isCircular: true,
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
    <div className="w-full">
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Our Advisor
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            We are grateful to our Advisor for their generous contributions.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden w-full relative"
          style={{
            height: "clamp(100px, 20vw, 180px)",
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="sponsors-row flex justify-center">
            {ourAdvisorList.map((advisor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 p-2 sm:p-3 md:p-4 lg:p-6 flex items-center justify-center flex-col "
              >
                <a
                  href={advisor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-1 sm:mx-2 md:mx-4 lg:mx-6"
                >
                  {advisor.isCircular ? (
                    <div className="bg-white rounded-full flex items-center justify-center w-4/5 h-4/5 p-0">
                      <img
                        src={advisor.logo}
                        alt={advisor.name}
                        className="object-contain w-64 rounded-full transition-all duration-300 filter hover:brightness-110"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <img
                      src={advisor.logo}
                      alt={advisor.name}
                      className="object-contain w-full h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 filter hover:brightness-110"
                      loading="lazy"
                    />
                  )}
                </a>
                <div className="text-center mt-2">
                  <span className="text-sm sm:text-base md:text-lg font-medium text-gray-300">
                    {advisor.name}
                  </span>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportedBy;
