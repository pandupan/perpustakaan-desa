import CarouselBuku from '@/components/pages/Buku/CarouselBuku'
import AboutUs from '@/components/pages/landing-page/AboutUs'
import Keunggulan from '@/components/pages/landing-page/Keunggulan'
import Hero from '@/components/pages/landing-page/herosection'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Hero/>
      <CarouselBuku/>
      <Keunggulan/>
      <AboutUs/>
    </>
  )
}
