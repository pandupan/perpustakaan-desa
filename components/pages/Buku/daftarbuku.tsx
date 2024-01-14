"use client";
import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";

const ListBuku = () => {
  return (
    <div className="flex flex-row container gap-12 mt-10 px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1a1668] text-3xl font-bold">Opsi Filter</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#ffffff] rounded-md border p-4 text-[#1a1668] text-lg">
              <div className="">Kategori Buku</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-md mt-0.5 bg-[#ffffff] py-4 px-6 flex flex-row gap-12">
                <div className="flex flex-col gap-5">
                  {/* CHECKBOX KIRI */}
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 0
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 1
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 2
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 3
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 4
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 5
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 6
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {/* CHECKBOX KANAN */}
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 7
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 8
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 9
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 10
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 11
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 12
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Genre 13
                    </label>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#ffffff] rounded-md border p-4 text-[#1a1668] text-lg">
              <div className="">Pilih Tahun</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-md mt-0.5 bg-[#ffffff] py-4 px-6 flex flex-row gap-12">
                <div className="flex flex-col gap-5">
                  {/* CHECKBOX KIRI */}
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2020
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2019
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2018
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2017
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2016
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2015
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2014
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {/* CHECKBOX KANAN */}
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2013
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2012
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2011
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2010
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2009
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2008
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Checkbox
                      id="terms"
                      className="w-[20px] h-[20px] border-2 border-[#bfbfbf]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-lg my-auto font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2007
                    </label>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button
          title="Reset"
          className="py-4 px-8 text-center bg-[#5488c4] text-white w-full rounded-md font-bold hover:bg-[#3e6491] ease-in-out duration-300"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-[#1a1668] text-3xl font-bold">Buku</h1>
        {/* LIST BUKU */}
        <Link
          href="/daftar-buku/detailbuku"
          className="bg-[#ffffff] rounded-md border p-6 text-[#1a1668] text-lg flex flex-row gap-6"
        >
          <div>
            <div className="bg-[#cccccc] w-[210px] h-[307px] rounded-md"></div>
          </div>
          <div className="flex flex-col py-4">
            <h3 className="text-[#5488c4] font-semibold">
              Genre 0, Genre 1, Genre 3
            </h3>
            <h1 className="text-3xl font-bold">Judul Buku</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
              non praesentium nemo totam! Corrupti praesentium, officiis
              distinctio maiores sit debitis veritatis quam molestias voluptate
              voluptatem. Minima molestias quae hic.
            </p>
            <div className="ml-auto mt-auto">
              <div className="py-2 px-4 max-w-[200px] text-center bg-[#5488c4] text-white rounded-md font-bold">
                Tersedia
              </div>
            </div>
          </div>
        </Link>
        <div className="bg-[#ffffff] rounded-md border p-6 text-[#1a1668] text-lg flex flex-row gap-6">
          <div>
            <div className="bg-[#cccccc] w-[210px] h-[307px] rounded-md"></div>
          </div>
          <div className="flex flex-col py-4">
            <h3 className="text-[#5488c4] font-semibold">
              Genre 0, Genre 1, Genre 3
            </h3>
            <h1 className="text-3xl font-bold">Judul Buku</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
              non praesentium nemo totam! Corrupti praesentium, officiis
              distinctio maiores sit debitis veritatis quam molestias voluptate
              voluptatem. Minima molestias quae hic.
            </p>
            <div className="ml-auto mt-auto">
              <div className="py-2 px-4 max-w-[200px] text-center bg-[#5488c4] text-white rounded-md font-bold">
                Tersedia
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-4">
          <h3 className="my-auto font-medium">Menampilkan 2 dari 10 data</h3>
          <div className="ml-auto flex flex-row gap-2">
            <Link href="#" className="py-4 px-4 max-w-[200px] text-center bg-[#f5f5f5] text-[#5488c4] hover:bg-[#5488c4] hover:text-[#f5f5f5] ease-in-out duration-300 rounded-md font-bold">
              Sebelumnya
            </Link>
            <Link href="#" className="py-4 px-6 max-w-[70px] text-center bg-[#5488c4] text-white rounded-md font-bold">
              1
            </Link>
            <Link href="#" className="py-4 px-6 max-w-[70px] text-center bg-[#f5f5f5] text-[#5488c4] hover:bg-[#5488c4] hover:text-[#f5f5f5] ease-in-out duration-300 rounded-md font-bold">
              2
            </Link>
            <Link href="#" className="py-4 px-6 max-w-[70px] text-center bg-[#f5f5f5] text-[#5488c4] hover:bg-[#5488c4] hover:text-[#f5f5f5] ease-in-out duration-300 rounded-md font-bold">
              3
            </Link>
            <Link href="#" className="py-4 px-6 max-w-[200px] text-center bg-[#f5f5f5] text-[#5488c4] hover:bg-[#5488c4] hover:text-[#f5f5f5] ease-in-out duration-300 rounded-md font-bold">
              Selanjutnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBuku;
