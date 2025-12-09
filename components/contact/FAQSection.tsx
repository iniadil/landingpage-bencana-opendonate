"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah donasi ini resmi dan amanah?",
      answer:
        "Ya, Relawan Sumatera Bencana (RSB) adalah lembaga resmi yang terdaftar dan memiliki izin operasional yang sah. Kami berkomitmen menyalurkan bantuan secara transparan dan amanah.",
    },
    {
      question: "Bisakah saya berdonasi barang/logistik?",
      answer:
        "Tentu. Anda dapat mengirimkan bantuan logistik seperti pakaian layak pakai, sembako, dan obat-obatan langsung ke Posko Utama kami di alamat yang tertera di halaman ini. Mohon konfirmasi via WhatsApp sebelum pengiriman.",
    },
    {
      question: "Bagaimana cara mendaftar jadi relawan?",
      answer:
        "Silakan hubungi admin kami melalui WhatsApp untuk informasi pendaftaran relawan. Kami sangat mengapresiasi bantuan tenaga untuk distribusi logistik dan dapur umum.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Pertanyaan Sering Diajukan (FAQ)
        </h2>
        <p className="text-gray-500 text-sm">
          Informasi cepat seputar donasi dan penyaluran.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex((active) => (active === index ? null : index))
              }
              className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out px-4 text-gray-500 text-sm leading-relaxed",
                openIndex === index
                  ? "grid-rows-[1fr] pb-4 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
