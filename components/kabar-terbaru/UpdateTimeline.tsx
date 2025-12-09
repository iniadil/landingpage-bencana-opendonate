"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Package, Stethoscope, Utensils, Share2 } from "lucide-react";

type UpdateType = "Logistik" | "Medis" | "Dapur Umum";

const UPDATES = [
  {
    id: 1,
    type: "Medis",
    date: "9 Des 2025 • 09:00 WIB",
    title: "Tim Medis Atasi Infeksi Kulit di Aceh Tamiang",
    description:
      "Posko kesehatan kami di depan Polres Aceh Tamiang ramai didatangi warga. Tim dokter menangani banyak kasus gatal-gatal, kutu air, dan diare akibat sanitasi yang buruk pasca banjir.",
    image: "/images/2.png",
    stats: "215 Pasien/hari",
    color: "blue", // For the dot
  },
  {
    id: 2,
    type: "Dapur Umum",
    date: "8 Des 2025 • 16:30 WIB",
    title: 'Kehangatan "Kuah Beulangong" untuk Pengungsi',
    description:
      "Alhamdulillah, hari ini dapur umum kami membagikan 500 porsi Kuah Beulangong (Gulai Daging Khas Aceh) untuk pengungsi di Lhoksukon. Senyum mereka adalah energi kami.",
    image: "/images/3.png",
    stats: "500 Porsi/hari",
    color: "orange",
  },
];

export function UpdateTimeline() {
  const [filter, setFilter] = useState<string>("Semua Update");

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button
          onClick={() => setFilter("Semua Update")}
          className={cn(
            "px-4 py-2 rounded-full font-bold text-sm transition-colors",
            filter === "Semua Update"
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
          )}
        >
          Semua Update
        </button>
        <button
          onClick={() => setFilter("Logistik")}
          className={cn(
            "px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2",
            filter === "Logistik"
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
          )}
        >
          <Package className="w-4 h-4" /> Logistik
        </button>
        <button
          onClick={() => setFilter("Medis")}
          className={cn(
            "px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2",
            filter === "Medis"
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
          )}
        >
          <Stethoscope className="w-4 h-4" /> Medis
        </button>
        <button
          onClick={() => setFilter("Dapur Umum")}
          className={cn(
            "px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2",
            filter === "Dapur Umum"
              ? "bg-green-600 text-white"
              : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
          )}
        >
          <Utensils className="w-4 h-4" /> Dapur Umum
        </button>
      </div>

      {/* Timeline */}

      {/* Better Implementation of Alternating Timeline */}
      <div className="space-y-12 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

        {UPDATES.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
            >
              {/* Dot */}
              <div
                className={cn(
                  "hidden md:block absolute top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm left-1/2 -translate-x-1/2 z-10 mt-6",
                  item.color === "blue" ? "bg-blue-500" : "bg-orange-500"
                )}
              ></div>

              {/* Left Side */}
              <div
                className={cn(
                  "w-full md:w-1/2 md:px-12",
                  isEven ? "text-right order-1" : "order-2"
                )}
              >
                {isEven ? (
                  /* Text Content */
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 md:mr-0">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Card Content */
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-0 right-0 left-0 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 text-center uppercase tracking-widest bg-opacity-90">
                        {/* Optional Badge */}
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Stethoscope className="w-4 h-4" /> {item.stats}
                      </span>
                      <button className="text-green-600 font-bold uppercase text-xs flex items-center gap-1 hover:underline">
                        Bagikan
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side */}
              <div
                className={cn(
                  "w-full md:w-1/2 md:px-12",
                  isEven ? "order-2" : "order-1 text-right"
                )}
              >
                {isEven ? (
                  /* Card Content */
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex justify-between items-center text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Stethoscope className="w-4 h-4" /> {item.stats}
                      </span>
                      <button className="text-green-600 font-bold uppercase text-xs flex items-center gap-1 hover:underline">
                        Bagikan
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Text Content */
                  <div>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
