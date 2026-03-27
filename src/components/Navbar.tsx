import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/00b58b9bc8657d415b73fa7afe8d902781ac3605/MODLUS%20LOGO.jpg" 
                alt="Modlus Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative">
              <span className="text-3xl font-display tracking-wide text-brand-black">
                MODLUS <span className="text-brand-turquoise">PRINT AND BRANDING</span><span className="text-brand-yellow">.</span>
              </span>
              <div className="absolute -top-4 -right-2 md:-right-4">
                <span className="px-2 py-0.5 text-[10px] md:text-[12px] font-extrabold border-2 border-brand-black rounded bg-white text-brand-black whitespace-nowrap shadow-md uppercase tracking-tight">
                  RC NO: 8156152
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-black hover:text-brand-turquoise transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-brand-black hover:text-brand-turquoise"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-brand-red text-white text-center py-3 rounded-xl font-bold"
          >
            Order Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
