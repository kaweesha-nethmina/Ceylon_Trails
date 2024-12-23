"use client";

import { motion } from "framer-motion";
import { Plane, Calendar, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const flights = [
  {
    id: 1,
    from: "London",
    to: "New York",
    date: "2024-02-01",
    price: "$499",
    duration: "7h 45m",
    airline: "British Airways",
  },
  {
    id: 2,
    from: "Paris",
    to: "Tokyo",
    date: "2024-02-02",
    price: "$899",
    duration: "11h 30m",
    airline: "Air France",
  },
  {
    id: 3,
    from: "Dubai",
    to: "Singapore",
    date: "2024-02-03",
    price: "$599",
    duration: "7h 15m",
    airline: "Emirates",
  },
];

export default function FlightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 mb-20"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Flights</h1>
        <Plane className="h-8 w-8 text-orange-500" />
      </div>

      {/* Search Section */}
      <Card className="bg-white/10 backdrop-blur-md border-white/10 mb-8">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="From"
                className="pl-10 bg-white/5 border-white/10 text-white"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="To"
                className="pl-10 bg-white/5 border-white/10 text-white"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="date"
                className="pl-10 bg-white/5 border-white/10 text-white"
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="mr-2 h-4 w-4" />
              Search Flights
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Flights List */}
      <div className="space-y-4">
        {flights.map((flight, index) => (
          <motion.div
            key={flight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-transform"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                  <Plane className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{flight.airline}</h3>
                  <p className="text-gray-300">{flight.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 text-white">
                <div className="text-center">
                  <p className="text-gray-400">From</p>
                  <p className="font-semibold">{flight.from}</p>
                </div>
                <Plane className="h-4 w-4 text-orange-500" />
                <div className="text-center">
                  <p className="text-gray-400">To</p>
                  <p className="font-semibold">{flight.to}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-gray-400">Price</p>
                <p className="text-2xl font-bold text-orange-500">{flight.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
