import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{
        duration: 1.5,
      }}
      className="border-b border-neutral-800 pb-24"
    >
      <h2 className="text-center my-20 text-4xl">Technologies</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-2 border-neutral-800"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-2 border-neutral-800"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-2 border-neutral-800"
        >
          <BiLogoFlutter className="text-6xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-2 border-neutral-800"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-2 border-neutral-800"
        >
          <SiTailwindcss className="text-6xl text-blue-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
