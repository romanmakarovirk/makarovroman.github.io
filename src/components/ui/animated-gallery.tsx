import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export const AnimatedGallery = ({
  images,
  autoplay = false,
  className,
}: {
  images: GalleryImage[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={`max-w-md mx-auto ${className || ''}`}>
      <div className="relative h-72 w-full">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index)
                  ? 999
                  : images.length + 2 - index,
                y: isActive(index) ? [0, -40, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="h-full w-full rounded-2xl object-cover object-center shadow-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group/button shadow-md hover:bg-white transition-colors"
        >
          <IconArrowLeft className="h-5 w-5 text-gray-700 group-hover/button:rotate-12 transition-transform duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group/button shadow-md hover:bg-white transition-colors"
        >
          <IconArrowRight className="h-5 w-5 text-gray-700 group-hover/button:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
