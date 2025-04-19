"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const Organized = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Organized by <span className="text-[#008080]">Mechi Mavericks</span>
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
              src="/mechi_mavericks.svg"
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
              <Button
                text="Contact Us"
                url="mailto:mechimavericks@gmail.com"
                variant="primary"
                className="rounded-full"
              />
              <Button
                text="Join Community"
                url="https://discord.gg/QUjqAKUf"
                variant="secondary"
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Organized;
