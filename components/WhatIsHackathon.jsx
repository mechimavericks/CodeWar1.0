"use client";
import React from "react";

function WhatIsCodeWar() {
  return (
    <section className="min-h-fit bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
            What is CodeWar 1.0?
          </h2>
          
          <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-gray-700">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              CodeWar 1.0 is a competitive coding event organized by Mechi Mavericks
              in collaboration with the BCA Association of Mechi Multiple Campus.
              It is an opportunity for students to test their problem-solving
              skills, collaborate with peers, and enhance their coding expertise.
            </p>
            
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              The event consists of multiple challenging rounds, including
              individual and team-based programming tasks, designed to push
              participants&#39; logical and analytical thinking. Whether you are a
              beginner or an advanced programmer, CodeWar 1.0 provides a platform
              to showcase your abilities and learn from others in a dynamic,
              competitive environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsCodeWar;
