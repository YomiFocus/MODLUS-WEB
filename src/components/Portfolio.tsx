import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoStack from "./PhotoStack";

export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Identity",
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
      title: "Event Banners",
      category: "Large Format",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Premium Business Cards",
      category: "Printing",
      image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Custom Packaging",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Marketing Flyers",
      category: "Digital Print",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
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
