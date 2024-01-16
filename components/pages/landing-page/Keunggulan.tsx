import React from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const Keunggulan = () => {
  return (
    <div className="px-20 container">
      <div className="flex bg-white flex-row gap-20 justify-center w-full p-10 shadow-lg rounded-xl">
        <div className="flex flex-col w-[400px] gap-4">
          <div className="text-[#1a1668]">
            <IoSearchOutline size={40} />
          </div>
          <h1 className="text-2xl font-bold text-[#5488c4]">
            FITUR PENCARIAN CEPAT
          </h1>
          <p className="text-normal font-medium text-justify text-black">
            Jelajahi koleksi buku kami dengan mudah menggunakan fitur pencarian
            cepat. Temukan judul, pengarang, atau kategori buku yang Anda cari
            dalam sekejap mata. Pengalaman penelusuran yang efisien untuk
            membantu Anda menemukan harta pengetahuan yang tepat.
          </p>
        </div>
        <div className="flex flex-col w-[400px] gap-4">
          <div className="text-[#1a1668]">
            <IoNotificationsOutline size={40} />
          </div>
          <h1 className="text-2xl font-bold text-[#5488c4]">
            PEMBERITAHUAN DAN PERINGATAN
          </h1>
          <p className="text-normal font-medium text-justify text-black">
            Tidak akan ketinggalan informasi! Dapatkan pemberitahuan langsung
            ketika buku yang Anda tunggu-tunggu kembali tersedia atau saat waktu
            peminjaman Anda hampir berakhir. Kami hadir untuk memastikan Anda
            tetap terhubung dengan dunia literasi.
          </p>
        </div>
        <div className="flex flex-col w-[400px] gap-4">
          <div className="text-[#1a1668]">
            <FaRegBookmark size={40} />
          </div>
          <h1 className="text-2xl font-bold text-[#5488c4]">
            FITUR PENANDA BUKU
          </h1>
          <p className="text-normal font-medium text-justify text-black">
            Buat daftar buku impian Anda dengan mudah. Gunakan fitur penanda
            buku untuk menandai dan menyimpan buku-buku favorit Anda. Sistem
            yang sederhana dan efektif untuk membantu Anda merencanakan
            perjalanan literasi Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
