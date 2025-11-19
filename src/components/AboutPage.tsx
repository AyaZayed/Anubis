import { motion } from "motion/react";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F5F5F0]"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1C1C1C]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1651395268151-76ef9b6d5571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwc3RvbmUlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MzM4NTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beautiful granite texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A664] mb-6"
          >
            About Anubis Old Stones
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-xl"
          >
            Where ancient craftsmanship meets modern precision
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-[#1C1C1C] leading-relaxed text-lg">
            ANUBIS OLD STONES LTD. is a premium materials
            supplier and finishing contractor based in Nairobi —
            importing Granite, Marble and Laminate from Egypt,
            Turkey, Italy and Germany.{" "}
          </p>

          <p className="text-[#1C1C1C] leading-relaxed text-lg">
            We execute installations through our own controlled
            team, ensuring consistent quality across every
            project from procurement through to final
            handover.{" "}
          </p>

          <p className="text-[#1C1C1C] leading-relaxed text-lg">
            We maintain direct relationships with quarries and
            manufacturers across multiple regions, allowing us
            to offer competitive pricing whilst maintaining
            material authenticity and technical
            specifications.{" "}
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A664] mb-16 text-center"
          >
            Our Foundation
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Only the finest materials from trusted sources",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Trained professionals with years of experience",
              },
              {
                icon: Globe,
                title: "Global Sourcing",
                desc: "Direct imports from Egypt, Italy, Turkey & Germany",
              },
              {
                icon: TrendingUp,
                title: "Precision Execution",
                desc: "Technical finishing that meets specifications",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#C6A664]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon
                    className="text-[#C6A664]"
                    size={32}
                  />
                </div>
                <h3 className="text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#B7B7B7]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Egyptian Heritage */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#C6A664] mb-6">
              Ancient Heritage, Modern Excellence
            </h2>
            <p className="text-[#1C1C1C] leading-relaxed mb-6 text-lg">
              Named after Anubis, the ancient Egyptian god of
              craftsmanship and guardian of precious materials,
              our company embodies millennia of stone-working
              tradition.
            </p>
            <p className="text-[#1C1C1C] leading-relaxed text-lg">
              Just as ancient Egyptian artisans carved monuments
              that stand today, we bring that same dedication to
              permanence and precision to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1728242410399-0c272a7703fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2MzQwOTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ancient Egyptian hieroglyphics"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-[#C6A664]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1C1C1C] mb-6">
              Our Commitment
            </h2>
            <p className="text-[#1C1C1C]/90 text-xl leading-relaxed">
              Better sourcing, better technical control, better
              finish. This is our value and our promise to every
              client.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}