  'use client'
  import React from 'react'
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



  const ListBuku = () => {
    return (
      <div className='flex flex-row container gap-20'>
        <div className='flex flex-col'>
          <h1 className='text-[#1a1668] text-3xl font-bold' >
            Opsi Filter
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className='bg-[#ffffff] rounded-md border p-4 text-[#1a1668] text-lg'>
                <div className=''>
                  Kategori Buku
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='rounded-md mt-0.5 bg-[#ffffff] p-4'>
                Yes. It adheres to the WAI-ARIA design pattern.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[#1a1668] text-3xl font-bold'>
            Buku
          </h1>
        </div>
      </div>
    )
  }

  export default ListBuku
