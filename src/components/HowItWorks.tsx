import { motion } from "motion/react";
import { MousePointer2, FileEdit, CheckCircle, Settings, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointer2 />,
      title: "Place Order",
      desc: "Choose your service and place your order online via our platform.",
    },
    {
      icon: <FileEdit />,
      title: "Submit Design",
      desc: "Upload your existing design or request a custom one from our experts.",
    },
    {
      icon: <CheckCircle />,
      title: "Review & Approve",
      desc: "Review and approve your designs digitally before we start printing.",
    },
    {
      icon: <Settings />,
      title: "Printing",
      desc: "Our state-of-the-art facility brings your approved design to life.",
    },
    {
      icon: <Truck />,
      title: "Delivery",
      desc: "Get your finished products delivered straight to your doorstep.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Process</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-brand-black">How It Works</h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white border-4 border-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-turquoise shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-brand-yellow text-brand-black w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-10 mb-6 font-bold text-sm border-4 border-white">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
