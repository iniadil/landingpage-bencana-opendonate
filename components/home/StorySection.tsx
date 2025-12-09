import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function StorySection() {
  return (
    <div>
      {/* Campaigner Info */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 mb-8 flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <span className="font-serif font-bold text-green-700">RSB</span>
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
            Penggalang Dana Terverifikasi
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900">
              Relawan Sumatera Bencana (RSB)
            </h3>
            <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
          </div>
          <p className="text-xs text-green-600 font-medium">
            Akun Resmi Lembaga
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
        <button className="pb-3 border-b-2 border-green-600 text-green-700 font-bold text-sm whitespace-nowrap">
          Cerita Penggalangan
        </button>
        <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap flex items-center gap-2">
          Kabar Terbaru{" "}
          <span className="bg-red-100 text-red-600 text-[10px] px-1.5 rounded font-bold">
            New
          </span>
        </button>
        <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
          Doa Donatur
        </button>
      </div>

      {/* Content */}
      <div className="prose prose-stone max-w-none">
        {/* Placeholder Image for Content */}
        <div className="rounded-xl overflow-hidden mb-6 bg-gray-100 relative aspect-video">
          <div className="absolute inset-0 bg-[url('/images/timsar.png')] bg-cover bg-center"></div>
        </div>

        <h3 className="font-bold text-gray-900">Assalamualaikum #OrangBaik,</h3>
        <p>
          Indonesia kembali berduka. Sejak akhir November 2025, hujan deras
          tanpa henti mengguyur wilayah Aceh dan Sumatera Utara, memicu banjir
          bandang terbesar dalam satu dekade terakhir. Data per{" "}
          <span className="font-bold">8 Desember 2025</span> mencatat lebih dari{" "}
          <span className="font-bold">961 saudara kita meninggal dunia</span>{" "}
          dan jutaan lainnya terpaksa mengungsi tanpa bekal apapun.
        </p>

        <hr className="my-8" />

        <h3 className="font-bold text-lg mb-2">Mengapa Donasi ke RSB?</h3>
        <p>
          Sebagai lembaga relawan yang berbasis di Medan (Jl. Kemanusiaan No. 1,
          Medan), kami berada di posisi strategis untuk menyalurkan bantuan.
          Kami telah membentuk{" "}
          <span className="font-bold">Tim Relawan Siaga</span> yang siap
          berangkat ke titik-titik yang belum terjangkau bantuan pemerintah
          secara maksimal.
        </p>

        <h4 className="font-bold text-gray-900 mt-6 mb-3">
          Dana Akan Digunakan Untuk:
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">Paket Sembako Darurat:</span> Beras, mie
            instan, sarden, air mineral.
          </li>
          <li>
            <span className="font-bold">Dapur Umum:</span> Makanan siap santap
            untuk pengungsi.
          </li>
          <li>
            <span className="font-bold">Kebutuhan Bayi & Lansia:</span> Susu,
            popok, selimut tebal.
          </li>
          <li>
            <span className="font-bold">Peralatan Ibadah:</span> Mukena, sarung,
            Al-Quran pengganti yang hanyut.
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 italic text-blue-900 text-sm">
          "Barangsiapa yang melepaskan satu kesusahan seorang mukmin, pasti
          Allah akan melepaskan darinya satu kesusahan pada hari kiamat..." (HR.
          Muslim)
        </div>

        <p className="font-medium text-gray-800">
          Mari salurkan bantuan terbaikmu sebelum terlambat. Satu rupiah darimu
          adalah nyawa bagi mereka.
        </p>
      </div>
    </div>
  );
}
