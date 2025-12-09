import { HandHeart } from "lucide-react";

export function ProgramHero() {
  return (
    <div className="relative bg-green-900 overflow-hidden min-h-[350px] flex items-center justify-center text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/cover-dashboard.png')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-green-900/80 z-0"></div>

      <div className="container relative z-10 py-12">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider shadow-lg">
          <HandHeart className="w-4 h-4" />
          Program Kebaikan
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          Pilih Program Donasi Terbaik
        </h1>
        <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Salurkan bantuan Anda melalui berbagai program pilihan yang telah kami
          siapkan untuk kemaslahatan umat.
        </p>
      </div>
    </div>
  );
}
