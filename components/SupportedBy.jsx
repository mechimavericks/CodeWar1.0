"use client";
import React, { useEffect, useRef } from "react";

function SupportedBy() {
  const scrollRef = useRef(null);
  const supportedByList = [
    {
      name: "BCA Association",
      logo: "https://i.ibb.co/hJd0RtxG/387786702-333272159248749-5396401851382435101-n-removebg-preview.png",
      link: "https://bcaassociation.tech/",
    },
    {
      name: "Unity Samaj",
      logo: "https://i.ibb.co/pj7kb0hk/unitysamaj.png",
      link: "#",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const content = scrollContainer.querySelector('.sponsors-row');
    if (!content) return;

    const totalWidth = content.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const handleResize = () => {
      if (totalWidth < containerWidth * 1.2) {
        content.classList.remove('absolute');
        content.classList.add('mx-auto', 'justify-center', 'flex-wrap');
        scrollContainer.classList.add('flex', 'justify-center');
      } else {
        content.classList.remove('mx-auto', 'justify-center', 'flex-wrap');
        content.classList.add('absolute');
        scrollContainer.classList.remove('flex', 'justify-center');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Only setup animation if we have enough logos
    if (totalWidth >= containerWidth * 1.2) {
      const clone = content.cloneNode(true);
      scrollContainer.appendChild(clone);

      let scrollPos = 0;
      const scrollSpeed = 0.5;

      const animate = () => {
        scrollPos += scrollSpeed;
        if (scrollPos >= totalWidth) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Supported By
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12">
            We are grateful to our supporters for their generous contributions.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden w-full relative"
          style={{
            height: "clamp(120px, 25vw, 180px)",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div className="sponsors-row flex">
            {supportedByList.map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 p-3 sm:p-4 md:p-6 flex items-center justify-center"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-2 sm:mx-4 md:mx-6"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-contain w-full h-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300 filter hover:brightness-110"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportedBy;