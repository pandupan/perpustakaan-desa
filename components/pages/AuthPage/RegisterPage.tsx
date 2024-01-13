"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
      handphone: event.target.handphone.value,
    };
    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(result);

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email Telah Digunakan" : "");
    }
  };

  return (
    <div className="mt-20 flex flex-row justify-center ">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-10 justify-center items-center sm:items-stretch xl:px-20">
            <h1 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-8 text-center">Register</h1>
            {error && <p className="text-red-500">{error}</p>}

            {/* Input Nama */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm sm:text-xl">Nama</h3>
              <input
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Masukkan Nama Anda"
                required
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="font-semibold text-sm sm:text-xl">Email</h3>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                placeholder="Masukkan Email Anda"
              />
            </div>

            {/* Input Nomor HP */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="font-semibold text-sm sm:text-xl">Nomor HP</h3>
              <input
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                id="handphone"
                name="handphone"
                type="text"
                placeholder="Masukkan Nomor HP Anda"
                required
              />
            </div>

            {/* Input Password */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="font-semibold text-sm sm:text-xl">Password</h3>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                placeholder="Masukkan Password Anda"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 justify-center items-center px-32">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#4bb6be] text-center text-white p-2 py-2 px-10 sm:text-base text-sm"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Register"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-row sm:text-base text-sm justify-center gap-2 mt-4  py-4">
          <p className="">Sudah Punya Akun?</p>
          <Link href="/login">
            <button className="text-[#4bb6be] hover:underline">Masuk</button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden lg:flex hidden">
        <div className="overflow-hidden w-[1000px]">
            <Image src="/image/HeroSection.png" alt="register" fill={true} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
