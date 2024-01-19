"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const CarouselBuku = () => {
  return (
    <div className="sm:container sm:px-20 px-4 flex flex-col w-full  py-4 ">
      <div className="flex flex-row mt-10">
        <h1 className="sm:text-4xl text-normal font-bold text-[#1a1668]">Rekomendasi Untukmu</h1>
        <Link
          href="/daftar-buku"
          className="ml-auto sm:text-lg text-xs my-auto text-[#5488c4]"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="flex flex-row lg:gap-20 gap-8  items-center w-full bg-white rounded-xl shadow-lg  mt-4 ">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="flex justify-center items-center mx-auto "
        >
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-full h-[300px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="sm:w-[157px] sm:h-[207px] w-[57px] h-[137px]"></div>
                </div>
                <div className="flex flex-col w-max-[157px] mt-2">
                  <h3 className="sm:text-sm text-xs">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold sm:text-normal text-sm">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="flex flex-row lg:gap-20 gap-2  w-full bg-white rounded-xl shadow-lg  mt-4 sm:hidden ">
        <div className="w-full h-[300px] flex items-center ">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <div className="relative bg-body">
              <div className="w-[57px] h-[127px]"></div>
            </div>
            <div className="flex flex-col w-[107px] mt-2">
              <h3 className="text-xs">Genre 1, Genre 2, Ge</h3>
              <h1 className="font-semibold text-sm">Judul Buku</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] flex items-center ">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <div className="relative bg-body">
              <div className="w-[57px] h-[127px]"></div>
            </div>
            <div className="flex flex-col w-[107px] mt-2">
              <h3 className="text-xs">Genre 1, Genre 2, Ge</h3>
              <h1 className="font-semibold text-sm">Judul Buku</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselBuku;
