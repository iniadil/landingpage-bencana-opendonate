import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        Saluran Resmi
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* WhatsApp Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <Phone className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Chat WhatsApp</h3>
          <p className="text-gray-500 text-xs mb-3">Konfirmasi & Tanya Jawab</p>
          <p className="text-xl font-bold text-green-700 mb-2">
            0812-3456-7890
          </p>
          <p className="text-xs text-green-600 font-medium">Official Admin</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Mail className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">Email Resmi</h3>
          <p className="text-gray-500 text-xs mb-3">Kerjasama & Laporan</p>
          <p className="text-sm font-bold text-gray-900 break-all">
            info@rsb.org
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
          <span className="text-red-500">
            <MapPin className="w-5 h-5" />
          </span>
          Posko Utama & Titik Kumpul Logistik
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Untuk pengiriman bantuan barang (baju layak pakai, sembako fisik),
          silakan kirimkan langsung ke alamat posko kami:
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
          <p className="font-bold text-gray-900 text-sm">
            Posko Utama Relawan Sumatera Bencana
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Jl. Kemanusiaan No. 1, Medan, Sumatera Utara
          </p>
        </div>

        <div className="rounded-xl overflow-hidden h-64 bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.38833983776!2d98.6657!3d3.6825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031326442655555%3A0x654321!2sPesantren+Tahfiz+Al+Quran+Ibnu+Aqil!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
