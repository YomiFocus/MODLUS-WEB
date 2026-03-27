import { motion } from "motion/react";
import { Palette, Printer, Maximize, Briefcase, ShoppingBag } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      desc: "Creative visual identities, logos, and marketing materials that stand out.",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Digital Printing",
      desc: "High-quality flyers, business cards, brochures, and documents.",
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Large Format",
      desc: "Banners, signage, roll-ups, and billboards that command attention.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Corporate Branding",
      desc: "Complete office branding, stationery, and professional identity systems.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Packaging & Merch",
      desc: "Custom packaging, branded t-shirts, caps, and promotional items.",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Custom Print Orders",
      desc: "Unique requests tailored to your specific business or personal needs.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Our Services</h2>
            <h3 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter">
              PREMIUM <span className="text-stroke-white text-transparent">BRANDING</span> SOLUTIONS
            </h3>
          </div>
          <p className="text-gray-500 text-lg max-w-md font-medium italic">
            "Excellence in every pixel, precision in every print."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-[40px] overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-black p-12 hover:bg-white hover:text-black transition-all duration-500 group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black italic">0{index + 1}</span>
              </div>
              
              <motion.div 
                className="text-white group-hover:text-black mb-10"
                variants={{
                  hover: {
                    scale: [1, 1.15, 1],
                    transition: {
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-current rounded-full">
                  {service.icon}
                </div>
              </motion.div>
              
              <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase">{service.title}</h4>
              <p className="text-gray-500 group-hover:text-black/70 leading-relaxed font-medium transition-colors">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                <div className="w-8 h-px bg-current" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
