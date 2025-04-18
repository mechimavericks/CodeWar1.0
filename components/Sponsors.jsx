"use client";

import React, { useEffect, useRef } from "react";

function Sponsors() {
  const scrollRef = useRef(null);
  const supportedByList = [
    {
      name: "Defang.io",
      logo: "https://i.ibb.co/Q7hqvDfw/icon-removebg-preview.png",
      link: "https://defang.io/",
      title: "Technical Partner",
    },
    {
      name: "GeeksforGeeks",
      logo: "https://i.ibb.co/8D1b3HDf/220px-Geeksfor-Geeks-svg.webp",
      link: "https://www.geeksforgeeks.org/",
      title: "Learning Partner",
    },
    {
      name: "GitHub Education",
      logo: "https://i.ibb.co/9cJYxq0P/github-education.png",
      link: "https://education.github.com/",
      title: "Education & Community Partner",
    }
    // {
    //   name: "BCA Association",
    //   logo: "https://i.ibb.co/hJd0RtxG/387786702-333272159248749-5396401851382435101-n-removebg-preview.png",
    //   link: "https://bcaassociation.tech/",
    // },
    // {
    //   name: "Unity Samaj",
    //   logo: "https://i.ibb.co/pj7kb0hk/unitysamaj.png",
    //   link: "#",
    // },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the sponsors to create the sliding effect
    const content = scrollContainer.querySelector(".sponsors-row");
    if (!content) return;

    // Check if we need scrolling (if logos don't fill the container width)
    const totalWidth = content.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    if (totalWidth < containerWidth * 1.2) {
      // Not enough logos to justify scrolling - center them instead
      content.classList.remove("absolute");
      content.classList.add("mx-auto", "justify-center");
      scrollContainer.classList.add("flex", "justify-center");
    } else {
      // Enough logos - proceed with scrolling animation
      const clone = content.cloneNode(true);
      scrollContainer.appendChild(clone);

      // Set up the animation
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

      // Clean up animation on unmount
      return () => cancelAnimationFrame(animationId);
    }
  }, []);

  return (
    <div>
      <section className="py-6 px-3 sm:px-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Sponsors
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
            We are grateful to our sponsors for their generous support.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="overflow-hidden w-full relative mt-6"
          style={{ height: "220px", maxWidth: "100vw" }} // Increased height to accommodate titles
        >
          <div className="sponsors-row flex absolute">
            {supportedByList.map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center mx-2 sm:mx-4 md:mx-6"
                >
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain max-w-full max-h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <span className="mt-2 text-sm sm:text-base md:text-lg font-medium text-gray-300 flex flex-col items-center justify-center">
                    {sponsor.name}
                    <span className="text-xs sm:text-sm md:text-base text-[f3f3f3]">
                    {sponsor.title}
                      </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
