"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function TopHeader() {
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

  return (
    <div className="hidden md:flex justify-between items-center px-8 py-2 text-white/80 text-sm border-b border-white/10">
      <div>+94 345 5324 5678</div>
      <div className="flex items-center gap-4">
        <motion.div className="flex gap-4" variants={stagger} initial="initial" animate="animate">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              className="hover:text-white transition-colors"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
        <div className="flex gap-4 ml-4">
          <Link href="/login" className="hover:text-white transition-colors">LOGIN</Link>
          <span>|</span>
          <Link href="/register" className="hover:text-white transition-colors">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}
