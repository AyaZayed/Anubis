import { Link } from "react-router-dom";
import { Facebook, Instagram, Music, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/9510351381a969aadcdda0e25f5da9d4bf65f2bb.png";

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
            <img src={logo} alt="Anubis Old Stones" className="h-12 mb-4" />
            <p className="text-[#B7B7B7] mb-4">
              Premium Material — Professional Execution
            </p>
            <p className="text-[#B7B7B7] text-sm">
              Specialist supplier and finishing contractor for granite, marble, ceramic, and German laminate materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C6A664] mb-4">Quick Links</h3>
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
            <h3 className="text-[#C6A664] mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-[#B7B7B7]">
              <a href="tel:+254123456789" className="flex items-center gap-2 hover:text-[#C6A664] transition-colors">
                <Phone size={16} />
                <span>+254 123 456 789</span>
              </a>
              <a href="mailto:info@anubisoldstones.com" className="flex items-center gap-2 hover:text-[#C6A664] transition-colors">
                <Mail size={16} />
                <span>info@anubisoldstones.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#C6A664] mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-[#C6A664]/10 hover:bg-[#C6A664] text-white rounded flex items-center justify-center transition-colors"
              >
                <Music size={20} />
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
