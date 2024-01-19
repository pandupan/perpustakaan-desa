import React from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const Keunggulan = () => {
  return (
    <div className="sm:px-20 px-4 sm:container">
      <div className="flex bg-white sm:flex-row flex-col lg:gap-20 gap-8 justify-center w-full sm:p-10 p-4 shadow-lg rounded-xl">
        <div className="flex flex-col max-w-[400px] gap-4">
          <div className="flex flex-row lg:flex-col md:gap-0 gap-1">
            <div className="text-[#1a1668] my-auto">
              <IoSearchOutline size={40} />
            </div>
            <h1 className="lg:text-2xl text-normal sm:text-xs font-bold text-[#5488c4] my-auto">
              FITUR PENCARIAN CEPAT
            </h1>
          </div>
          <p className="sm:text-normal text-xs font-medium text-justify text-black">
            Jelajahi koleksi buku kami dengan mudah menggunakan fitur pencarian
            cepat. Temukan judul, pengarang, atau kategori buku yang Anda cari
            dalam sekejap mata. Pengalaman penelusuran yang efisien untuk
            membantu Anda menemukan harta pengetahuan yang tepat.
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <div className="flex flex-row-reverse sm:flex-row lg:flex-col md:gap-0 gap-1">
            <div className="text-[#1a1668] my-auto">
              <IoNotificationsOutline size={40} />
            </div>
            <h1 className="lg:text-2xl text-normal sm:text-xs font-bold text-[#5488c4] my-auto">
              PEMBERITAHUAN DAN PERINGATAN
            </h1>
          </div>
          <p className="sm:text-normal text-xs font-medium text-justify text-black">
            Tidak akan ketinggalan informasi! Dapatkan pemberitahuan langsung
            ketika buku yang Anda tunggu-tunggu kembali tersedia atau saat waktu
            peminjaman Anda hampir berakhir. Kami hadir untuk memastikan Anda
            tetap terhubung dengan dunia literasi.
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] gap-4">
          <div className="flex flex-row lg:flex-col md:gap-0 gap-1">
            <div className="text-[#1a1668] my-auto">
              <FaRegBookmark size={40} />
            </div>
            <h1 className="lg:text-2xl text-normal sm:text-xs font-bold text-[#5488c4] my-auto">
              FITUR PENANDA BUKU
            </h1>
          </div>
          <p className="sm:text-normal text-xs font-medium text-justify text-black">
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
