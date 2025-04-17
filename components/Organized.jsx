"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Organized = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Organized by <span className="text-blue-500">Mechi Mavericks</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Bringing innovation and technology together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/mav.png"
              alt="Mechi Mavericks Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-xl w-full max-w-[300px] sm:max-w-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                About Us
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Mechi Mavericks is a dynamic community of tech enthusiasts and
                innovators from Mechi region. We are dedicated to fostering
                technological growth and creating opportunities for aspiring
                developers.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                To create a thriving tech ecosystem in the Mechi region by
                organizing events, workshops, and competitions that inspire and
                empower the next generation of developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="mailto:mechimavericks@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition duration-300"
              >
                Contact Us
              </a>
              <a
                href="https://discord.gg/QUjqAKUf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition duration-300"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Events
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Regular tech meetups, workshops, and hackathons to boost the local
              tech community.
            </p>
          </div>

          <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Community
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              A supportive network of developers, designers, and tech
              enthusiasts.
            </p>
          </div>

          <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-lg backdrop-blur-sm border border-gray-700 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Resources
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Access to learning materials, mentorship, and career
              opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Organized;
