import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-brand-black mb-8 leading-tight">
              Ready to Start Your <span className="text-brand-turquoise">Project?</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-brand-turquoise/10 p-4 rounded-2xl text-brand-turquoise">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-black">Call Us</h4>
                  <p className="text-gray-600">08154266138, 09110312865</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-turquoise/10 p-4 rounded-2xl text-brand-turquoise">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-black">Email Us</h4>
                  <p className="text-gray-600">Modlusprintandbranding@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-turquoise/10 p-4 rounded-2xl text-brand-turquoise">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-black">Visit Us</h4>
                  <p className="text-gray-600">1, Sultan Street Off Eyo Street, Palmgrove, Lagos State</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-turquoise p-8 rounded-[40px] text-white">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="text-brand-yellow" />
                WhatsApp Support
              </h4>
              <p className="text-gray-100 mb-6">Chat with us instantly for quick quotes and design approvals.</p>
              <a
                href="https://wa.me/2348093916485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow text-brand-black px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-brand-black transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 lg:p-16 rounded-[60px]"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-black">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-orange outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-black">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-orange outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-black">Service Needed</label>
                <select className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-yellow outline-none appearance-none">
                  <option>Graphic Design</option>
                  <option>Digital Printing</option>
                  <option>Large Format</option>
                  <option>Corporate Branding</option>
                  <option>Custom Order</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-black">Message / Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-yellow outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-yellow hover:text-brand-black transition-all flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
