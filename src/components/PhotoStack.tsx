import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PhotoStackProps {
  images: string[];
  interval?: number;
}

export default function PhotoStack({ images, interval = 3000 }: PhotoStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="popLayout">
        {images.map((img, index) => {
          // Calculate relative index for stacking effect
          const relativeIndex = (index - currentIndex + images.length) % images.length;
          
          // Only show top 3 images for performance and clean look
          if (relativeIndex > 2) return null;

          return (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.8, y: 20, rotate: 0 }}
              animate={{ 
                opacity: 1 - relativeIndex * 0.3, 
                scale: 1 - relativeIndex * 0.05,
                y: relativeIndex * -12,
                x: relativeIndex * 8,
                rotate: relativeIndex * 2,
                zIndex: images.length - relativeIndex,
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.1, 
                y: -40, 
                x: 20,
                rotate: 10,
                transition: { duration: 0.4 } 
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={img}
                alt={`Stack image ${index}`}
                className="w-full h-full object-cover rounded-[32px] shadow-xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
