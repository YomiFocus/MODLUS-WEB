import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoStack from "./PhotoStack";

export default function Portfolio() {
  const projects = [
    {
      title: "Web Design",
      category: "Branding",
      images: [
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/f31f4a2d8f5783f1f3e20812115951256e203ab6/WEB%201.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/f31f4a2d8f5783f1f3e20812115951256e203ab6/WEB%202.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/f31f4a2d8f5783f1f3e20812115951256e203ab6/1002736187.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/f31f4a2d8f5783f1f3e20812115951256e203ab6/1002736188.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/f31f4a2d8f5783f1f3e20812115951256e203ab6/1002736189.jpg"
      ],
    },
    {
      title: "Corporate Identity",
      category: "Large Format",
      images: [
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/41d590d4c3a41b6e61d1cf9ddfa70f2d80fd0c5f/FLEX%201.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/41d590d4c3a41b6e61d1cf9ddfa70f2d80fd0c5f/FLEX%202.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/41d590d4c3a41b6e61d1cf9ddfa70f2d80fd0c5f/FLEX%203.jpg"
      ],
    },
    {
      title: "Corporate Identity",
      category: "Printing",
      images: [
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/d896107abc9799beec8ddbff94050bc3c9d0422d/card%201.jfif",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/d896107abc9799beec8ddbff94050bc3c9d0422d/card3.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/d896107abc9799beec8ddbff94050bc3c9d0422d/card5.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/d896107abc9799beec8ddbff94050bc3c9d0422d/card6.jpg"
      ],
    },
    {
      title: "Corporate Identity",
      category: "Branding",
      images: [
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002687557.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002687567.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002687569.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002689993.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002760321.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002760240.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002738100.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002737612.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002737609.jpg",
        "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002758724.jpg"
      ],
    },
    {
      title: "Marketing Flyers",
      category: "Digital Print",
      image: "https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/489716017bd257187aeef694c3aa24c16f9d21f0/1002673470.jpg",
    },
    {
      title: "Corporate Merchandise",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Digital Signage",
      category: "Large Format",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Luxury Brochures",
      category: "Printing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= projects.length - itemsToShow + 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? projects.length - itemsToShow : prev - 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-brand-turquoise uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-brand-black">Our Recent Work</h3>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-brand-turquoise flex items-center justify-center text-brand-turquoise hover:bg-brand-turquoise hover:text-white transition-all"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-brand-turquoise flex items-center justify-center text-brand-turquoise hover:bg-brand-turquoise hover:text-white transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="min-w-full sm:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.333px)]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-[32px] overflow-hidden bg-white shadow-sm h-full"
                >
                  <div className={`aspect-[4/3] relative ${project.images ? "" : "overflow-hidden"}`}>
                    {project.images ? (
                      <div className="p-4 w-full h-full">
                        <PhotoStack images={project.images} />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className="p-8">
                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-brand-black">{project.title}</h4>
                  </div>
                  <div className="absolute inset-0 bg-brand-turquoise/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Project
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
