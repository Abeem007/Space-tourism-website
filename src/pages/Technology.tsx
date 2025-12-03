import "../BackgroundPage.css";

import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { technology } from "../data.json";
import {
  imageVariants,
  contentVariants,
  containerVariants,
  itemVariants,
} from "../components/imageVariants";
import { useState } from "react";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = technology[activeIndex];
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="technology-bg text-white min-h-screen ">
      <Header />
      <motion.h1 className=" uppercase text-base md:text-[18px] lg:text-xl tracking-[0.1rem] text-center md:text-left md:tracking-[0.2rem] lg:tracking-[0.1rem] py-3 md:py-8 pl-2 md:pl-10 lg:pl-18 xl:pl-35  text-white ">
        <span className="opacity-50 text-white pr-2 md:pr-4 uppercase">03</span>{" "}
        SPACE LAUNCH 101
      </motion.h1>
      {/* TABS CONTENT */}
      <div className=" flex flex-col  justify-between lg:flex-row lg:justify-between  items-center  md:pt-0  gap-8 md:gap-10 lg:gap-0 ">
        {/* Tablet & mobile image content */}
        <AnimatePresence mode="wait">
          <motion.div
            className="block md:block lg:hidden py-5 md:py-0"
            key={activeTab.id}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.img
              src={activeTab.images.landscape}
              alt={activeTab.name}
              variants={imageVariants}
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="lg:w-[48%]  lg:flex items-center    gap-10 lg:pl-10 xl:pl-35 ">
          {/* tab buttons */}
          <motion.div
            className="flex lg:flex-col space-x-4  lg:space-y-5 xl:space-y-7 justify-center  lg:justify-start  "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {technology.map((technology, index) => (
              <motion.button
                key={technology.id}
                onClick={() => setActiveIndex(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#FFF" }}
                whileTap={{ scale: 0.95, color: "#FFF" }}
                className={`cursor-pointer h-9 w-9 md:h-14 md:w-14 rounded-full border shadow-md   border-[#474646] ${
                  activeIndex === index ? "bg-white scale-110 " : "bg-black/10 "
                }`}
              >
                <span
                  className={`text-center text-xl  ${
                    activeIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {technology.id}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-col  justify-center items-center lg:justify-start lg:items-start text-center lg:text-left  mt-8 gap-y-4 lg:mt-0"
              key={activeTab.id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h3 className="text-white opacity-60 md:text-2xl   tracking-[0.1rem] uppercase">
                THE TERMINOLOGY...
              </motion.h3>
              <motion.h1
                className="text-2xl md:text-4xl lg:text-[37px] tracking-[0.1rem] uppercase   text-nowrap "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {activeTab.name}
              </motion.h1>
              <motion.h3
                className="text-xs  md:text-[15px] lg:text-[14px] xl:text-[15px]   tracking-[0.02rem] lg:tracking-[0.01rem] leading-6 md:leading-8 lg:leading-7 text-center  lg:text-justify md:w-[70%] lg:w-full px-4 text-[#d6d7fa]  md:p-0  md:mt-2 lg:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {activeTab.description}
              </motion.h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* image content */}
        <AnimatePresence mode="wait">
          <motion.div
            className="  md:w-[45%]  mb-15"
            key={activeTab.id}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.img
              src={activeTab.images.portrait}
              alt={activeTab.name}
              variants={imageVariants}
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="hidden  lg:block xl:w-full xl:h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Technology;
