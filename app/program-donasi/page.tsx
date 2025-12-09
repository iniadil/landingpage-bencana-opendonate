"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Flame, BookOpen, Warehouse } from "lucide-react";
import { ProgramHero } from "@/components/program/ProgramHero";
import { ProgramCard } from "@/components/program/ProgramCard";
import { ProgramCTA } from "@/components/program/ProgramCTA";

import { DonationModal } from "@/components/donation/DonationModal";

export default function ProgramDonasiPage() {
  const [activeFilter, setActiveFilter] = useState("Semua Program");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(
    "Dana Umum Kemanusiaan"
  );

  const openDonation = (programName: string) => {
    setSelectedProgram(programName);
    setIsModalOpen(true);
  };

  const filters = [
    { name: "Semua Program", icon: null },
    { name: "Darurat Bencana", icon: Flame },
    { name: "Wakaf & Dakwah", icon: BookOpen },
    { name: "Infrastruktur", icon: Warehouse },
  ];

  const programs = [
    {
      id: 1,
      category: "Darurat Bencana",
      title: "Paket Pangan Darurat Korban Banjir",
      description:
        "Penyediaan beras, mie instan, sarden, dan air bersih untuk 5.000 pengungsi di Aceh Utara yang terancam kelaparan.",
      image: "/images/2.png",
      badge: { text: "Sangat Mendesak", color: "red" as const },
      raised: "Rp 750 Juta",
      target: "Rp 1 M",
      progress: 75,
      buttonLabel: "Donasi",
      // ... Footer ...
    },
    // ... (keeping other programs mostly same but update onClick logic below) ...
    {
      id: 2,
      category: "Wakaf & Dakwah",
      title: "Wakaf 10.000 Al-Quran & Iqra",
      description:
        "Mengganti Al-Quran yang hanyut dan rusak di masjid dan surau terdampak agar warga bisa kembali mengaji.",
      image: "/images/3.png",
      badge: { text: "Amal Jariyah", color: "blue" as const },
      raised: "Rp 225 Juta",
      target: "Rp 500 Jt",
      progress: 45,
      buttonLabel: "Wakaf",
      // ...
    },
    {
      id: 3,
      category: "Infrastruktur",
      title: "Renovasi Masjid & Surau Hanyut",
      description:
        "Membangun kembali tempat ibadah yang rusak parah agar warga bisa kembali sholat berjamaah dengan nyaman.",
      image:
        "https://placehold.co/600x400/22543d/ffffff?text=Mosque+Renovation",
      badge: { text: "Infrastruktur", color: "blue" as const },
      raised: "Rp 400 Juta",
      target: "Rp 2 M",
      progress: 20,
      buttonLabel: "Donasi",
      // ...
    },
  ];

  const filteredPrograms =
    activeFilter === "Semua Program"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <ProgramHero />

      <div className="container py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={cn(
                  "px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-sm border",
                  activeFilter === filter.name
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "w-4 h-4",
                      activeFilter === filter.name
                        ? "text-white"
                        : "text-gray-400"
                    )}
                  />
                )}
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {filteredPrograms.map((program) => (
            <div key={program.id} onClick={() => openDonation(program.title)}>
              <ProgramCard
                {...program}
                footer={
                  program.id === 1 ? (
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">
                        AD
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">
                        BS
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-600">
                        +4K
                      </div>
                    </div>
                  ) : program.id === 2 ? (
                    <div className="text-xs text-gray-500">
                      <span className="font-bold text-gray-900">1.205</span>{" "}
                      Orang berwakaf
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">
                      <span className="font-bold text-gray-900">450</span>{" "}
                      Donatur
                    </div>
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div onClick={() => openDonation("Dana Umum Kemanusiaan")}>
          <ProgramCTA />
        </div>
      </div>

      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={250000}
        programTitle={selectedProgram}
      />
    </div>
  );
}
