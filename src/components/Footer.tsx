import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin,Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="relative bg-[#1C1C1C] text-white py-16 mt-auto overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726896512442-09e073b678a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHZlaW5zfGVufDF8fHx8MTc2MzQ4Mjk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Marble texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={"https://res.cloudinary.com/dijc5luus/image/upload/v1763567566/logo_kbwzez.png"} alt="Anubis Old Stones" className="h-12 mb-4" />
            <p className="text-[#B7B7B7] mb-4">
              Premium Material — Professional Execution
            </p>
            <p className="text-[#B7B7B7] text-sm">
              Specialist supplier and finishing contractor for granite, marble, and German laminate materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C6A664] mb-4 text-xl font-serif font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-[#B7B7B7] hover:text-[#C6A664] transition-colors">Home</Link>
              <Link to="/about" className="text-[#B7B7B7] hover:text-[#C6A664] transition-colors">About Us</Link>
              <Link to="/collections" className="text-[#B7B7B7] hover:text-[#C6A664] transition-colors">Collections</Link>
              <Link to="/services" className="text-[#B7B7B7] hover:text-[#C6A664] transition-colors">Services</Link>
              <Link to="/contact" className="text-[#B7B7B7] hover:text-[#C6A664] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#C6A664] mb-4 text-xl font-serif font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3 text-[#B7B7B7]">
              <a 
                href="tel:+254123456789" 
                className="flex items-center gap-2 hover:text-[#C6A664] transition-colors"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span>+254 123 456 789</span>
              </a>
              <a 
                href="mailto:info@anubisoldstones.com" 
                className="flex items-center gap-2 hover:text-[#C6A664] transition-colors"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span>info@anubisoldstones.com</span>
              </a>
               <a 
                href="https://maps.app.goo.gl/Y4QUspan4gEeSN527?g_st=ipc" 
                className="flex items-center gap-2 hover:text-[#C6A664] transition-colors"
              >
                <MapPin size={18} className="flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#C6A664] mb-4 text-xl font-serif font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/anubis-old-stones-ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Linkedin size={20} />
              </a>
               <a 
                href="https://www.x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#C6A664]/20 text-center">
          <p className="text-[#B7B7B7] text-sm">
            © {new Date().getFullYear()} Anubis Old Stones Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}