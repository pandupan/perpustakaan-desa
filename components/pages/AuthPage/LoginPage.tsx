'use client';

import React from "react";
import Image from "next/image"; 
import { useState } from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState("")

  const handleLogin = async (e : any) => {
    e.preventDefault()
    try{
      const res = await signIn("credentials", {
        redirect : false,
        email : e.target.email.value,
        password : e.target.password.value,
        callbackUrl : "/"
      })
      if(!res?.error){
        push("/")
      } else {
        console.log(res.error)
      }
    } catch (err){
      console.log(err)
    }
  }




  return (
    <div className="mt-20 flex flex-row justify-center "> 
      <div className="flex flex-col px-20 ">
      {error && <p className="text-red-500">{error}</p>}
        <h1 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-8 text-center">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col justify-center items-center sm:items-stretch">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm sm:text-xl">Email</h3>
              <input
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                type="email"
                id="email" 
                name="email"
                placeholder="Masukkan Email Anda"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="font-semibold text-sm sm:text-xl">Password</h3>
              <input
                className="p-2 border-2 border-[#4bb6be] rounded sm:w-auto w-[250px] sm:text-base text-sm"
                type="password" 
                id="password" 
                name="password"
                placeholder="Masukkan Password Anda"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 justify-center items-center px-32">
              <div className="flex justify-center">
                <button 
                  className="bg-[#4bb6be] text-center text-white p-2 py-2 px-10 sm:text-base text-sm"
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading?"Loading...":"Login"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-2 mt-4 border-b border-black py-4">
          <button className="text-[#4bb6be] sm:text-base text-sm hover:underline">
            Lupa Password?
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4  sm:text-base text-sm py-4">
          <p className="justify-center text-center items-center ">
            Belum Punya Akun ?
          </p>
          <a href="/register" className="text-[#4bb6be] text-center hover:underline">
            Daftar Akun
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden lg:flex hidden">
      </div>
    </div>
  );
};

export default LoginPage;
