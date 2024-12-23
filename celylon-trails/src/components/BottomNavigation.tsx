"use client";

import { motion } from "framer-motion";
import { Building2, Car, Plane, Map, Ship, Sparkles } from "lucide-react";

// Define a type for the menu keys
type MenuItemKey = "hotels" | "car-rentals" | "flights" | "trips" | "cruises" | "activities";

// Define a type for the props
interface BottomNavigationProps {
  onItemClick: (key: MenuItemKey) => void;
}

export function BottomNavigation({ onItemClick }: BottomNavigationProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const menuItems: { name: string; icon: any; color: string; key: MenuItemKey }[] = [
    { name: "HOTELS", icon: Building2, color: "bg-orange-500", key: "hotels" },
    { name: "CAR RENTALS", icon: Car, color: "bg-white", key: "car-rentals" },
    { name: "FLIGHTS", icon: Plane, color: "bg-white", key: "flights" },
    { name: "TRIPS", icon: Map, color: "bg-white", key: "trips" },
    { name: "CRUISES", icon: Ship, color: "bg-white", key: "cruises" },
    { name: "ACTIVITIES", icon: Sparkles, color: "bg-white", key: "activities" },
  ];

  return (
    <motion.div
      className="local bottom-0 left-40 right-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-white rounded-t-[40px]" />

        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.key}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                onClick={() => onItemClick(item.key)}
                className={`cursor-pointer transition-all rounded-xl p-2 text-gray-700 ${item.color}`}
              >
                <div className="flex flex-col items-center gap-1">
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
