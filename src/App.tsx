import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import DeveloppementWeb from "./pages/DeveloppementWeb";
import DeveloppementWebSpecialisee from "./pages/DeveloppementWebSpecialisee";
import DeveloppementMobile from "./pages/DeveloppementMobile";
import QuiSommesNous from "./pages/QuiSommesNous";
import Referencement from "./pages/Referencement";
import Services from "./pages/Services";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/developpement-web" element={<DeveloppementWeb />} />
            <Route path="/developpement-web-specialisee" element={<DeveloppementWebSpecialisee />} />
            <Route path="/developpement-mobile" element={<DeveloppementMobile />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/referencement" element={<Referencement />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
