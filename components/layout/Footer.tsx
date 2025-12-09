import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
              RSB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-white">Relawan Sumatera</span>
              <span className="font-bold text-white">Bencana (RSB)</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Mewujudkan generasi penghafal Al-Quran yang faqih dan berwawasan
            global. Berkhidmat untuk umat melalui aksi kemanusiaan.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-1.165zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.833a3.167 3.167 0 110 6.334 3.167 3.167 0 010-6.334zM21.833 2.167h.083l-.083.083z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-bold text-lg mb-6">Kontak & Alamat</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-green-500" />
              <span>Jl. Kemanusiaan No. 1, Medan, Sumatera Utara</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 shrink-0 text-green-500" />
              <span>+62 812-3456-7890 (Official Admin)</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 shrink-0 text-green-500" />
              <span>info@rsb.org</span>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="font-bold text-lg mb-6">Legalitas</h3>
          <p className="text-gray-400 text-sm mb-4">
            Izin Operasional Pesantren:
          </p>
          <div className="bg-gray-800 px-4 py-2 rounded font-mono text-sm inline-block mb-6">
            5100127100XX
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Donasi yang terkumpul akan diaudit secara internal dan dilaporkan
            secara transparan melalui website ini dan media sosial resmi
            Pesantren.
          </p>
        </div>
      </div>

      <div className="container border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        &copy; 2024 Relawan Sumatera Bencana (RSB). All rights reserved.
      </div>
    </footer>
  );
}
