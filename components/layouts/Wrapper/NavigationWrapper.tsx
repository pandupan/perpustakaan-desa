'use client';

import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import { usePathname } from "next/navigation";

const Index = ( { children }: { children: React.ReactNode} ) => {
  const pathname = usePathname()
  const withOutNav = ['/admin','/login','register']

  return (
    <>
      {
        !withOutNav.includes(pathname) && (
          <>
            <Navbar/>      
            <Navbar2/>      
          </>
        )
      }
      { children }
    </>
  )
}

export default Index