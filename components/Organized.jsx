'use client';
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Organized = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Organized by <span className="text-blue-500">Mechi Mavericks</span>
          </h1>
          <p className="text-lg text-gray-300">
            Bringing innovation and technology together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/mav.png"
              alt="Mechi Mavericks Logo"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3">About Us</h2>
              <p className="text-gray-300">
                Mechi Mavericks is a dynamic community of tech enthusiasts and innovators
                from Mechi region. We are dedicated to fostering technological growth
                and creating opportunities for aspiring developers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-300">
                To create a thriving tech ecosystem in the Mechi region by organizing
                events, workshops, and competitions that inspire and empower the next
                generation of developers.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:mechimavericks@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
              >
                Contact Us
              </a>
              <a
                href="https://discord.gg/QUjqAKUf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300"
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
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-bold mb-3">Events</h3>
            <p className="text-gray-300">
              Regular tech meetups, workshops, and hackathons to boost the local tech community.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-300">
              A supportive network of developers, designers, and tech enthusiasts.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-bold mb-3">Resources</h3>
            <p className="text-gray-300">
              Access to learning materials, mentorship, and career opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Organized;