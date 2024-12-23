"use client";

import { motion } from "framer-motion";
import { Building2, Star, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const hotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel",
    location: "Ella, SriLanka",
    rating: 4.8,
    price: "$299",
    image: "/assets/backgroundHome.jpg",
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Negambo, SriLanka",
    rating: 4.9,
    price: "$499",
    image: "/assets/backgroundHome2.jpg",
  },
  {
    id: 3,
    name: "Mountain Lodge",
    location: "Unawatuna, SriLanka",
    rating: 4.7,
    price: "$199",
    image: "/assets/backgroundHome3.jpg",
  },
];

export default function HotelsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 mb-20"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Hotels</h1>
        <Building2 className="h-8 w-8 text-orange-500" />
      </div>

      {/* Search Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Location"
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <Input type="date" className="bg-white/5 border-white/10 text-white" />
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Search className="mr-2 h-4 w-4" />
            Search Hotels
          </Button>
        </div>
      </div>

      {/* Hotels List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-lg transition-transform"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {hotel.name}
              </h3>
              <div className="flex items-center text-gray-300 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {hotel.location}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-400">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  {hotel.rating}
                </div>
                <div className="text-orange-500 font-bold">
                  {hotel.price}/night
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
