'use client';

import React from 'react'
import Link from 'next/link'

const Navbar2 = () => {
  return (
    <>
    <div className='flex flex-col bg-[#ffff] w-full h-max-[200px]'>
      <div className='gap-4 flex flex-row text-[#1a1668] px-20 py-4'>
        <Link href='/' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Home
        </Link>
        <Link href='/daftarbuku' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Katalog
        </Link>
        <Link href='/profile' className=' font-bold rounded-xl p-2 hover:text-[#5488c4]'>
          Profile
        </Link>
        <div className='my-auto ml-auto'>
           <Link href="kontak" title="kontak" className="py-4 px-8 text-center bg-[#5488c4] text-white w-full rounded-xl font-bold hover:bg-[#3e6491] ease-in-out duration-300">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar2
