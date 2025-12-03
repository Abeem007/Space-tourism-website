import { useState } from "react";
import Header from "../components/Header";

import { motion, AnimatePresence } from "framer-motion";
import { crew } from "../data.json";
import {
  imageVariants,
  contentVariants,
  containerVariants,
  itemVariants,
} from "../components/imageVariants";

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = crew[activeIndex];
  const [loaded, setLoaded] = useState(false);
  const handleSwipe = ( info:any) => {
    const swipeThreshhold = 50;
    if (info.offset.x < -swipeThreshhold) {
      setActiveIndex((prev) => (prev + 1) % crew.length);
      setLoaded(false)
    }
    else if (info.offset.x > swipeThreshhold) {
      setActiveIndex((prev) => (prev - 1 + crew.length) % crew.length);
      setLoaded(false)
    }
  };
  return (
    <div className="crew-bg min-h-screen text-white">
      <Header />
      <motion.h1 className=" uppercase text-sm md:text-[18px] lg:text-xl tracking-[0.1rem] text-center md:text-left md:tracking-[0.2rem] py-3 md:py-8 pl-2 md:pl-10 lg:pl-32 xl:pl-40  text-[#d6d7fa] ">
        <span className="opacity-50 text-[#d6d7fa] pr-0 md:pr-4 ">02</span> MEET
        YOUR CREW
      </motion.h1>
      {/* TABS CONTENT */}
      <div className=" flex flex-col justify-between lg:flex-row lg:justify-evenly  items-center md:pt-0 lg:pt-0 gap-18  md:gap-10">
        <div className=" lg:w-[30%]  md:flex md:flex-col  justify-between  items-center lg:items-start lg:justify-center ">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              className=" flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-left space-y-3 mt-4 md:mt-0"
              key={activeTab.id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleSwipe}
            >
              <motion.h3 className="text-[#d6d7fa]  opacity-60 text-md md:text-2xl tracking-[0.1rem] uppercase">
                {activeTab.role}
              </motion.h3>
              <motion.h1
                className="text-xl md:text-3xl lg:text-[37px] tracking-[0.3rem] uppercase  md:py-2 text-nowrap lg:text-wrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {activeTab.name}
              </motion.h1>
              <motion.h3
                className="text-xs  md:text-[15px] lg:text-[14px] xl:text-[15px]   md:tracking-[0.1rem] lg:tracking-tight leading-6 md:leading-8 lg:leading-7 text-center lg:text-justify md:w-[70%] lg:w-full  px-4 text-[#d6d7fa]   md:p-0 opacity-90  mt-2 md:mt-3 lg:mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {activeTab.bio}
              </motion.h3>
            </motion.div>
          </AnimatePresence>
          {/* tab buttons */}
          <motion.div
            className="flex space-x-4  md:space-x-10 lg:space-x-6 justify-center  mt-6 md:mt-10 lg:mt-30  lg:justify-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {crew.map((crew, index) => (
              <motion.button
                key={crew.id}
                onClick={() => setActiveIndex(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#FFF" }}
                whileTap={{ scale: 0.95, color: "#FFF" }}
                className={`cursor-pointer h-2 w-2 md:h-3 md:w-3 rounded-full  ${
                  activeIndex === index ? "bg-white" : "bg-white/30"
                }`}
              ></motion.button>
            ))}
          </motion.div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="w-[48%] md:w-[38%]   lg:w-[28%]  "
            key={activeTab.id}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
          >
            <motion.img
              src={activeTab.images.png}
              alt={activeTab.name}
              variants={imageVariants}
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="shadow-2xs lg:pb-20
                 `mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]`
                 [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_90%)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Crew;
