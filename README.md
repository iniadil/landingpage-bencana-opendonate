# Relawan Sumatera Bencana (RSB) - Platform Donasi

Selamat datang di repositori resmi **Relawan Sumatera Bencana (RSB)**. Website ini dibangun untuk memfasilitasi penggalangan dana dan penyaluran bantuan bagi korban bencana banjir di Sumatera, dengan fokus pada transparansi dan kemudahan akses.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern untuk memastikan performa yang cepat dan tampilan yang responsif:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icon**: [Lucide React](https://lucide.dev/)
- **Package Manager**: pnpm

## 🛠️ Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan website ini di komputer lokal Anda:

1.  **Clone Repositori**

    ```bash
    git clone https://github.com/username/project-rsb.git
    cd project-rsb
    ```

2.  **Install Dependencies**
    Pastikan Anda sudah menginstall Node.js. Kemudian jalankan:

    ```bash
    pnpm install
    # atau
    npm install
    ```

3.  **Jalankan Server Development**

    ```bash
    pnpm dev
    # atau
    npm run dev
    ```

4.  **Buka di Browser**
    Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📂 Struktur Project

Berikut adalah gambaran singkat struktur folder proyek ini:

- `app/` - Halaman-halaman website (Home, Kabar Terbaru, Program Donasi, Kontak).
- `components/` - Komponen UI yang dapat digunakan kembali (Header, Footer, Cards, Modal).
- `public/` - Aset statis seperti gambar dan logo.
- `lib/` - Fungsi utilitas (misalnya untuk menggabungkan class CSS).

## ✨ Fitur Utama

- **Donasi Instan**: Widget donasi yang mudah digunakan dengan pilihan nominal.
- **Transparansi**: Halaman "Kabar Terbaru" untuk update penyaluran bantuan secara real-time.
- **Metode Pembayaran**: Mendukung transfer bank (BSI, BRI) dan QRIS.
- **Responsive**: Tampilan yang optimal di HP, Tablet, dan Desktop.

---

**Dibuat dengan ❤️ untuk Kemanusiaan oleh @iniadil.**
