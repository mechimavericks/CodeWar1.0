'use client'
import React from "react";
import { useRef, useEffect } from "react";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { 
    x: 0,opacity:1, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 200}
};

function TimeLineCard({title, date, description}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial= "hidden"
      variants={squareVariants}
      className="square"
    >
      <div
               className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400 before:bg-green-700">
                  <h3 className="text-xl font-semibold tracki">
                    {title}
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    {date}
                  </time>
                  <p className="mt-3">
                    {description}
                  </p>
                </div>
    </motion.div>
  );
}


function Timeline() {
  return (
    <div  className="overflow-hidden">
      <div className="flex items-center justify-center w-full dark:bg-gray-800 dark:text-gray-100 p-5">
        <h1 className="text-5xl font-bold dark:text-white ">Event Timeline</h1>
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400 before:bg-green-700 ">
                <h3 className="text-3xl font-semibold">Our event timeline</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                  2024
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700 before:bg-blue-700">
                <TimeLineCard 
                  title="Registration"
                  date="28th March 2024 - 28th April 2024"
                  description="Registration for Codewar1.0 is now open from March 28, 2024, until April 28, 2024. This one-month window provides aspiring participants with the opportunity to register for the upcoming event."
                />
                   <TimeLineCard 
                  title="Formation of Teams"
                  date="30TH APRIL 2024"
                  description="The team formation will be done on April 30, 2024. The formated teams will be notified through email. The formated teams (20 Teams) need to cooperate with each other during the competition."
                />
                {/* <TimeLineCard
                  title="Idea Pitching"
                  date="1st May 2024"
                  description="The selected teams will be eligible to Idea pitching stage of the event. The selected teams will be notified through email. The selected teams (20 Teams) will be eligible to Idea pitching stage of the event. And Top 10 teams will be selected for the final round."
                /> */}
                <TimeLineCard
                  title="Main Event"
                  date="Xst May 2024"
                  description="The main event will be held on May X, 2024. The registered participant with their team will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
