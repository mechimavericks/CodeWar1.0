"use client";
import React, { useEffect, useRef } from "react";

function SupportedBy() {
  const scrollRef = useRef(null);
  const supportedByList = [
    {
      name: "Mechi Mavericks",
      logo: "https://i.ibb.co/Xrxfm6G0/mechimavericks.png",
      link: "https://mechimavericks.tech/",
    },
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
    {
      name: "Defang.io",
      logo: "https://i.ibb.co/Q7hqvDfw/icon-removebg-preview.png",
      link: "https://defang.io/",
    }
  ]
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Clone the sponsors to create the sliding effect
    const content = scrollContainer.querySelector('.sponsors-row');
    if (!content) return;
    
    // Check if we need scrolling (if logos don't fill the container width)
    const totalWidth = content.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    
    if (totalWidth < containerWidth * 1.2) {
      // Not enough logos to justify scrolling - center them instead
      content.classList.remove('absolute');
      content.classList.add('mx-auto', 'justify-center');
      scrollContainer.classList.add('flex', 'justify-center');
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
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold">Supported By</h2>
          <p className="text-lg mt-4 mb-8">
            We are grateful to our supporters for their generous contributions.
          </p>
        </div>
        
        <div 
          ref={scrollRef} 
          className="overflow-hidden w-full relative"
          style={{ height: "180px" }} // Increased height to accommodate larger logos
        >
          <div className="sponsors-row flex absolute">
            {supportedByList.map((sponsor, index) => (
              <div key={`sponsor-${index}`} className="flex-shrink-0 p-6 flex items-center justify-center">
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-40 h-40 mx-6" // Increased size and margin
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-contain w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" // Added some styling
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