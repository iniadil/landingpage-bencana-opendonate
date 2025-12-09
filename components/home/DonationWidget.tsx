"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const AMOUNTS = [50000, 100000, 250000, 500000];

import { DonationModal } from "@/components/donation/DonationModal";

export function DonationWidget() {
  const [amount, setAmount] = useState<number>(250000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 sticky top-24">
        {/* ... existing content ... */}

        {/* Replace only the parts needed if doing partial, but here I'm wrapping the whole existing return for context if I were doing a full replace, but I will just inject the logic */}
        <h3 className="font-bold text-xl mb-4">Kalkulator Kebaikan</h3>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Terkumpul</span>
            <span className="font-bold text-green-600">Rp 1.245.000.000</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
            <div className="bg-green-500 h-2 rounded-full w-[25%]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>25% tercapai</span>
            <span>Target: Rp 5.000.000.000</span>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Pilih Nominal Donasi
          </label>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {AMOUNTS.map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={cn(
                  "border rounded-lg py-2 px-4 text-sm font-medium transition-all relative",
                  amount === val
                    ? "border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                )}
              >
                Rp {val.toLocaleString("id-ID")}
                {val === 250000 && (
                  <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    Populer
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              Rp
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-bold text-gray-900"
            />
          </div>
        </div>

        {/* Impact Note */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 flex gap-3 mb-6">
          <div className="text-yellow-600 pt-0.5">
            <Heart className="w-4 h-4 fill-current" />
          </div>
          <p className="text-xs text-yellow-800 leading-relaxed">
            <span className="font-bold">
              Rp {amount.toLocaleString("id-ID")}
            </span>{" "}
            dapat menyediakan paket sembako lengkap untuk 1 keluarga selama
            seminggu.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
        >
          LANJUT PEMBAYARAN
        </button>
      </div>

      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={amount}
      />
    </>
  );
}
