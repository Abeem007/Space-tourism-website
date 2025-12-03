import { useEffect } from "react";

const BackgroundPreloader = () => {
  useEffect(() => {
    
    const backgrounds = [
      "/assets/home/background-home-mobile.jpg",
      "/assets/home/background-home-tablet.jpg",
      "/assets/home/background-home-desktop.jpg",
      "/assets/destination/background-destination-mobile.jpg",
      "/assets/destination/background-destination-tablet.jpg",
      "/assets/destination/background-destination-desktop.jpg",
      "/assets/crew/background-crew-mobile.jpg",
      "/assets/crew/background-crew-tablet.jpg",
      "/assets/crew/background-crew-desktop.jpg",
      "/assets/technology/background-technology-mobile.jpg",
      "/assets/technology/background-technology-tablet.jpg",
      "/assets/technology/background-technology-desktop.jpg",
    ];

    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null; 
};

export default BackgroundPreloader;
