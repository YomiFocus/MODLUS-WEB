import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      desc: "Deliver excellence in printing and branding through unmatched precision and creativity.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      desc: "To become the most trusted print and branding partner in Nigeria, known for reliability.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Core Values",
      desc: "Creativity, Precision, Reliability, and absolute Customer Satisfaction in every project.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">About Us</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-brand-black mb-6">
            Your Trusted Print Partner
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modlus Print and Branding is a one-stop solution for all design, printing, and branding needs. We believe in solving challenges with a blend of technical precision and artistic flair.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-brand-turquoise/10 text-brand-turquoise w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-black mb-4">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
