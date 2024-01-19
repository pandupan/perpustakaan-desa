"use client";
import React from "react";
import { useState } from "react";

const DetailBuku = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <div className="bg-[#ffffff] container px-4 lg:px-44 sm:px-20 border p-4 md:p-6 text-lg flex flex-col md:flex-row gap-6">
        <div className="flex justify-center items-center">
        <div className="md:w-[210px] md:h-[307px] w-[110px] h-[157px]">
          <div className="bg-[#cccccc] w-full h-full rounded-md"></div>
        </div>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="text-[#717171] font-medium">Penulis Buku</h3>
          <h1 className="text-2xl font-semibold text-[#151515]">Judul Buku</h1>
          <h3 className="text-[#5488c4] font-medium text-sm">
            Genre 0, Genre 1, Genre 3
          </h3>
          <h1 className="text-[#151515] font-medium text-sm mt-4">
            Deskripsi Buku
          </h1>
          <p
            className={`mt-4 ${
              showFullDescription ? "" : "line-clamp-4"
            } text-sm`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            magni incidunt, laborum natus in ullam provident non sed enim
            exercitationem? Vero, eveniet libero fugiat magni quidem quam vitae
            provident quas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum, est beatae. Repellendus fugit qui ad eligendi vitae
            illo quis officiis non magnam. Tempore fuga, recusandae fugiat
            temporibus nihil dignissimos error. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Totam libero molestias ex dignissimos
            explicabo neque incidunt magnam, ducimus dicta distinctio ipsa,
            delectus expedita officia amet a laudantium eius facilis debitis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            commodi totam iste corrupti aspernatur quam non inventore
            perspiciatis nam quasi hic incidunt, quisquam ullam placeat
            obcaecati provident ipsam maxime. Ad? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Soluta maiores quam aperiam temporibus
            explicabo, iusto est suscipit facere adipisci impedit numquam
            veritatis nemo itaque! Ex pariatur quasi fugiat hic a.
          </p>
          {showFullDescription ? (
            <button
              className="text-[#5488c4] hover:text-[#3e6491] ease-in-out duration-300 mt-2 md:mt-0 ml-auto font-medium text-sm"
              onClick={toggleDescription}
            >
              Ringkas Deskripsi
            </button>
          ) : (
            <button
              className="text-[#5488c4] hover:text-[#3e6491] ease-in-out duration-300 mt-2 md:mt-0 ml-auto font-medium text-sm"
              onClick={toggleDescription}
            >
              Baca Selengkapnya
            </button>
          )}
          <h1 className="text-[#151515] font-medium mt-4 text-sm">
            Detail Buku
          </h1>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:flex md:flex-row md:gap-2">
              <h3 className="text-sm my-auto">Tanggal Terbit: 22-05-2010</h3>
            </div>
            <div className="md:flex md:flex-row">
              <h3 className="text-sm my-auto">Penerbit: PT. ASDASDAD</h3>
            </div>
          </div>
          <div className="ml-auto my-auto mt-2 md:mt-0">
            <div className="py-2 px-2 max-w-[200px] text-sm text-center bg-[#5488c4] text-white rounded-md font-bold">
              Tersedia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
