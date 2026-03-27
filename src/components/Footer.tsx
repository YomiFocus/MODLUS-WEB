import { Instagram, Facebook, Twitter, Linkedin, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-turquoise text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/YomiFocus/THE-MODLUS-CREATIVE-GLOBAL-LIMITED/00b58b9bc8657d415b73fa7afe8d902781ac3605/MODLUS%20LOGO.jpg" 
                  alt="Modlus Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative">
                <span className="text-3xl font-display tracking-wide">
                  MODLUS <span className="text-brand-yellow">PRINT AND BRANDING.</span>
                </span>
                <div className="absolute -top-4 -right-2">
                  <span className="px-2 py-0.5 text-[10px] font-extrabold border-2 border-white rounded bg-brand-yellow text-brand-black whitespace-nowrap uppercase tracking-tight shadow-lg">
                    RC NO: 8156152
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-100 leading-relaxed mb-8">
              Printing, Branding, publishing, Cut & Sew.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-100">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-yellow transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-100">
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Digital Printing</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Large Format</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Corporate Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Location</h4>
            <p className="text-gray-100 mb-4">
              1, Sultan Street Off Eyo Street,<br />
              Palmgrove, Lagos State.<br />
              Available 24/7 Online.
            </p>
            <div className="bg-brand-yellow/20 p-4 rounded-2xl border border-brand-yellow/20 flex items-center gap-4">
              <Truck className="w-12 h-12 text-brand-red shrink-0" />
              <p className="text-brand-yellow text-sm font-bold">
                Free Delivery within Lagos State!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Modlus Print and Branding. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
