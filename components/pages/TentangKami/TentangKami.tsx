import React from "react";

const TentangKami = () => {
  return (
    <div className="w-full bg-white pt-30">
      <div className="bg-[#f5f5f5] w-full px-20 border">
      <div className="flex flex-row gap-10 container justify-center w-full">
        <div>
          <div className="relative w-[450px] h-[600px] -mt-20 bg-[#64748b]"></div>
        </div>
        <div className="flex flex-col gap-10 w-full justify-center">
          <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-[#5488c4]">Tentang Kami</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, optio dolore dolorum incidunt velit, itaque accusantium
            nemo earum recusandae illum fugit distinctio, neque omnis aut
            facilis maxime architecto doloribus nulla.
          </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold text-[#5488c4]">Alamat</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, optio dolore dolorum incidunt velit, itaque
                accusantium nemo earum recusandae illum fugit distinctio, neque
                omnis aut facilis maxime architecto doloribus nulla.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold text-[#5488c4]">Kontak</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, optio dolore dolorum incidunt velit, itaque
                accusantium nemo earum recusandae illum fugit distinctio, neque
                omnis aut facilis maxime architecto doloribus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TentangKami;
