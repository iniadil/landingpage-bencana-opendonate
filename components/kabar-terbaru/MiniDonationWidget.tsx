"use client";
import { useState } from "react";
import { Facebook, Twitter, MessageCircle } from "lucide-react";
import { DonationModal } from "@/components/donation/DonationModal";

export function MiniDonationWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(50000);

  const handleDonate = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-8">
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          Bantu Mereka Bertahan
        </h3>
        <p className="text-gray-500 text-xs mb-4">
          Setiap detik sangat berharga bagi korban banjir.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-gray-500">Terkumpul</span>
            <span className="font-bold text-green-600">Rp 1.245 Juta</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
            <div className="bg-green-500 h-1.5 rounded-full w-[25%]"></div>
          </div>
        </div>

        <button
          onClick={() => handleDonate(50000)}
          className="w-full bg-green-50/50 border border-green-200 hover:bg-green-100 text-green-800 font-bold py-3 rounded-lg text-sm mb-3 transition-colors"
        >
          Rp 50.000 (Paket Makan)
        </button>

        <button
          onClick={() => handleDonate(100000)}
          className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] mb-6"
        >
          DONASI SEKARANG
        </button>

        <div className="text-center">
          <span className="text-[10px] text-gray-400 block mb-3">
            Bagikan kabar ini:
          </span>
          <div className="flex justify-center gap-3">
            <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-sky-400 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <Twitter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={amount}
      />
    </>
  );
}
