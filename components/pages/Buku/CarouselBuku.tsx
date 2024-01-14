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
    <div className="container px-20 flex flex-col w-full bg-white py-4">
      <div className="flex flex-row mt-10">
        <h1 className="text-4xl font-bold text-[#1a1668]">
          Rekomendasi Untukmu
        </h1>
        <Link href="/daftar-buku" className="ml-auto text-lg my-auto text-[#5488c4]">
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="flex flex-row lg:gap-20 gap-8 justify-center items-center w-full ">
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
              slidesPerView: 4,
            },
          }}
          className="flex justify-center items-center mx-auto "
        >
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] w-[100px] h-[100px] flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative max-w-[157px] max-h-[207px] bg-body">
                  <div className="w-[157px] h-[207px]"></div>
                </div>
                <div className="flex flex-col w-[157px] mt-2">
                  <h3 className="text-sm">Genre 1, Genre 2, Ge</h3>
                  <h1 className="font-semibold">Judul Buku</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselBuku;
