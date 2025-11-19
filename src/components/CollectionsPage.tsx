import { Link } from "react-router-dom";
import { motion } from "motion/react";

const collections = [
   {
      id: "egyptian-granite",
      name: "Egyptian Granite",
      image: "https://res.cloudinary.com/dijc5luus/image/upload/v1763554889/egyptian_granite_4_wkvfne.jpg",
   },
   {
      id: "egyptian-marble",
      name: "Egyptian Marble",
      image: "https://res.cloudinary.com/dijc5luus/image/upload/v1763554913/egyptian_marble_3_enbfqf.jpg",
   },
   {
      id: "turkish-marble",
      name: "Turkish Marble",
      image: "https://res.cloudinary.com/dijc5luus/image/upload/v1763554997/turkish_marble_1_ndwusz.jpg",
   },
   {
      id: "italian-marble",
      name: "Italian Marble Series",
      image: "https://res.cloudinary.com/dijc5luus/image/upload/v1763554948/italian_marble_3_zmm3zv.jpg",
   },
   {
      id: "german-laminate",
      name: "Premium German Laminate Series",
      image: "https://res.cloudinary.com/dijc5luus/image/upload/v1763554976/german_laminate_3_dhkc65.png",
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
