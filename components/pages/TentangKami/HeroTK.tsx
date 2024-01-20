import React from "react";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";

const HeroTK = () => {
  const ImageURL = [
    {
      image: "https://i.ibb.co/BcVJGqT/slidehero1.png"
    }
  ];
  const backgroundImageStyle = {
    backgroundImage: `url(${ImageURL[0].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative px-10 h-[400px] bg-white" style={backgroundImageStyle}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container">
          <h1 className="text-5xl font-bold text-white">Perpustakaan Desa</h1>
          <h2 className="text-2xl font-semibold text-white">Website Perpustakaan</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroTK;
