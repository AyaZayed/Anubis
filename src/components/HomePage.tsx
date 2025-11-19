import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";

export function HomePage() {
  const [callbackForm, setCallbackForm] = useState({ name: "", phone: "", message: "" });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setCallbackForm({ name: "", phone: "", message: "" });
  };

  const collections = [
      { id: "egyptian-granite", name: "Egyptian Granite" },
      { id: "egyptian-marble", name: "Egyptian Marble" },
      { id: "turkish-marble", name: "Turkish Marble" },
      { id: "italian-marble", name: "Italian Marble" },
      { id: "german-laminate", name: "German Laminate" },
   ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F5F5F0]"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1C1C1C] flex items-center">
        <div className="absolute inset-0">
          <img
            src={"https://res.cloudinary.com/dijc5luus/image/upload/v1763567565/background_rafl1o.jpg"}
            alt="Ancient stone background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6 text-[3rem] md:text-[4rem] leading-tight">
              Beauty Carved Through Centuries
            </h1>
            <p className="text-white/90 text-lg mb-12">
              Formed over millennia. Finished with precision
            </p>
            <Link to="/collections">
              <Button className="cursor-pointer bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] px-10 py-6">
                VIEW COLLECTIONS
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-[#C6A664] mb-8 text-2xl font-serif font-bold">Who We Are</h2>
          <p className="text-[#1C1C1C] text-lg leading-relaxed mb-6">
            <strong>ANUBIS OLD STONES LTD</strong> is a registered material supplier and finishing contractor based in Nairobi – importing selected Granite, Marble, Ceramic and German Laminate from Egypt, Italy, Turkey and Germany.
          </p>
          <p className="text-[#1C1C1C] text-lg leading-relaxed">
            We work with a technical mindset, strict quality monitoring and on-site coordination to ensure the final finish matches specification.
          </p>
        </motion.div>
      </section>

      {/* What We Supply */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A664] mb-12 max-w-4xl"
          >
            What We Supply
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {collections.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Link to={`/collection/${item.id}`} className="w-full">
                  <div className="bg-[#2A2A2A] p-8 border border-[#C6A664]/20 hover:border-[#C6A664] transition-all cursor-pointer group h-full flex items-center">
                    <p className="text-white group-hover:text-[#C6A664] transition-colors">{item.name}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Callback Request Section */}
      <section className="py-24 bg-[#F5F5F0]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1728242410399-0c272a7703fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2MzQwOTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ancient Egyptian hieroglyphics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#C6A664] mb-6">Request a Callback</h2>
              <p className="text-[#1C1C1C] mb-8 text-lg">
                Let us help you find the perfect stone for your project. Leave your details and we'll get back to you.
              </p>
              <form onSubmit={handleCallbackSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                    required
                    className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={callbackForm.phone}
                    onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                    required
                    className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project (optional)"
                    value={callbackForm.message}
                    onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                    rows={4}
                    className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                  />
                </div>
                <Button type="submit" className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] px-8 py-6 w-full md:w-auto">
                  REQUEST CALLBACK
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
