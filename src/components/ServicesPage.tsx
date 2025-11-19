import { motion } from "motion/react";
import {
  Package,
  Wrench,
  Users,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Package,
    title: "Material Supply",
    description:
      "We import selected Granite, Marble, Ceramic and Laminate from Egypt, Turkey, Italy and Germany — ensuring stable quality and reliable cost.",
  },
  {
    icon: Wrench,
    title: "Finishing Execution",
    description:
      "All installations are done by our own trained team — not outsourced — delivering accurate leveling, clean joints and consistent finishing.",
  },
  {
    icon: Users,
    title: "Site Coordination",
    description:
      "We coordinate with contractors and other trades to avoid clashes, maintain sequencing and ensure the specification is followed.",
  },
  {
    icon: Lightbulb,
    title: "Technical Support",
    description:
      "We advise on correct material selection, technical usage, budgeting and matching each product with its best application.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement Check",
    description:
      "Understanding your project needs and specifications",
  },
  {
    number: "02",
    title: "Budget Alignment",
    description: "Clear pricing and cost planning",
  },
  {
    number: "03",
    title: "Material Sourcing",
    description: "Importing verified quality materials",
  },
  {
    number: "04",
    title: "On-Site Execution",
    description: "Professional installation by our team",
  },
  {
    number: "05",
    title: "QC & Handover",
    description: "Final inspection and project delivery",
  },
];

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F5F5F0]"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#1C1C1C] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#C6A664]">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Premium materials supply & controlled finishing
              execution across Kenya & East Africa.
            </p>
            <Link to="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-[#C6A664] text-[#1C1C1C] px-8 py-3 font-semibold hover:bg-[#D4B872] transition-colors"
              >
                VIEW MATERIALS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
              Professional Supply & Finishing Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ANUBIS OLD STONES LTD supplies and installs
              Granite, Marble, Ceramic and German Laminate with
              controlled finishing, strict technical standards
              and full on-site coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1C1C1C]"
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  {/* <div className="mb-4">
                    <Icon className="w-12 h-12 text-[#C6A664] group-hover:scale-110 transition-transform" />
                  </div> */}
                  <h3 className="text-2xl font-bold mb-4 text-[#1C1C1C]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1C1C]">
              Our Execution Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deliver quality results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-start gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#C6A664] text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-[#1C1C1C]">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="w-full h-px bg-gray-200 mt-8"></div>
                  )}
                </div>
                <div className="flex-shrink-0 pt-4">
                  <CheckCircle className="w-8 h-8 text-[#C6A664]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us today for a consultation and quotation
            </p>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-[#C6A664] text-[#1C1C1C] px-10 py-4 text-lg font-semibold hover:bg-[#D4B872] transition-colors"
            >
              GET IN TOUCH
            </motion.button>
              </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}