import React from "react";

const InputBuku = () => {
  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Daftarkan Buku
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 p-6.5">
          <div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Foto Buku
              </label>
              <input
                title="fotobuku"
                type="file"
                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Penulis
              </label>
              <input
                type="text"
                placeholder="Masukan nama penulis"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Kategori
              </label>
              <input
                type="text"
                placeholder="Masukan kategori"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Judul buku
              </label>
              <input
                type="text"
                placeholder="Masukan judul buku"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Penerbit
              </label>
              <input
                type="text"
                placeholder="Masukan penerbit"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Tahun Terbit
              </label>
              <div className="relative">
                <input
                  title="tahunterbit"
                  type="date"
                  className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="mb-3 block text-black dark:text-white">
              Deskripsi buku
            </label>
            <textarea
              rows={6}
              placeholder="Masukan deskripsi buku"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>
          <div className="md:col-span-1">
            <label className="mb-3 block text-black dark:text-white">
              Stock
            </label>
            <input
              type="text"
              placeholder="Masukan stock buku"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-3 block text-black dark:text-white">
              Status
            </label>
            <input
              type="text"
              placeholder="Tersedia||Tidak Tersedia"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="my-auto ml-auto">
          <button
            title="Submit-buku"
            className="py-4 px-8 text-center bg-[#54c47b] text-white w-full rounded-md font-bold hover:bg-[#3e915a] ease-in-out duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBuku;
