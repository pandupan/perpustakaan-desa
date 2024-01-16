import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { GrGooglePlus } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" sm:px-8 md:px-22 xl:px-10 relative overflow-hidden flex flex-col w-full h-[800px] bg-hero-news py-10 bg-[#5488c4]">
      <div className="absolute container flex flex-col sm:py-12 py-4 md:px-0 xl:px-44 xl:container">
        <h3 className="text-white text-xs sm:text-sm font-semibold">
          Bergabunglah dengan
        </h3>
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          Perpustakaan Desa
        </h1>

        <div className="justify-end xl:flex hidden flex-row gap-8 xl:mr-0 sm:mr-16 sm:my-0 my-2">
          <a
            href=""
            className="xl:w-[300px]  w-[120px] h-[30px] sm:h-[44px] bg-white items-center flex justify-center rounded-md sm:rounded-xl"
          >
            <p className="text-theme-secondary sm:text-base text-xs place-self-center line-clamp-1">
              Punya Pertanyaan Lebih lanjut?
            </p>
          </a>
          <a
            href=""
            className="xl:w-[150px] sm:w-[100px] w-[60px] h-[30px] sm:h-[44px] bg-white items-center flex justify-center rounded-md sm:rounded-xl"
          >
            <p className="text-theme-secondary sm:text-base text-xs place-self-center line-clamp-1">
              Hubungi Kami
            </p>
          </a>
        </div>

        <p className="text-white sm:text-base text-xs sm:w-[450px]">
          &quot;Sehat Bersama: Aplikasi Inovatif untuk Menginspirasi,
          Mempertahankan, dan Meningkatkan Kesehatan Anda, Satu Langkah Sehat
          Bersama Menuju Gaya Hidup Sejahtera dan Bahagia!&quot;
        </p>
        <div className="flex text-white flex-col sm:flex-row gap-4 sm:gap-12 xl:w-full sm:w-[500px] lg:w-[1000px] lg:gap-16 xl:gap-32 sm:mt-24 mt-8  ">
          <div className="flex flex-col gap-1 sm:gap-3 ">
            <h1 className="text-sm sm:text-2xl font-bold">Hubungi Kami</h1>
            <div className="flex flex-row gap-3 justify-start">
              <FaLocationPin size={17} />
              <p className="text-xs sm:text-base font-light w-[180px] ">
                Puskesmas Kahuripan, Jl. Siliwangi, Blk No.31, Kahuripan, Kec.
                Tawang, Kab. Tasikmalaya, Jawa Barat 46151
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="text-xs sm:text-base font-light">(0265) 321323</p>
            </div>
            <div className="flex flex-row gap-3">
              <GrMail size={17} />
              <p className="text-xs sm:text-base font-light">
                pkmdtpkhuripan@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Akses Cepat</h1>
            <div className="flex flex-col font-light gap-1 sm:gap-2">
              <a href="/" className="text-xs sm:text-base font-light">
                Home
              </a>
              <a
                href="/daftar-buku"
                className="text-xs sm:text-base font-light"
              >
                Daftar Buku
              </a>
              <a
                href="/tentang-kami"
                className="text-xs sm:text-base font-light"
              >
                Tentang Kami
              </a>
              <a
                href="/profile"
                className="text-xs sm:text-base font-light"
              >
                Profile
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-2">
              <a href="" className="text-xs sm:text-base">
                Namaz Timings
              </a>
              <a href="" className="text-xs sm:text-base">
                FAQ
              </a>
            </div>
          </div> */}
          <div className="flex flex-col  xl:w-[149px]">
            <h1 className="text-sm sm:text-2xl font-bold">
              Ikuti Perjalanan Kami
            </h1>
            <div className="flex flex-row gap-3 items-center mt-4">
              <a href=" ">
                <FaFacebookF size={15} />
              </a>
              <a href=" ">
                <FaTwitter size={15} />
              </a>
              <a href=" ">
                <FaInstagram size={15} />
              </a>
              <a href=" ">
                <TfiYoutube size={15} />
              </a>
              <a href=" ">
                <FaLinkedinIn size={15} />
              </a>
              <a href="">
                <GrGooglePlus size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white sm:mt-4 mt-2 xl:mt-14"></div>
        <div className="text-center items-center justify-center flex flex-col mt-2 sm:mt-8">
          <h1 className=" text-white font-bold text-md sm:text-xl">
            Aturan & Kebijakan Penggunaan
          </h1>
          <p className="xl:w-[804px] sm:w-[600px] text-xs sm:text-sm xl:text-base text-white font-light">
            Dengan mengakses aplikasi sehat bersama anda patuh dengan aturan
            yang berkaitan privasi keamanan data sesuai dengan kebijakan yang
            berlaku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
