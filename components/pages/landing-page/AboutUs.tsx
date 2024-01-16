import React from "react";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="relative flex px-4 sm:px-20 xl:container flex-row justify-center items-center gap-12 mt-4">
        <div className="bg-white shadow-md rounded-xl flex flex-row p-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#1a1668] text-7xl font-bold">About Us</h1>
            <p className="w-[394px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu.
            </p>
            <div>
              <button className="bg-[#5488c4] px-4 py-2 rounded-xl text-white">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          <div className="relative border-4 border-[#5488c4] w-[595px] h-[477px] ">
            <div>
              <div className="absolute -top-10 -left-10 z-0">
                <div className="relative aspect-square w-[595px] h-[477px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
