import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
   useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { CollectionsPage } from "./components/CollectionsPage";
import { CollectionDetail } from "./components/CollectionDetail";
import { ServicesPage } from "./components/ServicesPage";
import { ContactPage } from "./components/ContactPage";

// Define which routes use which theme
const routeThemes: Record<string, "light" | "dark"> = {
   "/": "dark", // HomePage - dark background
   "/about": "dark", // AboutPage - light background
   "/collections": "light", // CollectionsPage - light background
   "/services": "dark", // ServicesPage - light background
   "/contact": "dark", // ContactPage - light background
};

function AppContent() {
   const location = useLocation();

   // Determine theme based on current route
   // For collection detail pages, check if path starts with /collection/
   const getTheme = () => {
      if (location.pathname.startsWith("/collection/")) {
         return "light"; // or 'dark' depending on your CollectionDetail design
      }
      return routeThemes[location.pathname] || "dark";
   };

   return (
      <div className="flex flex-col min-h-screen">
         <Header theme={getTheme()} />
         <main className="flex-grow">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/collections" element={<CollectionsPage />} />
               <Route path="/collection/:id" element={<CollectionDetail />} />
               <Route path="/services" element={<ServicesPage />} />
               <Route path="/contact" element={<ContactPage />} />
               <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default function App() {
   return (
      <Router>
         <AppContent />
      </Router>
   );
}
