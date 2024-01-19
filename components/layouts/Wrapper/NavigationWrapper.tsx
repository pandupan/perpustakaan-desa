'use client';

import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import { usePathname } from "next/navigation";
import { SessionProvider } from 'next-auth/react';
import Footer from '../Footer';

const Index = ( { children }: { children: React.ReactNode} ) => {
  const pathname = usePathname()
  const withOutNav = ['/dashboard','/login','/register','/dashboard/create','/dashboard/profile', '/dashboard/data-buku', '/dashboard/data-peminjaman']

  return (
    <SessionProvider>
      {
        !withOutNav.includes(pathname) && (
          <>
            <Navbar/>      
            <Navbar2/>      
          </>
        )
      }
        { children }
      {
        !withOutNav.includes(pathname) && (
          <>
            <Footer/>
          </>
        )
      }
    </SessionProvider>
  )
}

export default Index
