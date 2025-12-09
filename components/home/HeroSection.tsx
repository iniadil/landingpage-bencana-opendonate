import { AlertTriangle, Heart } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Alert Bar */}
      <div className="bg-brand-red text-white text-xs md:text-sm py-2 px-4 text-center font-bold flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span>
          DARURAT: 961+ Korban Jiwa & 1 Juta Pengungsi di Aceh & Sumatera.
          Bantuan Anda Dibutuhkan Sekarang!
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image Overlay - Placeholder using a gradient/colored div to mimic the sketch style */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/images/cover-dashboard.png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 to-gray-900/40 z-0"></div>

        <div className="container relative z-10 py-12 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
              Tanggap Darurat Bencana
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Bantu Aceh & Sumut Bangkit <br /> Dari Banjir Bandang
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Ribuan rumah tenggelam, akses terputus, dan saudara kita
              <span className="font-bold">URGENT:</span> Relawan Sumatera
              Bencana (RSB) Membuka Dapur Umum Darurat dan penyaluran logistik
              langsung ke titik terparah di Aceh Utara dan sekitarnya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#donasi"
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
              >
                Donasi Sekarang <Heart className="w-5 h-5 fill-current" />
              </Link>
              <Link
                href="#kondisi"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
              >
                Lihat Kondisi Terkini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
