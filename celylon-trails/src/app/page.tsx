"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MainHeader } from "../components/MainHeader";
import { BottomNavigation } from "../components/BottomNavigation";
import dynamic from "next/dynamic";

type MenuItemKey = "hotels" | "car-rentals" | "flights" | "trips" | "cruises" | "activities";

// Dynamic imports with fallback loading indicators
const HotelsContent = dynamic(() => import("./hotels/page"), {
  loading: () => <div className="text-white p-4">Loading Hotels...</div>,
});

const FlightsContent = dynamic(() => import("./flights/page"), {
  loading: () => <div className="text-white p-4">Loading Flights...</div>,
});

export default function Component() {
  const backgroundImages = [
    "/assets/backgroundHome.jpg",
    "/assets/backgroundHome2.jpg",
    "/assets/backgroundHome3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItemKey | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const renderContent = () => {
    switch (selectedItem) {
      case "hotels":
        return <HotelsContent />;
      case "flights":
        return <FlightsContent />;
      case "car-rentals":
        return <div className="text-white p-4">Find car rental deals!</div>;
      case "trips":
        return <div className="text-white p-4">Discover amazing trips!</div>;
      case "cruises":
        return <div className="text-white p-4">Enjoy luxury cruises!</div>;
      case "activities":
        return <div className="text-white p-4">Find exciting activities!</div>;
      default:
        return <div className="text-white p-4">Select an option from the menu</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Main Header */}
      <MainHeader />

      {/* Hero Section */}
      <motion.div
        className="relative h-[80vh] flex items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
              filter: "brightness(0.2)", // Darken background for better text visibility
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block">DISCOVER</span>
            <span className="block font-light italic mt-2">Sri Lanka</span>
          </motion.h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-6 rounded-full text-lg font-semibold">
              EXPLORE NOW
            </Button>
          </motion.div>
        </div>
      </motion.div>


      {/* Bottom Navigation */}
      <BottomNavigation onItemClick={(key: MenuItemKey) => setSelectedItem(key)} />

      {/* Render dynamic content with animation */}
      <div className="mt-6 container mx-auto px-4">
        <AnimatePresence mode="wait">
          {selectedItem && (
            <motion.div
              key={selectedItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              {renderContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
