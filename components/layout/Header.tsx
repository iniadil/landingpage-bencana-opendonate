"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    // Simple match or startsWith if we had subroutes
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-sm font-medium">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
            RSB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-green-900">Relawan Sumatera</span>
            <span className="font-bold text-green-900">Bencana (RSB)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <Link
            href="/"
            className={cn(
              "hover:text-green-700 transition-colors py-1",
              isActive("/") &&
                "text-green-700 font-bold border-b-2 border-green-600"
            )}
          >
            Beranda
          </Link>
          <Link
            href="/program-donasi"
            className={cn(
              "hover:text-green-700 transition-colors py-1",
              isActive("/program-donasi") &&
                "text-green-700 font-bold border-b-2 border-green-600"
            )}
          >
            Program Donasi
          </Link>
          <Link
            href="/kabar-terbaru"
            className={cn(
              "hover:text-green-700 transition-colors py-1",
              isActive("/kabar-terbaru") &&
                "text-green-700 font-bold border-b-2 border-green-600"
            )}
          >
            Kabar Terbaru
          </Link>
          <Link
            href="/kontak"
            className={cn(
              "hover:text-green-700 transition-colors py-1",
              isActive("/kontak") &&
                "text-green-700 font-bold border-b-2 border-green-600"
            )}
          >
            Kontak
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="container py-4 flex flex-col gap-2">
            {[
              { name: "Beranda", path: "/" },
              { name: "Kabar Terbaru", path: "/kabar-terbaru" },
              { name: "Program Donasi", path: "/program-donasi" },
              { name: "Kontak", path: "/kontak" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-bold text-sm transition-colors",
                  pathname === link.path
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/program-donasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold text-center hover:bg-red-700 transition-colors shadow-md"
            >
              Donasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
