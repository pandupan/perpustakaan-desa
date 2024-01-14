import React from 'react'

const DetailBuku = () => {
  return (
    <div>
      <div className="bg-[#ffffff] container px-20 border p-6 text-[#1a1668] text-lg flex flex-row gap-6">
          <div>
            <div className="bg-[#cccccc] w-[210px] h-[307px] rounded-md">
              
            </div>
          </div>
          <div className="flex flex-col py-4">
            <h3 className="text-[#5488c4] font-semibold">Genre 0, Genre 1, Genre 3</h3>
            <h1 className="text-3xl font-bold">Judul Buku</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
              non praesentium nemo totam! Corrupti praesentium, officiis
              distinctio maiores sit debitis veritatis quam molestias voluptate
              voluptatem. Minima molestias quae hic.
            </p>
            <div className="ml-auto">
              <div className="py-4 px-4 max-w-[200px] text-center bg-[#5488c4] text-white rounded-md font-bold">
                Tersedia
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DetailBuku
