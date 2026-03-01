import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import { AuthProvider } from "@/lib/authContext";

// Lazy load pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));

// Service pages
const EngineeringServices = lazy(() => import("./pages/services/Engineering"));
const Procurement = lazy(() => import("./pages/services/Procurement"));
const Construction = lazy(() => import("./pages/services/Construction"));
const MarineOffshore = lazy(() => import("./pages/services/MarineOffshore"));
const Dredging = lazy(() => import("./pages/services/Dredging"));
const WasteManagement = lazy(() => import("./pages/services/WasteManagement"));

// Product pages
const IndustrialEquipment = lazy(() => import("./pages/products/IndustrialEquipment"));
const MarineEquipment = lazy(() => import("./pages/products/MarineEquipment"));
const SafetySystems = lazy(() => import("./pages/products/SafetySystems"));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-slate-600">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Service Routes */}
          <Route path="/services/engineering" element={<EngineeringServices />} />
          <Route path="/services/procurement" element={<Procurement />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/marine-offshore" element={<MarineOffshore />} />
          <Route path="/services/dredging" element={<Dredging />} />
          <Route path="/services/waste-management" element={<WasteManagement />} />

          {/* Product Routes */}
          <Route path="/products/industrial-equipment" element={<IndustrialEquipment />} />
          <Route path="/products/marine-equipment" element={<MarineEquipment />} />
          <Route path="/products/safety-systems" element={<SafetySystems />} />

          <Route path="/privacy" element={<About />} />
          <Route path="/terms" element={<About />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
