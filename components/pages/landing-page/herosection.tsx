/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link'

const imageSlider = [
  {
    id:1,
    imageUrl:'https://i.ibb.co/tZnQVj1/slide-hero1.jpg',
    section:'RECRUITMENT', 
    subsection:'All Talent Found',
    link:'/recruitment'
  },
  {
    id:2,
    imageUrl:'https://i.ibb.co/8sPRSb1/slide-hero2.jpg',
    section:'JOB COUNSELING',
    subsection:'All Talent Conected',
    link:'/counseling'
  }
]
const Hero = () => {

  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };
  

  return (
    <div className="relative flex justify-center items-center w-full h-[450px] sm:h-[450px] z-[1]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        ref={swiperRef}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {imageSlider.map((item,id)=>(
          <SwiperSlide key={item.id}>
            <div className="container absolute inset-0 flex items-center xl:px-20 text-white z-20">
              <div className='sm:space-y-4'>
                <motion.h3 
                  className='hidden md:block text-2xl font-normal'
                    initial={{ 
                      opacity: 0,
                      y : id % 2 === 1 ? -100 : 0,
                      x : id % 2 === 1 ? 0 :100 
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0, 
                      x:0 
                    }}
                    transition={{
                      duration: 0.8
                    }}
                >
                  {item.subsection}
                </motion.h3>
                <div className='space-y-2 sm:space-y-6'>
                  <motion.h1
                      className="text-3xl sm:text-5xl md:text-7xl xl:8xl font-black font-montserrat"
                      initial={{ 
                        opacity: 0,
                        y : id % 2 === 1 ? -100 : 0,
                        x : id % 2 === 1 ? 0 :100 
                      }}
                      whileInView={{ 
                        opacity: 1,
                        y: 0, 
                        x:0 
                      }}
                      transition={{
                        duration: 0.8
                      }}
                    >
                      <AnimatePresence>
                        {item.section.split('').map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, rotate: 30 }} 
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.1,
                            }}
                            style={{ display: 'inline-block', transformOrigin: 'center' }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </motion.span>
                        ))}
                      </AnimatePresence>
                  </motion.h1>
                  <Link href={item.link}>
                    <motion.button 
                      className='mt-10 md:ml-24 text-sm sm:text-lg px-6 py-3 bg-blue-400 hover:bg-purple-500 z-[20]'
                      initial={{ 
                        opacity: 0,
                        y : id % 2 === 1 ? -100 : 0,
                        x : id % 2 === 1 ? 0 :100 
                      }}
                      whileInView={{ 
                        opacity: 1,
                        y: 0, 
                        x:0 
                      }}
                      transition={{
                        duration: 0.8
                      }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden w-full h-full absolute md:flex justify-between items-center z-[19]'>
              <button onClick={slidePrev} title='left' className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 ml-4 p-1">
                <BsArrowLeft size={15}/>
              </button>
              <button onClick={slideNext} title='right' className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 mr-4 p-1">
                <BsArrowRight size={15}/>
              </button>
            </div>
            <div
              className='absolute inset-0 z-[2] bg-cover'
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default Hero
