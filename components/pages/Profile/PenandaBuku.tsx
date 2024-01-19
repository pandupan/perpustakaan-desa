"use client";
import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PenandaBuku = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <Tabs defaultValue="tanda" className="w-full">
            <div className="flex justify-center bg-white py-4 ">
              <TabsList>
                <TabsTrigger value="tanda">8 Buku yang kamu tandai</TabsTrigger>
                <TabsTrigger value="sedangdipinjam">4 Sedang dipinjam</TabsTrigger>
                <TabsTrigger value="telahdipinjam">3 Telah dipinjam</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="tanda">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4 py-8">
                               <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sedangdipinjam">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4 py-8">
                                <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                </div>
              </div>
            </TabsContent>
            <TabsContent value="telahdipinjam">
              <div className="flex flex-row flex-wrap mx-auto items-center bg-white justify-center w-full rounded-xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-20 mt-4 py-8">
                <div className="flex flex-wrap flex-row lg:gap-10 gap-4 justify-center">
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                  <div className="flex items-center justify-center">
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
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PenandaBuku;
