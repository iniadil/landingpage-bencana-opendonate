export function RecentDonors() {
  const donors = [
    {
      name: "Hamba Allah",
      amount: 500000,
      time: "2 menit lalu",
      initial: "HA",
    },
    {
      name: "Budi Santoso",
      amount: 100000,
      time: "5 menit lalu",
      initial: "BU",
    },
    {
      name: "Siti Aminah",
      amount: 250000,
      time: "12 menit lalu",
      initial: "SI",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
      <h3 className="font-bold text-sm mb-4">Donatur Terkini</h3>
      <div className="space-y-4">
        {donors.map((donor, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs">
              {donor.initial}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm text-gray-900">
                  {donor.name}
                </h4>
                <span className="text-[10px] text-gray-400">{donor.time}</span>
              </div>
              <p className="text-xs text-gray-500">
                Berdonasi{" "}
                <span className="text-green-600 font-bold">
                  Rp {donor.amount.toLocaleString("id-ID")}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
