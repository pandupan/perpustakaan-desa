import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="sm:px-20 sm:container px-4">
      <div className="relative flex xl:container bg-white shadow-md rounded-xl mt-4 flex-col-reverse lg:flex-row justify-center items-center gap-12 sm:pt-16 pt-10 sm:pb-24 pb-10 px-10">
        <div className="flex flex-col gap-6 sm:gap-4  z-[1] px-2 sm:px-0">
          <div>
          <h1 className="text-[#1a1668] text-4xl md:text-6xl xl:text-7xl font-bold">
            Perpustakaan Desa
          </h1>
          </div>
          <p className="max-w-[394px] text-sm xl:text-base text-justify text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu.
          </p>
          <button className="bg-[#5488c4] w-[154px] h-[43px] rounded-xl">
            <a className="place-self-center text-white">Baca Selengkapnya</a>
          </button>
        </div>
        <div>
        <div className="relative border-4 border-[#1a1668] w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px]  z-[1]">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] bg-black">
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
