import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// Collection data with descriptions for each item
const collectionsData: Record<string, {
  name: string;
  description: string;
  origin: string;
  subcategories: {
    name: string;
    description: string;
    items: { 
      name: string; 
      image: string; 
      specs?: string;
      description: string;
    }[];
  }[];
}> = {
  "egyptian-granite-marble": {
    name: "Egyptian Granite & Marble",
    description: "Sourced from the ancient quarries of Egypt, these stones carry millennia of natural formation. Each piece reflects the timeless beauty that built the pyramids and temples of antiquity.",
    origin: "Egypt",
    subcategories: [
      {
        name: "Granite",
        description: "Durable granite formations from Aswan and the Eastern Desert, known for exceptional hardness and rich, deep colors.",
        items: [
          { 
            name: "Aswan Black", 
            image: "https://images.unsplash.com/photo-1611480191880-3730b46f8ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Polished finish",
            description: "Deep black granite with subtle silver flecking, quarried from ancient Aswan sites. Exceptional durability for high-traffic areas."
          },
          { 
            name: "Nile Grey", 
            image: "https://images.unsplash.com/photo-1674831309300-5a38ba6a3092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Honed finish",
            description: "Sophisticated grey granite with natural veining patterns. Perfect for contemporary interiors requiring understated elegance."
          },
          { 
            name: "Sahara Gold", 
            image: "https://images.unsplash.com/photo-1677754598609-50a3754f5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Brushed finish",
            description: "Warm golden granite with amber undertones, evoking the desert landscape. Ideal for creating inviting, luxury spaces."
          },
        ]
      },
      {
        name: "Marble",
        description: "Premium Egyptian marble with warm, creamy tones and subtle veining, perfect for sophisticated interior applications.",
        items: [
          { 
            name: "Cairo Cream", 
            image: "https://images.unsplash.com/photo-1677754598609-50a3754f5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Polished",
            description: "Creamy beige marble with delicate veining. A timeless choice for flooring, walls, and countertops in elegant spaces."
          },
          { 
            name: "Luxor Beige", 
            image: "https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Honed",
            description: "Soft beige marble with subtle brown veining, named after the ancient city. Perfect for traditional and contemporary designs."
          },
        ]
      }
    ]
  },
  "turkish-granite-marble": {
    name: "Turkish Granite & Marble",
    description: "From the highlands of Anatolia and the coasts of the Aegean, Turkish stone brings dynamic patterns and superior structural integrity.",
    origin: "Turkey",
    subcategories: [
      {
        name: "Granite",
        description: "Robust granite varieties with distinctive grain patterns and exceptional weather resistance.",
        items: [
          { 
            name: "Anatolia Grey", 
            image: "https://images.unsplash.com/photo-1674831309300-5a38ba6a3092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Medium grey granite with distinctive movement and character. Excellent for both interior and exterior applications."
          },
          { 
            name: "Bosphorus Black", 
            image: "https://images.unsplash.com/photo-1761864419043-1a7fb363de47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Rich black granite with subtle gold veining. Creates dramatic, sophisticated spaces with timeless appeal."
          },
          { 
            name: "Istanbul Brown", 
            image: "https://images.unsplash.com/photo-1611480191880-3730b46f8ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Warm brown granite with natural depth and variation. Ideal for creating warm, inviting commercial and residential spaces."
          },
        ]
      }
    ]
  },
  "italian-marble": {
    name: "Italian Marble Series",
    description: "The pinnacle of marble craftsmanship from the quarries of Carrara and Tuscany. These marbles have adorned the world's finest architecture for centuries.",
    origin: "Italy",
    subcategories: [
      {
        name: "Classic Whites",
        description: "Pure white marbles with elegant veining, the standard for luxury and refinement.",
        items: [
          { 
            name: "Carrara White", 
            image: "https://images.unsplash.com/photo-1721678597454-8124f3e85c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "The iconic white marble with grey veining, used by Michelangelo. Perfect for luxury bathrooms, kitchens, and feature walls."
          },
          { 
            name: "Calacatta Gold", 
            image: "https://images.unsplash.com/photo-1677754598609-50a3754f5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Premium white marble with distinctive gold and grey veining. The ultimate statement piece for prestigious projects."
          },
          { 
            name: "Statuario", 
            image: "https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Rare white marble with bold grey veining. Exclusive material for high-end residential and commercial applications."
          },
        ]
      },
      {
        name: "Rich Darks",
        description: "Deep, dramatic marbles that create bold statements in any space.",
        items: [
          { 
            name: "Emperador Dark", 
            image: "https://images.unsplash.com/photo-1611480191880-3730b46f8ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Deep brown marble with white and gold veining. Creates luxurious, dramatic interiors with unmatched sophistication."
          },
        ]
      }
    ]
  },
  "egyptian-ceramic": {
    name: "Egyptian Ceramic",
    description: "Modern ceramic tiles inspired by ancient Egyptian craftsmanship, manufactured to German standards with Egyptian aesthetic sensibilities.",
    origin: "Egypt",
    subcategories: [
      {
        name: "Floor Series",
        description: "High-traffic ceramic tiles with superior wear resistance and moisture protection.",
        items: [
          { 
            name: "Desert Sand 60x60", 
            image: "https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Matt finish",
            description: "Large format floor tiles in warm sand tones. Non-slip surface ideal for high-traffic commercial and residential areas."
          },
          { 
            name: "Nile Blue 45x45", 
            image: "https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Glazed",
            description: "Vibrant blue glazed ceramic inspired by the Nile. Perfect for feature walls and spa-like bathroom environments."
          },
        ]
      },
      {
        name: "Wall Series",
        description: "Elegant wall tiles perfect for bathrooms and feature walls.",
        items: [
          { 
            name: "Pyramid White 30x60", 
            image: "https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "Glossy",
            description: "Crisp white glossy tiles that reflect light beautifully. Ideal for creating bright, clean bathroom and kitchen spaces."
          },
        ]
      }
    ]
  },
  "turkish-ceramic": {
    name: "Turkish Ceramic",
    description: "Contemporary Turkish ceramics combining traditional techniques with modern design, offering diverse patterns and exceptional durability.",
    origin: "Turkey",
    subcategories: [
      {
        name: "Large Format",
        description: "Oversized tiles for seamless, modern installations with minimal grout lines.",
        items: [
          { 
            name: "Istanbul Modern 60x120", 
            image: "https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Contemporary large format tiles with subtle stone effect. Perfect for creating seamless, modern floor and wall installations."
          },
          { 
            name: "Cappadocia Grey 60x60", 
            image: "https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Large grey tiles inspired by Cappadocia's unique landscape. Ideal for commercial and residential modern designs."
          },
        ]
      },
      {
        name: "Standard Format",
        description: "Versatile sizes suitable for both residential and commercial applications.",
        items: [
          { 
            name: "Aegean Stone 30x60", 
            image: "https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            description: "Natural stone-effect ceramic in versatile dimensions. Perfect for both walls and floors in various applications."
          },
        ]
      }
    ]
  },
  "german-laminate": {
    name: "Premium German Laminate Series",
    description: "Precision-engineered German laminates offering the warmth of natural wood with superior durability and moisture resistance. Perfect for modern living spaces.",
    origin: "Germany",
    subcategories: [
      {
        name: "Classic Woods",
        description: "Authentic wood reproductions with advanced wear layer technology and lifetime warranties.",
        items: [
          { 
            name: "Berlin Oak", 
            image: "https://images.unsplash.com/photo-1639890460733-49c80e1e5e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "AC5 rating",
            description: "Premium oak laminate with natural grain patterns and texture. AC5 commercial-grade durability for high-traffic areas."
          },
          { 
            name: "Munich Walnut", 
            image: "https://images.unsplash.com/photo-1639890460733-49c80e1e5e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "AC5 rating",
            description: "Rich walnut finish with authentic wood character. German engineering ensures long-lasting beauty and performance."
          },
          { 
            name: "Hamburg Pine", 
            image: "https://images.unsplash.com/photo-1639890460733-49c80e1e5e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", 
            specs: "AC4 rating",
            description: "Light pine laminate bringing Scandinavian warmth. AC4 residential-grade, perfect for living areas and bedrooms."
          },
        ]
      }
    ]
  }
};

export function CollectionDetail() {
  const { id } = useParams<{ id: string }>();
  const [currentSlide, setCurrentSlide] = useState<Record<string, number>>({});
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    material: "",
    message: ""
  });
  
  if (!id || !collectionsData[id]) {
    return (
      <div className="min-h-screen py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-[#C6A664] mb-6">Collection Not Found</h1>
          <Link to="/collections" className="text-[#1C1C1C] hover:text-[#C6A664] transition-colors">
            ← Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  const collection = collectionsData[id];

  const nextSlide = (subcategoryName: string, maxItems: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [subcategoryName]: ((prev[subcategoryName] || 0) + 1) % maxItems
    }));
  };

  const prevSlide = (subcategoryName: string, maxItems: number) => {
    setCurrentSlide(prev => ({
      ...prev,
      [subcategoryName]: ((prev[subcategoryName] || 0) - 1 + maxItems) % maxItems
    }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We will send you a quotation for ${quoteForm.material} shortly.`);
    setQuoteForm({ name: "", email: "", phone: "", material: "", message: "" });
  };

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
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1728242410399-0c272a7703fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2MzQwOTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ancient patterns"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 text-[#C6A664] hover:text-[#C6A664]/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Collections
          </Link>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-[#C6A664]">{collection.name}</h1>
              <span className="px-4 py-1 bg-[#C6A664]/20 text-[#C6A664] border border-[#C6A664]/40 text-sm">
                {collection.origin}
              </span>
            </div>
            <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
              {collection.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories with Sliders */}
      {collection.subcategories.map((subcategory, catIndex) => (
        <section key={catIndex} className={`py-24 ${catIndex % 2 === 0 ? 'bg-[#F5F5F0]' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[#C6A664] mb-4">{subcategory.name}</h2>
              <p className="text-[#1C1C1C]/80 max-w-3xl">
                {subcategory.description}
              </p>
            </motion.div>
            
            {/* Material Slider */}
            <div className="relative max-w-5xl mx-auto">
              {subcategory.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: (currentSlide[subcategory.name] || 0) === itemIndex ? 1 : 0,
                    display: (currentSlide[subcategory.name] || 0) === itemIndex ? 'grid' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="aspect-square overflow-hidden bg-[#1C1C1C] border-2 border-[#C6A664]/30">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-[#C6A664] mb-3">{item.name}</h3>
                    {item.specs && (
                      <p className="text-[#B7B7B7] mb-4 text-sm">{item.specs}</p>
                    )}
                    <p className="text-[#1C1C1C] mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <Button 
                      onClick={() => setQuoteForm({ ...quoteForm, material: item.name })}
                      className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C]"
                    >
                      Request Quotation
                    </Button>
                  </div>
                </motion.div>
              ))}
              
              {/* Slider Controls */}
              {subcategory.items.length > 1 && (
                <>
                  <button
                    onClick={() => prevSlide(subcategory.name, subcategory.items.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => nextSlide(subcategory.name, subcategory.items.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {subcategory.items.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(prev => ({ ...prev, [subcategory.name]: idx }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          (currentSlide[subcategory.name] || 0) === idx 
                            ? 'bg-[#C6A664] w-8' 
                            : 'bg-[#B7B7B7]'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quotation Form */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#C6A664] mb-6 text-center">Request a Quotation</h2>
              <p className="text-white/90 mb-8 text-center">
                Fill out the form below and we'll provide you with detailed pricing and specifications for your selected materials.
              </p>
              
              <form onSubmit={handleQuoteSubmit} className="space-y-6 bg-[#2A2A2A] p-8 border border-[#C6A664]/20">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    required
                    className="bg-[#1C1C1C] border-[#C6A664]/30 text-white placeholder:text-[#B7B7B7] focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    required
                    className="bg-[#1C1C1C] border-[#C6A664]/30 text-white placeholder:text-[#B7B7B7] focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone *"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    required
                    className="bg-[#1C1C1C] border-[#C6A664]/30 text-white placeholder:text-[#B7B7B7] focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Material Name (e.g., Berlin Oak) *"
                    value={quoteForm.material}
                    onChange={(e) => setQuoteForm({ ...quoteForm, material: e.target.value })}
                    required
                    className="bg-[#1C1C1C] border-[#C6A664]/30 text-white placeholder:text-[#B7B7B7] focus:border-[#C6A664]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Project Details (optional)"
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    rows={4}
                    className="bg-[#1C1C1C] border-[#C6A664]/30 text-white placeholder:text-[#B7B7B7] focus:border-[#C6A664]"
                  />
                </div>
                <Button type="submit" className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C] px-8 py-6 w-full">
                  REQUEST QUOTATION
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
