import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "../data.json";
import '../BackgroundPage.css'
import Header from "../components/Header";
import { imageVariants,contentVariants,containerVariants,itemVariants } from "../components/imageVariants";

const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = destinations[activeIndex];
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="text-white destination-bg min-h-screen ">
      <Header />
      <motion.h1 className=" uppercase text-sm md:text-[18px] lg:text-xl tracking-[0.1rem]  text-center md:text-left md:tracking-[0.2rem] py-8 md:py-15 pl-2 md:pl-10 lg:pl-40   ">
        <span className="opacity-50  pr-2 md:pr-4 ">01</span> Pick your
        destination
      </motion.h1>

      {/* TABS CONTENT */}
      <div className=" flex flex-col justify-between lg:flex-row lg:justify-evenly  items-center md:pt-5 lg:pt-10 gap-8 md:gap-10 ">
        <AnimatePresence mode="wait">
          <motion.div
            className="w-[50%] md:w-[45%]  lg:w-[35%]  "
            key={activeTab.id}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.img
              src={activeTab.images.webp}
              alt={activeTab.name}
              onLoad={() => setLoaded(true)}
              variants={imageVariants}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>

        <div className=" lg:w-[30%] md:flex md:flex-col items-center lg:items-start justify-center mb-3">
          <motion.div
            className="flex space-x-4  md:space-x-10 lg:space-x-6 justify-center  mb-2 md:mb-0 lg:justify-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {destinations.map((destination, index) => (
              <motion.button
                key={destination.id}
                onClick={() => setActiveIndex(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#FFF" }}
                whileTap={{ scale: 0.95, color: "#FFF" }}
                className="relative cursor-pointer mb-5 font-extralight text-[#d6d7fa]/90  uppercase text-sm  md:text-[18px] lg:text-xs  transition-all duration-300 "
              >
                {destination.name}
                {activeIndex === index && (
                  <span className="absolute left-0 right-0 -bottom-3 h-0.5 rounded-full  bg-white transition-all duration-300"></span>
                )}
              </motion.button>
            ))}
          </motion.div>
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5"
              key={activeTab.id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1
                className="text-5xl md:text-8xl lg:text-7xl tracking-[0.3rem] uppercase  md:py-3 lg:pb-0 "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {activeTab.name}
              </motion.h1>
              <motion.h3
                className="text-[13px] md:text-[15px] lg:text-[14px] xl:text-[15px] tracking-[0.1rem] lg:tracking-tight leading-6 md:leading-8 lg:leading-7  text-center lg:text-justify md:w-[70%] lg:w-[92%] text-[#d6d7fa] px-4  md:p-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {activeTab.description}
              </motion.h3>
              <div className="mt-0 lg:mt-4 w-[300px] md:w-[420px] h-px bg-white opacity-35"></div>
              <motion.div
                className="flex flex-col items-center justify-center md:flex-row md:pb-10 gap-5 md:gap-20 text-[#d6d7fa]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  className="flex gap-1 md:gap-2 lg:gap-1 flex-col uppercase text-center md:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="opacity-70 text-xs md:text-base lg:text-xs">
                    AVG. DISTANCE
                  </h3>{" "}
                  <h2 className="text-2xl lg:xl opacity-90 text-white">
                    {activeTab.distance}
                  </h2>
                </motion.div>
                <motion.div
                  className="flex gap-1 md:gap-2 lg:gap-1 flex-col uppercase text-center md:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="opacity-70 text-xs md:text-base  lg:text-xs">
                    EST. TRAVEL TIME
                  </h3>
                  <h2 className="text-2xl lg:xl opacity-90 text-white ">
                    {activeTab.travel}
                  </h2>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Destination;
