import React from "react";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const HeroTK = () => {
  return (
    <div className="px-10 h-[600px] bg-white">
      <div className="container px-10 flex flex-col gap-14 justify-center h-full">
        <div className="flex flex-col w-[500px] text-[#1a1668] ">
          <h1 className="text-5xl font-bold">Perpustakaan Desa</h1>
          <h2 className="text-2xl font-semibold">Website Perpustakaan</h2>
        </div>
        <div className="flex flex-row gap-20 justify-center w-full">
          <div className="flex flex-col w-[400px] gap-4">
            <div className="text-[#1a1668]">
              <IoSearchOutline size={40} />
            </div>
            <h1 className="text-2xl font-bold text-[#5488c4]">Fitur Pencarian cepat</h1>
            <p className="text-normal font-medium text-justify text-black">
              Jelajahi koleksi buku kami dengan mudah menggunakan fitur
              pencarian cepat. Temukan judul, pengarang, atau kategori buku yang
              Anda cari dalam sekejap mata. Pengalaman penelusuran yang efisien
              untuk membantu Anda menemukan harta pengetahuan yang tepat.
            </p>
          </div>
          <div className="flex flex-col w-[400px] gap-4">
            <div  className="text-[#1a1668]">
              <IoNotificationsOutline size={40} />
            </div>
            <h1 className="text-2xl font-bold text-[#5488c4]">Pemberitahuan dan Peringatan</h1>
            <p className="text-normal font-medium text-justify text-black">
              Tidak akan ketinggalan informasi! Dapatkan pemberitahuan langsung
              ketika buku yang Anda tunggu-tunggu kembali tersedia atau saat
              waktu peminjaman Anda hampir berakhir. Kami hadir untuk memastikan
              Anda tetap terhubung dengan dunia literasi.
            </p>
          </div>
          <div className="flex flex-col w-[400px] gap-4">
            <div  className="text-[#1a1668]">
              <FaRegBookmark size={40} />
            </div>
            <h1 className="text-2xl font-bold text-[#5488c4]">Fitur penanda buku</h1>
            <p className="text-normal font-medium text-justify text-black">
              Buat daftar buku impian Anda dengan mudah. Gunakan fitur penanda
              buku untuk menandai dan menyimpan buku-buku favorit Anda. Sistem
              yang sederhana dan efektif untuk membantu Anda merencanakan
              perjalanan literasi Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTK;
