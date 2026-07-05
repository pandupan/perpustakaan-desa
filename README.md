# 📚 Perpustakaan Desa — Sistem Manajemen Perpustakaan

Sistem **manajemen perpustakaan desa** berbasis web yang lengkap. Aplikasi ini mengelola koleksi buku, data peminjaman, anggota, dan dilengkapi dashboard admin untuk monitoring.

## ✨ Fitur

### 📖 Katalog Buku
- **Daftar Buku** (`/daftar-buku`) — Browse semua koleksi buku
- **Detail Buku** (`/daftar-buku/detailbuku`) — Informasi lengkap per buku

### 🔐 Autentikasi
- **Login/Register** — NextAuth dengan kredensial
- **API Auth** — Register endpoint dan [...nextauth]
- **bcrypt** — Enkripsi password

### 📊 Dashboard Admin
- **Data Buku** — CRUD koleksi buku
- **Data Peminjaman** — Kelola peminjaman & pengembalian
- **Create** — Tambah data baru
- **Data Tables** — Tabel data interaktif (custom CSS)
- **Custom Fonts** — Satoshi font family

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI** | shadcn/ui (Radix priming: accordion, checkbox, navigation-menu, popover, select, tabs) |
| **Auth** | NextAuth.js + bcrypt + bcryptjs |
| **Icons** | React Icons |
| **Font** | Satoshi (custom .eot/.ttf/.woff/.woff2) |

## 📁 Struktur Proyek

```
app/
├── daftar-buku/
│   ├── page.tsx                  # List buku
│   └── detailbuku/page.tsx       # Detail buku
├── dashboard/
│   ├── create/page.tsx           # Tambah data
│   ├── data-buku/page.tsx        # Manajemen buku
│   ├── data-peminjaman/page.tsx  # Manajemen peminjaman
│   ├── data-tables-css.css       # Style tabel
│   └── fonts/Satoshi-*.*         # Custom fonts
└── api/auth/
    ├── [...nextauth]/route.ts    # NextAuth
    └── register/route.ts         # Register API

components/
├── layouts/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── pages/
    └── ...                       # Komponen halaman
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
