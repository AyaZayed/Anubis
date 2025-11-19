import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// Collection data with descriptions for each item
// --------------------
// TYPES
// --------------------

export interface CollectionItem {
   name: string;
   image: string;
   description: string;
   specs?: string;
}

export interface Subcategory {
   name: string;
   description: string;
   items: CollectionItem[];
}

export interface Collection {
   name: string;
   description: string;
   origin: string;
   subcategories: Subcategory[];
}

export type CollectionsData = Record<string, Collection>;

// --------------------
// DATA
// --------------------

export const collectionsData: CollectionsData = {
   "egyptian-granite": {
      name: "Egyptian Granite",
      description:
         "Durable density — high strength — reliable pricing. Egyptian granite offers exceptional structural properties with consistent mineral composition. Quarried from stable geological formations, these materials deliver reliable performance in high-traffic commercial and residential applications.",
      origin: "Egypt",
      subcategories: [
         {
            name: "Granite",
            description:
               "High-density granite formations with excellent strength and reliable performance across interior and exterior applications.",
            items: [
               {
                  name: "Egyptian Granite 01",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554888/egyptian_granite_1_j0owjc.jpg",
                  description:
                     "Fine-grain granite with balanced mineral structure, ideal for flooring, counters, and heavy-use surfaces.",
               },
               {
                  name: "Egyptian Granite 02",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554889/egyptian_granite_2_tnqu94.jpg",
                  description:
                     "Strong, consistent granite offering high durability in commercial finishing environments.",
               },
               {
                  name: "Egyptian Granite 03",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554888/egyptian_granite_3_wpkn4k.jpg",
                  description:
                     "Warm-toned granite with natural texture variations; a reliable choice for interior and exterior specifications.",
               },
               {
                  name: "Egyptian Granite 04",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554889/egyptian_granite_4_wkvfne.jpg",
                  description:
                     "Dense granite with stable performance characteristics and excellent structural reliability.",
               },
            ],
         },
      ],
   },

   "egyptian-marble": {
      name: "Egyptian Marble",
      description:
         "Premium patterns — good brightness — cost-efficient. Egyptian marble combines aesthetic versatility with practical pricing structures. Natural veining patterns and consistent brightness levels make these materials suitable for interior feature applications where visual impact is essential.",
      origin: "Egypt",
      subcategories: [
         {
            name: "Marble",
            description:
               "Marble selections offering strong brightness, elegant movement, and excellent value for interior applications.",
            items: [
               {
                  name: "Egyptian Marble 01",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554912/egyptian_marble_1_fllvpk.jpg",
                  description:
                     "Light-toned marble with soft veining, ideal for bright architectural spaces requiring refined aesthetics.",
               },
               {
                  name: "Egyptian Marble 02",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554913/egyptian_marble_2_gmsbeu.jpg",
                  description:
                     "Neutral beige marble with subtle movement, suitable for feature walls and polished interior finishes.",
               },
               {
                  name: "Egyptian Marble 03",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554913/egyptian_marble_3_enbfqf.jpg",
                  description:
                     "Warm cream marble offering balanced veining and consistent tone for modern interior projects.",
               },
               {
                  name: "Egyptian Marble 04",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554913/egyptian_marble_4_vfpp2b.jpg",
                  description:
                     "Premium marble with strong brightness and controlled patterning — ideal for luxury finishes.",
               },
            ],
         },
      ],
   },

   "turkish-marble": {
      name: "Turkish Marble",
      description:
         "Attractive veins — balanced price-versus-look. Turkish marble delivers visual sophistication at entry-level investment points. Distinctive veining characteristics and neutral colour palettes align well with contemporary design specifications across commercial and residential sectors.",
      origin: "Turkey",
      subcategories: [
         {
            name: "Marble",
            description:
               "Elegant Turkish marble with expressive movement and neutral tones suitable for refined interiors.",
            items: [
               {
                  name: "Turkish Marble 01",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554997/turkish_marble_1_ndwusz.jpg",
                  description:
                     "Clean veining with contemporary tones—ideal for both commercial and residential finishing.",
               },
               {
                  name: "Turkish Marble 02",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554998/turkish_marble_2_khodvm.jpg",
                  description:
                     "Soft, neutral marble with refined grain movement, suited for minimal interior concepts.",
               },
               {
                  name: "Turkish Marble 03",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554999/turkish_marble_3_dzinvy.jpg",
                  description:
                     "Modern grey marble with distinct linear veining, adding controlled character to architectural spaces.",
               },
               {
                  name: "Turkish Marble 04",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554999/turkish_marble_4_epykys.jpg",
                  description:
                     "Premium marble featuring bold, expressive patterns—ideal for feature surfaces and high-impact interiors.",
               },
            ],
         },
      ],
   },

   "italian-marble": {
      name: "Italian Marble",
      description:
         "European authenticity — modern neutral tones. Italian marble from our entry range offers genuine European provenance without premium tier pricing. Clean, contemporary aesthetics with subtle veining suit refined architectural specifications where material origin carries design significance.",
      origin: "Italy",
      subcategories: [
         {
            name: "Marble",
            description:
               "Luxury Italian marbles selected for refined veining and contemporary architectural compatibility.",
            items: [
               {
                  name: "Italian Marble 01",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554947/italian_marble_1_zgpiej.jpg",
                  description:
                     "Soft white marble with gentle grey movement — a timeless modern European finish.",
               },
               {
                  name: "Italian Marble 02",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554947/italian_marble_2_u1ubf9.jpg",
                  description:
                     "Neutral-toned marble with subtle veining offering minimalist architectural appeal.",
               },
               {
                  name: "Italian Marble 03",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554948/italian_marble_3_zmm3zv.jpg",
                  description:
                     "Elegant stone with structured veining—suitable for premium interior feature applications.",
               },
            ],
         },
      ],
   },

   "german-laminate": {
      name: "Premium German Laminate Series",
      description:
         "Stable core — precision finishing — engineered consistency. German-engineered laminate systems deliver dimensional stability and surface consistency that natural stone cannot match. Multi-layer construction with precision finishing enables predictable performance in moisture-variable environments and temperature-sensitive applications.",
      origin: "Germany",
      subcategories: [
         {
            name: "Laminate",
            description:
               "High-performance laminates engineered for stability, realistic texture, and long-term surface consistency.",
            items: [
               {
                  name: "German Laminate 01",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554974/german_laminate_1_js8sgq.png",
                  description:
                     "Natural-toned laminate with balanced texture and engineered moisture resistance.",
               },
               {
                  name: "German Laminate 02",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554975/german_laminate_2_oepfsd.png",
                  description:
                     "Classic wood finish with excellent dimensional stability and wear resistance.",
               },
               {
                  name: "German Laminate 03",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554976/german_laminate_3_dhkc65.png",
                  description:
                     "High-definition grain texture engineered for modern commercial specifications.",
               },
               {
                  name: "German Laminate 04",
                  image:
                     "https://res.cloudinary.com/dijc5luus/image/upload/v1763554975/german_laminate_4_bqtl9z.png",
                  description:
                     "Light Scandinavian wood tone with consistent finishing and long-term performance.",
               },
            ],
         },
      ],
   },
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
                    <a href="#quote">
                    <Button 
                      onClick={() => setQuoteForm({ ...quoteForm, material: item.name })}
                      className="bg-[#C6A664] hover:bg-[#C6A664]/90 text-[#1C1C1C]"
                    >
                      Request Quotation
                    </Button>
                      </a>
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
      <section className="py-24 bg-[#1C1C1C]" id="quote">
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
