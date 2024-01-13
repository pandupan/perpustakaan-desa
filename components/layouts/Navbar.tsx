'use client';

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px]">
        <div className="p-2 flex flex-row border-b px-20">
          <div className="my-auto">logo</div>
          <div className="w-full mx-4">
            <div className="flex flex-row border-0 rounded-r-md bg-[#f5f5f5]">
              <select
                title="kategori"
                id="pilihanKategori"
                name="kategori"
                className="bg-[#f5f5f5] rounded-l-md px-4"
              >
                <option
                  className="bg-[#f5f5f5] rounded-l-md"
                  value=""
                  disabled
                  selected
                >
                  Kategori
                </option>
                <option value="buah">Buah</option>
                <option value="sayuran">Sayuran</option>
                <option value="daging">Daging</option>
                <option value="ikan">Ikan</option>
              </select>
              <Input
                type="search"
                placeholder="Search"
                className="border-0 bg-[#f5f5f5] flex w-full"
              />
              <div className="my-auto px-2">
                <IoSearchOutline size={20} />
              </div>
            </div>
          </div>
              <div className="my-auto">
                <FaBookmark  size={20}/>
              </div>
              <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
              </Popover>

        </div>
      </div>
    </>
  );
};
export default Navbar;