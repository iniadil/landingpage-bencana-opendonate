export function KabarHero() {
  return (
    <div className="relative bg-green-900 overflow-hidden min-h-[400px] flex items-center justify-center text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/cover-kabar-terkini.png')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-green-900/80 z-0"></div>

      <div className="container relative z-10 py-12">
        <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          Update Lapangan
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          Kabar Terkini Penyaluran Bantuan
        </h1>
        <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          Transparansi adalah prioritas kami. Pantau langsung bagaimana donasi
          Anda disalurkan untuk saudara kita di Aceh & Sumatera Utara.
        </p>
      </div>
    </div>
  );
}
