"use client";

import { motion } from "framer-motion";

export function BottomNavigation() {
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
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-4 px-8"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-white text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {["HOTELS", "CAR RENTALS", "FLIGHTS", "TRIPS", "CRUISES", "ACTIVITIES"].map((item) => (
            <motion.div
              key={item}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer hover:text-purple-300 transition-all"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
