'use client';

import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Navbar2 = () => {
  return (
    <>
    <div className='flex flex-col bg-[#ffff] w-full h-max-[200px]'>
      <div className='gap-4 flex flex-row text-[#1a1668] px-10 py-4'>
        <Link href='/' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Home
        </Link>
        <Link href='/daftar-buku' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Daftar Buku
        </Link>
        <Link href='/tentang-kami' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Tentang Kami
        </Link>
        <div className='my-auto ml-auto'>
           <Link href="kontak" title="kontak" className="py-4 px-8 text-center bg-[#5488c4] text-white w-full rounded-md font-bold hover:bg-[#3e6491] ease-in-out duration-300">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar2
