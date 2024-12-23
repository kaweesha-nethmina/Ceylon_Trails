"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export function MainHeader() {
  return (
    <motion.header
      className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-800 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        <span className="text-1xl font-bold text-white">CEYLON TRAILS</span>
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-8 text-gray-300">
          {["HOME", "ABOUT US", "OFFERS", "NEWS", "CONTACT"].map((item) => (
            <NavigationMenuItem key={item}>
              <Link href="#" className="hover:text-gray-100 transition-colors">
                {item}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search and Menu Icons */}
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-100 transition-colors" />
        <Button variant="ghost" className="md:hidden text-gray-300">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </motion.header>
  );
}
