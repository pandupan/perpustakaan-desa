import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'

const index = ( { children }: { children: React.ReactNode}) => {
  return (
    <>
      <Navbar/>      
      <Navbar2/>      
      { children }
    </>
  )
}

export default index
