import { useEffect } from "react";


const images = import.meta.glob("/public/assets/**/*.{jpg,png,webp,avif}", {
  eager: true,
});

const BackgroundPreloader = () => {
  useEffect(() => {
    Object.values(images).forEach((img: any) => {
      const preloaded = new Image();
     
      preloaded.src = img.default;
      preloaded.decode?.().catch(() => {});
    });
  }, []);

  return null;
};

export default BackgroundPreloader;
