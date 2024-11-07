"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl xl:text-3xl font-bold text-white max-w--[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            NARMEEN ASGHAR{" "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          As a passionate aspiring Full-Stack Developer, I am eager to expand my
          skills and embark on a journey in web development.
        </motion.p>


        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >

          <Button className="flex items-center gap-2 mt-6 button-primary">
            <a
              href="/My-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white"
            >
              View CV
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
