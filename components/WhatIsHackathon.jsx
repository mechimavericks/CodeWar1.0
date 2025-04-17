"use client";
import React from "react";
import { motion } from "framer-motion";

function WhatIsCodeWar() {
  return (
    <section className=" bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
            What is CodeWar 1.0?
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-gray-700 shadow-lg"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              CodeWar 1.0 is a competitive coding event organized by Mechi
              Mavericks in collaboration with the BCA Association of Mechi
              Multiple Campus. It is an opportunity for students to test their
              problem-solving skills, collaborate with peers, and enhance their
              coding expertise.
            </p>

            <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              The event consists of multiple challenging rounds, including
              individual and team-based programming tasks, designed to push
              participants&#39; logical and analytical thinking. Whether you are
              a beginner or an advanced programmer, CodeWar 1.0 provides a
              platform to showcase your abilities and learn from others in a
              dynamic, competitive environment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIsCodeWar;
