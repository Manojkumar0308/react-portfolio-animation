import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.png";
const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: { x: -0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 lg:mb-35 pb-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h2
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-4xl tracking-tight font-thin lg:text-6xl lg:mt-16"
              >
                Manoj Kumar
              </motion.h2>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent mt-4 lg:mt-16"
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 py-6 font-light tracking-tighter max-w-xl"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="profilePic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
