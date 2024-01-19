"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

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
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();

  console.log(data);
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] py-2">
        <div className="p-2 flex flex-row border-b gap-4 lg:px-10">
          <Link href="/" className="my-auto flex-row flex gap-4">
            <div className="relative  w-[50px] h-[50px]">
              <Image
              src="/images/logo/logo.png"
              alt="logo"
              fill={true}
              className="object-cover w-[50px] h-[50px]"
              />  
            </div>
            <div className="lg:flex flex-col hidden">
              <h1 className="font-black text-xl text-[#1a1668]">
                Perpustakaan Desa
              </h1>
              <h3 className="">
                Website Perpustakaan
              </h3>
            </div>
          </Link>
          <div className="flex mx-auto my-auto">
            <div className="flex flex-row border-0 rounded-md bg-[#f5f5f5]">
              <div className="my-auto border-r border-[#a8a8a8]-2">
                <Select>
                  <SelectTrigger className="sm:w-[150px] w-full">
                    <div className="sm:flex hidden">
                    <SelectValue placeholder="Kategori" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kategori1">Kategori 1</SelectItem>
                    <SelectItem value="kategori2">Kategori 2</SelectItem>
                    <SelectItem value="kategori3">Kategori 2</SelectItem>
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
            {/* KONDISI BELUM LOGIN */}
            {/* <div className='my-auto ml-auto'>
              <Link href="/login" title="Login" className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300">
                Masuk
              </Link>
            </div> */}
            {/* KONDISI UDAH LOGIN */}
            {data !== null ? (
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-row my-auto gap-4">
                    <div className="bg-[#5a6c76] w-[50px] h-[50px] rounded-xl my-auto"></div>
                    <div className="lg:flex hidden flex-col gap-1.5 text-start">
                      <h1 className="text-lg font-bold text-[#1a1668]">
                        UserName
                      </h1>
                      <h3 className="text-sm">useremail@gmail.com</h3>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-1.5 text-start border-dotted border-b-2 w-full pb-2 border-[#e9ecef]">
                      <h1 className="text-lg font-bold text-[#1a1668]">
                        UserName
                      </h1>
                      <h3 className="text-normal text-[#999ea3]">
                        user@gmail.com
                      </h3>
                    </div>
                    <Link
                      href="/profile"
                      className="flex flex-col gap-1.5 text-start border-dotted border-b-2 w-full py-2 border-[#e9ecef] hover:bg-[#f5f5f5] ease-in-out duration-300"
                    >
                      <div className="flex flex-row ">
                        <div className="mx-2 my-auto text-[#5488c4]">
                          <FaRegUser size={15} />
                        </div>
                        <h1 className="text-normal font-normal">Profile</h1>
                      </div>
                    </Link>
                    <Link
                      href="/profile"
                      className="flex flex-col gap-1.5 text-start border-dotted border-b-2 w-full py-2 border-[#e9ecef] hover:bg-[#f5f5f5] ease-in-out duration-300"
                    >
                      <div className="flex flex-row ">
                        <div className="mx-2 my-auto text-[#5488c4]">
                          <FaRegBookmark size={15} />
                        </div>
                        <h1 className="text-normal">Penanda Buku</h1>
                      </div>
                    </Link>
                    <div className="py-4 w-full">
                      <button
                        title="logout"
                        className="py-3 text-center bg-[#5488c4] text-white w-full rounded-xl font-bold hover:bg-[#3e6491] ease-in-out duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="my-auto ml-auto">
                <Link
                  href="/login"
                  title="Login"
                  className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300"
                >
                  Masuk
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;