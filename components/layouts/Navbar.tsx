"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] py-2">
        <div className="p-2 flex flex-row border-b px-20">
          <div className="my-auto">logo</div>
          <div className="flex mx-auto my-auto">
            <div className="flex flex-row border-0 rounded-md bg-[#f5f5f5]">
              <div className="my-auto border-r-1 border">
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="border-0 bg-[#f5f5f5] flex w-full"
              />
              <button title="search" className="my-auto px-2">
                <IoSearchOutline size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="my-auto">
              <FaRegBookmark size={25} />
            </div>
            <Popover>
              <PopoverTrigger>
                <div className="flex flex-row my-auto gap-4">
                  <div className="bg-[#5a6c76] w-[50px] h-[50px] rounded-xl my-auto"></div>
                  <div className="flex flex-col gap-1.5 text-start">
                    <h1 className="text-lg font-bold">UserName</h1>
                    <h3 className="text-sm">useremail@gmail.com</h3>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;