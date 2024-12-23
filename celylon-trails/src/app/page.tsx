"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TopHeader } from "../components/TopHeader";
import { MainHeader } from "../components/MainHeader";
import { BottomNavigation } from "../components/BottomNavigation";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#2D1B69]">
      {/* Top Header */}
      <TopHeader />

      {/* Main Header */}
      <MainHeader />

      {/* Hero Section */}
      <motion.div
        className="relative h-[80vh] flex items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block">DISCOVER</span>
            <span className="block font-light italic mt-2">the world</span>
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
      <BottomNavigation />
    </div>
  );
}
