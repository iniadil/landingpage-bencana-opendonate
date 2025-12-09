export function ProgramCTA() {
  return (
    <div className="bg-green-600 text-white rounded-2xl py-12 px-8 text-center relative overflow-hidden my-12 shadow-2xl">
      {/* Background Pattern - subtle */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
          Bingung Memilih Program?
        </h2>
        <p className="text-green-100 mb-8 leading-relaxed">
          Salurkan donasi Anda ke{" "}
          <span className="font-bold text-white">Dana Umum Kemanusiaan</span>.
          Kami akan mengalokasikan bantuan ke sektor yang paling membutuhkan
          saat ini.
        </p>

        <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition-colors transform hover:-translate-y-1">
          Donasi Dana Umum
        </button>
      </div>
    </div>
  );
}
