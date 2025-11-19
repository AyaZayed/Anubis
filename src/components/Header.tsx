import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/9510351381a969aadcdda0e25f5da9d4bf65f2bb.png";
import { BsTwitterX } from "react-icons/bs";

interface HeaderProps {
   theme?: "light" | "dark"; // 'light' = dark text, 'dark' = light text
}

export function Header({ theme = "dark" }: HeaderProps) {
   const location = useLocation();
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const isActive = (path: string) => location.pathname === path;

   // Dynamic colors based on scroll and theme
   const textColor = scrolled
      ? "text-white"
      : theme === "dark"
      ? "text-white"
      : "text-[#1C1C1C]";

   const hamburgerColor = scrolled
      ? "bg-white"
      : theme === "dark"
      ? "bg-white"
      : "bg-[#1C1C1C]";

   const hoverColor = "hover:text-[#C6A664]";

   return (
      <header
         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
               ? "bg-[#1C1C1C]/35 backdrop-blur-md border-b border-[#C6A664]/20"
               : "bg-transparent"
         }`}>
         <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
               <Link to="/" className="flex items-center">
                  <img
                     src={logo}
                     alt="Anubis Old Stones"
                     className="h-12 md:h-14"
                  />
               </Link>

               {/* Desktop Navigation */}
               <nav className="hidden lg:flex items-center gap-8">
                  <Link
                     to="/"
                     className={`transition-colors ${
                        isActive("/")
                           ? "text-[#C6A664]"
                           : `${textColor} ${hoverColor}`
                     }`}>
                     Home
                  </Link>
                  <Link
                     to="/about"
                     className={`transition-colors ${
                        isActive("/about")
                           ? "text-[#C6A664]"
                           : `${textColor} ${hoverColor}`
                     }`}>
                     About
                  </Link>
                  <Link
                     to="/collections"
                     className={`transition-colors ${
                        isActive("/collections") ||
                        location.pathname.startsWith("/collection/")
                           ? "text-[#C6A664]"
                           : `${textColor} ${hoverColor}`
                     }`}>
                     Collections
                  </Link>
                  <Link
                     to="/services"
                     className={`transition-colors ${
                        isActive("/services")
                           ? "text-[#C6A664]"
                           : `${textColor} ${hoverColor}`
                     }`}>
                     Services
                  </Link>
                  <Link
                     to="/contact"
                     className={`transition-colors ${
                        isActive("/contact")
                           ? "text-[#C6A664]"
                           : `${textColor} ${hoverColor}`
                     }`}>
                     Contact
                  </Link>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[#C6A664]/30">
                     <a
                        href="https://www.facebook.com/share/1ARzYJNEKb/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textColor} ${hoverColor} transition-colors`}>
                        <Facebook size={18} />
                     </a>
                     <a
                        href="https://www.instagram.com/anubisoldston?igsh=MWJzaDhiM29uNms1cA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textColor} ${hoverColor} transition-colors`}>
                        <Instagram size={18} />
                     </a>
                     <a
                        href="https://www.linkedin.com/company/anubis-old-stones-ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textColor} ${hoverColor} transition-colors`}>
                        <Linkedin size={20} />
                     </a>
                     <a
                        href="https://www.x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${textColor} ${hoverColor} transition-colors`}>
                        <BsTwitterX size={16} />
                     </a>
                  </div>
               </nav>

               {/* Mobile Menu Button */}
               <button
                  className={`lg:hidden ${textColor} p-2`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu">
                  <div className="w-6 h-5 flex flex-col justify-between">
                     <span
                        className={`w-full h-0.5 ${hamburgerColor} transition-all ${
                           mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                     />
                     <span
                        className={`w-full h-0.5 ${hamburgerColor} ${
                           mobileMenuOpen ? "opacity-0" : ""
                        }`}
                     />
                     <span
                        className={`w-full h-0.5 ${hamburgerColor} transition-all ${
                           mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                     />
                  </div>
               </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
               <nav className="lg:hidden pt-6 pb-2 flex flex-col gap-4 border-t border-[#C6A664]/20 mt-4 bg-[#1C1C1C]/95 -mx-6 px-6 pb-4">
                  <Link
                     to="/"
                     onClick={() => setMobileMenuOpen(false)}
                     className={`py-2 ${
                        isActive("/") ? "text-[#C6A664]" : "text-white"
                     }`}>
                     Home
                  </Link>
                  <Link
                     to="/about"
                     onClick={() => setMobileMenuOpen(false)}
                     className={`py-2 ${
                        isActive("/about") ? "text-[#C6A664]" : "text-white"
                     }`}>
                     About
                  </Link>
                  <Link
                     to="/collections"
                     onClick={() => setMobileMenuOpen(false)}
                     className={`py-2 ${
                        isActive("/collections") ||
                        location.pathname.startsWith("/collection/")
                           ? "text-[#C6A664]"
                           : "text-white"
                     }`}>
                     Collections
                  </Link>
                  <Link
                     to="/services"
                     onClick={() => setMobileMenuOpen(false)}
                     className={`py-2 ${
                        isActive("/services") ? "text-[#C6A664]" : "text-white"
                     }`}>
                     Services
                  </Link>
                  <Link
                     to="/contact"
                     onClick={() => setMobileMenuOpen(false)}
                     className={`py-2 ${
                        isActive("/contact") ? "text-[#C6A664]" : "text-white"
                     }`}>
                     Contact
                  </Link>

                  {/* Mobile Social Icons */}
                  <div className="flex items-center gap-6 pt-4 border-t border-[#C6A664]/20">
                     <a
                        href="https://www.facebook.com/share/1ARzYJNEKb/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#C6A664] transition-colors">
                        <Facebook size={20} />
                     </a>
                     <a
                        href="https://www.instagram.com/anubisoldston?igsh=MWJzaDhiM29uNms1cA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#C6A664] transition-colors">
                        <Instagram size={20} />
                     </a>
                     <a
                        href="https://www.linkedin.com/company/anubis-old-stones-ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#C6A664] transition-colors">
                        <Linkedin size={20} />
                     </a>
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#C6A664] transition-colors">
                        <BsTwitterX size={16} />
                     </a>
                  </div>
               </nav>
            )}
         </div>
      </header>
   );
}
