export function ContactHero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden h-[300px] flex items-center justify-center text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://placehold.co/1920x800/101820/ffffff?text=Contact+Center')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-900/90 z-0"></div>

      <div className="container relative z-10 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Hubungi Kami
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Kami siap membantu Anda. Silakan hubungi kami untuk informasi lebih
          lanjut mengenai program donasi maupun kegiatan relawan.
        </p>
      </div>
    </div>
  );
}
