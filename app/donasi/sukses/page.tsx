"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Donasi Anda telah kami terima. Semoga Allah membalas kebaikan Anda
          dengan pahala yang berlipat ganda.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/program-donasi"
            className="block w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-xl transition-all"
          >
            Lihat Program Lain
          </Link>
        </div>
      </div>
    </div>
  );
}
