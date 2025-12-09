"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount: number;
  programTitle?: string;
}

export function DonationModal({
  isOpen,
  onClose,
  defaultAmount,
  programTitle = "Dana Umum Kemanusiaan",
}: DonationModalProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [isAnon, setIsAnon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("BSI");

  const [view, setView] = useState<"form" | "qris">("form");

  useEffect(() => {
    setAmount(defaultAmount);
    setView("form"); // Reset view on open/amount change
  }, [defaultAmount, isOpen]);

  if (!isOpen) return null;

  const handleDonate = () => {
    if (paymentMethod === "QRIS") {
      setView("qris");
    } else {
      // Direct success for other methods (mock)
      window.location.href = "/donasi/sukses";
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-gray-100 p-4 flex items-center justify-between">
          <h3 className="font-bold text-lg">
            {view === "qris" ? "Scan QRIS" : "Selesaikan Donasi"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {view === "form" ? (
          <>
            <div className="p-6 space-y-6">
              {/* Amount Display */}
              <div className="text-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider font-medium mb-1">
                  Nominal Donasi Anda
                </p>
                <p className="text-4xl font-bold text-green-600">
                  Rp {amount.toLocaleString("id-ID")}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Program:{" "}
                  <span className="font-bold text-gray-600">
                    {programTitle}
                  </span>
                </p>
              </div>

              {/* Donor Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">
                    Nama Lengkap (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder={isAnon ? "Hamba Allah" : "Nama Anda"}
                    disabled={isAnon}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none text-sm transition-all"
                  />
                  <div className="flex items-center gap-2 mt-2 ml-1">
                    <input
                      type="checkbox"
                      id="anon"
                      checked={isAnon}
                      onChange={(e) => setIsAnon(e.target.checked)}
                      className="rounded text-green-600 focus:ring-green-500"
                    />
                    <label
                      htmlFor="anon"
                      className="text-xs text-gray-500 select-none cursor-pointer"
                    >
                      Sembunyikan nama saya (Anonim)
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">
                    Email / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="0812..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">
                    Doa / Dukungan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan doa untuk saudara kita di Aceh..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none text-sm transition-all resize-none"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-3 ml-1">
                  Pilih Metode Transfer
                </label>
                <div className="space-y-3">
                  {/* BSI */}
                  <label
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      paymentMethod === "BSI"
                        ? "border-green-500 bg-green-50/50 ring-1 ring-green-500"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="BSI"
                      checked={paymentMethod === "BSI"}
                      onChange={() => setPaymentMethod("BSI")}
                      className="hidden"
                    />
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                      <span className="font-bold text-xs text-blue-600">
                        BSI
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">
                        Bank Syariah Indonesia
                      </p>
                      <p className="text-xs text-gray-500">
                        a.n. Relawan Sumatera Bencana
                      </p>
                    </div>
                    {paymentMethod === "BSI" && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                  </label>

                  {/* BRI */}
                  <label
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      paymentMethod === "BRI"
                        ? "border-green-500 bg-green-50/50 ring-1 ring-green-500"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="BRI"
                      checked={paymentMethod === "BRI"}
                      onChange={() => setPaymentMethod("BRI")}
                      className="hidden"
                    />
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                      <span className="font-bold text-xs text-blue-800">
                        BRI
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">
                        Bank Rakyat Indonesia
                      </p>
                      <p className="text-xs text-gray-500">
                        a.n. Yayasan Relawan Sumatera
                      </p>
                    </div>
                    {paymentMethod === "BRI" && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                  </label>

                  {/* QRIS */}
                  <label
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      paymentMethod === "QRIS"
                        ? "border-green-500 bg-green-50/50 ring-1 ring-green-500"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="QRIS"
                      checked={paymentMethod === "QRIS"}
                      onChange={() => setPaymentMethod("QRIS")}
                      className="hidden"
                    />
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">
                        QRIS (Gopay/Ovo/Dana)
                      </p>
                      <p className="text-xs text-gray-500">
                        a.n. Relawan Sumatera Bencana
                      </p>
                    </div>
                    {paymentMethod === "QRIS" && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl sticky bottom-0 z-20">
              <button
                onClick={handleDonate}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                Konfirmasi Donasi
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
                {/* QR Code Placeholder */}
                <div className="w-64 h-64 bg-gray-100 flex items-center justify-center rounded-lg">
                  <img
                    src="https://placehold.co/300x300/10b981/ffffff?text=QRIS+CODE"
                    alt="QRIS"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-2">Total Pembayaran</p>
              <p className="text-3xl font-bold text-gray-900 mb-8">
                Rp {amount.toLocaleString("id-ID")}
              </p>

              <div className="w-full space-y-3">
                <button
                  onClick={() => (window.location.href = "/donasi/sukses")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                >
                  Saya Sudah Membayar
                </button>
                <button
                  onClick={() => setView("form")}
                  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-xl transition-all"
                >
                  Kembali
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
