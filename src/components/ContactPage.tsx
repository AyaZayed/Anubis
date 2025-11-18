import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F5F5F0]"
    >
      {/* Hero */}
      <section className="py-32 bg-[#1C1C1C]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A664] mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-xl"
          >
            Let's discuss your next project
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#C6A664] mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-white border-[#B7B7B7]/30 focus:border-[#C6A664]"
                />
              </div>
              <Button type="submit" className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] px-8 py-6 w-full">
                SEND MESSAGE
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[#C6A664] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C6A664]/10 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C6A664]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#B7B7B7] mb-1">Email</p>
                    <a 
                      href="mailto:anubisoldstones@outlook.com" 
                      className="text-[#1C1C1C] hover:text-[#C6A664] transition-colors"
                    >
                      anubisoldstones@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C6A664]/10 rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C6A664]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#B7B7B7] mb-1">Phone</p>
                    <p className="text-[#1C1C1C]">+254 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C6A664]/10 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C6A664]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#B7B7B7] mb-1">Address</p>
                    <p className="text-[#1C1C1C]">P.O.Box: 22485-00505<br />Nairobi, Kenya</p>
                  </div>
                </div>


              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section with Overlapping Card */}
      <section className="pb-0 relative">
        <div className="container mx-auto px-6 mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A664] mb-8 text-center"
          >
            Find Us
          </motion.h2>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[600px] bg-[#B7B7B7]/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036827308!2d36.70730744999999!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nairobi Location"
            />
          </motion.div>

          {/* Overlapping Contact Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 w-[90%] md:w-[400px] bg-white p-8 shadow-2xl border-t-4 border-[#C6A664]"
          >
            <h3 className="text-[#C6A664] mb-6">Quick Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#F5F5F0] border-[#B7B7B7]/30 focus:border-[#C6A664]"
              />
              <Input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#F5F5F0] border-[#B7B7B7]/30 focus:border-[#C6A664]"
              />
              <Input
                type="tel"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-[#F5F5F0] border-[#B7B7B7]/30 focus:border-[#C6A664]"
              />
              <Textarea
                placeholder="Your Message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-[#F5F5F0] border-[#B7B7B7]/30 focus:border-[#C6A664]"
              />
              <Button type="submit" className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] px-6 py-5 w-full">
                SEND MESSAGE
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
