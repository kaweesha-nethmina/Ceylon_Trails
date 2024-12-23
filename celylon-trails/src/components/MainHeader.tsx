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
      className="flex justify-between items-center px-8 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        <span className="text-2xl font-bold text-white">TRAVELIX</span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-8 text-white">
          {["HOME", "ABOUT US", "OFFERS", "NEWS", "CONTACT"].map((item) => (
            <NavigationMenuItem key={item}>
              <Link href="#" className="hover:text-purple-300 transition-colors">
                {item}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 text-white cursor-pointer hover:text-purple-300 transition-colors" />
        <Button variant="ghost" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </motion.header>
  );
}
