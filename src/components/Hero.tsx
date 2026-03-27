import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-turquoise/10 rounded-bl-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-4 bg-brand-yellow/20 text-brand-red px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Truck className="w-12 h-12 text-brand-turquoise" />
              Free Delivery within Lagos State
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-brand-black leading-[1.1] mb-6">
              Printing, Branding, <span className="text-brand-turquoise">Publishing</span>, Cut & Sew.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Modlus Print and Branding delivers high-quality, creative, and precise work tailored to your expectations. From design to doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-yellow hover:text-brand-black transition-all group"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-turquoise text-brand-turquoise px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-turquoise hover:text-white transition-all"
              >
                Start Your Design
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-red w-5 h-5" />
                <span className="text-sm font-bold">24/7 Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-red w-5 h-5" />
                <span className="text-sm font-bold">Digital Approvals</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/ef2c10426678df7b49bd12f04844fed0f1c010b2/1002734726.jpg"
                alt="Modlus Digital Approvals"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-yellow rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-brand-turquoise rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
