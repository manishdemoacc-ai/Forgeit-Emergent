import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Toaster } from "./components/ui/sonner";

// Demo Pages
import { RestaurantDemo } from "./pages/demos/RestaurantDemo";
import { StoreDemo } from "./pages/demos/StoreDemo";
import { ClinicDemo } from "./pages/demos/ClinicDemo";

// Pricing Detail Pages
import { StarterPricing } from "./pages/pricing/StarterPricing";
import { BusinessPricing } from "./pages/pricing/BusinessPricing";
import { SupportPricing } from "./pages/pricing/SupportPricing";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Demo Routes */}
            <Route path="/demo/restaurant" element={<RestaurantDemo />} />
            <Route path="/demo/store" element={<StoreDemo />} />
            <Route path="/demo/clinic" element={<ClinicDemo />} />
            
            {/* Pricing Detail Routes */}
            <Route path="/pricing/starter" element={<StarterPricing />} />
            <Route path="/pricing/business" element={<BusinessPricing />} />
            <Route path="/pricing/support" element={<SupportPricing />} />
          </Routes>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
