import { Link } from "react-router-dom";
import { motion } from "motion/react";

const collections = [
  {
    id: "egyptian-granite-marble",
    name: "Egyptian Granite & Marble",
    image: "https://images.unsplash.com/photo-1611480191880-3730b46f8ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGdyYW5pdGUlMjBibGFja3xlbnwxfHx8fDE3NjI0Njc2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "turkish-granite-marble",
    name: "Turkish Granite & Marble",
    image: "https://images.unsplash.com/photo-1674831309300-5a38ba6a3092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZ3Jhbml0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYyNDY3Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "italian-marble",
    name: "Italian Marble Series",
    image: "https://images.unsplash.com/photo-1721678597454-8124f3e85c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwbWFyYmxlJTIwd2hpdGV8ZW58MXx8fHwxNzYyNDY3Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "egyptian-ceramic",
    name: "Egyptian Ceramic",
    image: "https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZSUyMHBhdHRlcm58ZW58MXx8fHwxNzYyNDU3ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "turkish-ceramic",
    name: "Turkish Ceramic",
    image: "https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjZXJhbWljJTIwdGlsZXN8ZW58MXx8fHwxNzYyNDYzNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "german-laminate",
    name: "Premium German Laminate Series",
    image: "https://images.unsplash.com/photo-1639890460733-49c80e1e5e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwbGFtaW5hdGUlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MjQ2NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CollectionsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 bg-[#F5F5F0]"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#C6A664] mb-12"
        >
          Collections
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/collection/${collection.id}`}
                className="group cursor-pointer block"
              >
                <div className="aspect-square overflow-hidden bg-[#1C1C1C] mb-4 border-2 border-[#B7B7B7]/20 group-hover:border-[#C6A664] transition-all">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[#1C1C1C] group-hover:text-[#C6A664] transition-colors">
                  {collection.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
