export function StatsSection() {
  return (
    <div className="bg-white border-b">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
          <div className="p-2">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              961+
            </div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
              Korban Jiwa
            </div>
          </div>

          <div className="p-2">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              1 Jt+
            </div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
              Mengungsi
            </div>
          </div>

          <div className="p-2">
            <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1">
              DARURAT
            </div>
            <div className="text-xs md:text-sm text-brand-red uppercase tracking-wide font-bold">
              Status Bencana
            </div>
          </div>

          <div className="p-2">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              7 Hari
            </div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
              Masa Tanggap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
