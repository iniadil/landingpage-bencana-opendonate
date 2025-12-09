"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Gunakan formulir ini untuk pertanyaan umum atau jika Anda mewakili
          instansi/perusahaan untuk kolaborasi CSR.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            placeholder="Contoh: Budi Santoso"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="email@anda.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              No. WhatsApp
            </label>
            <input
              type="tel"
              placeholder="0812..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Kategori Pesan
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all text-gray-700">
            <option>Konfirmasi Donasi Manual</option>
            <option>Pertanyaan Umum</option>
            <option>Kerjasama CSR</option>
            <option>Laporan Masalah</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Isi Pesan
          </label>
          <textarea
            rows={5}
            placeholder="Tuliskan pesan Anda di sini..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 resize-none"
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
        >
          Kirim Pesan {">"}
        </button>
      </form>
    </div>
  );
}
