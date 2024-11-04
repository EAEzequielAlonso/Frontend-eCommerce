"use client"

import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

interface SignInProps {
    inUp: () => void;
  }

export const SignInForm: React.FC<SignInProps> = ({inUp}) => {
    return (
        <div>
        <div className = "text-xl text-slate-600 rounded-xl p-8 backdrop-filter relative">
            <h1 className = "text-4xl font-bold text-center mb-6">Login</h1>
            <form action="" >
                <div className = "relative my-6">
                    <input type="email" className ="block w-72 py-2 px-0 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-950 peer"  placeholder=""/>
                    <label htmlFor="" className = " duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Tu Email</label>
                    <FaUser className = "absolute top-4 right-4"/>
                </div>
                <div className = "relative my-10">
                    <input type="password" className ="block w-72 py-2 px-0  bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:norder.blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-950 peer" placeholder=""/>
                    <label htmlFor="" className = " duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Tu Clave</label>
                    <RiLockPasswordFill className = "absolute top-4 right-4"/>
                </div>
                <div className ="flex justify-between items-center">
                    <div className = "flex gap-2 items-center">
                        <input type="checkbox" className="size-6" name ="" id=""/>
                        <label htmlFor="Recordarme">Recordarme</label>
                    </div>
                    <Link href="/" className= "text-blue-950">¿Olvidaste Tu Clave?</Link>
                </div>
                <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-orange-500 text-emerald-800 hover:bg-orange-700 active:bg-orange-800 hover:text-white py-2 transition-colors" >SignIn</button>
                <div className="flex items-center">
                    <span className= "m-4">¿Nuevo por aqui? </span> <p className= "text-blue-950" onClick={inUp}>Create una Cuenta</p>
                </div>
            </form>
            </div>
        </div>
        )
} 