'use client';

import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import { usePathname } from "next/navigation";
import { SessionProvider } from 'next-auth/react';

const Index = ( { children }: { children: React.ReactNode} ) => {
  const pathname = usePathname()
  const withOutNav = ['/dashboard','/login','register']

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
    </SessionProvider>
  )
}

export default Index
