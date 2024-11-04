"use client"
import Link from "next/link";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export const Nabvar = () => {
    const arrayItemsBar = [
        {name:"Home", ref:"/"},
        {name:"Productos", ref:"/products"},
        {name:"Conocenos", ref:"/products"},
        {name:"Carrito", ref:"/products"},
        {name:"Ofertas", ref:"/products"},
        {name:"Destacados", ref:"/products"},
        {name:"SignIn", ref:"/signin"},
        {name:"SignUp", ref:"/signup"},
    ]
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <nav className="bg-cyan-700 text-black font-semibold backdrop-blur-lg">
            <ol className = "flex h-16 text-white text-xl md:h-32 justify-between items-center mx-auto">
                <li className="ml-6">
                    <button className = 'md:hidden transition-colors border-2 border-orange-700 focus:ring-2 focus:ring-slate-200 -ml-2 p-1 bg-orange-500 rounded text-black  hover:bg-orange-700 hover:text-slate-100 active:bg-orange-900' onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <a href="/" className = "text-white text-5xl hover:rotate-12 duration-300 ml-6 hidden md:flex md:justify-center md:items-center">
                        <div className="text-8xl inline text-orange-600">T</div>
                        <div className="inline my-auto">echStore</div>
                        {/* <svg className= "w-28" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
                        </svg> */}
                    </a>
                </li>
                <li className="flex flex-col justify-center items-center flex-1">
                    <div className = "flex justify-center w-full px-20">
                        <div className="flex border-2 border-slate-700 w-full max-w-2xl bg-slate-100 rounded-2xl">
                            <input type="text" className = "text-slate-500 rounded-2xl w-full max-w-2xl border-none outline-none focus:ring-0 shadow-none text-xl pl-3 font-semibold"/>
                            <IoSearchSharp className = 'transition-colors mx-2 my-1 text-cyan-700 size-10 cursor-pointer'/>
                        </div>
                    </div>
                    <div className = "space-x-8 mt-1 hidden md:flex md:justify-center md:items-center pt-1">
                         <Link href="/" className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300">Home</Link>
                         <Link href='products' className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300">Productos</Link>
                         <Link href="/conocenos" className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300">Conocenos</Link>
                         <Link href="/products" className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300 hidden lg:inline">Carrito</Link>
                         <Link href="/products" className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300 hidden xl:inline">Ofertas</Link>
                         <Link href="/conocenos" className ="px-3 py-2 rounded-xl hover:scale-125  transition duration-300 hidden 2xl:inline">Destacados</Link>
                     </div>
                </li>
                <li className = "flex items-center mr-6">
                    <a href="/" className = "text-black hover:rotate-12 duration-300 mr-6 md:hidden">
                        <svg className= "visible w-14" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
                        </svg>
                    </a>
                    <div className = "space-x-8 ml-8 hidden md:flex">
                         <Link href="/signin" className ="px-3 py-2 text-white font-bold rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm hover:shadow-xl hover:shadow-white">Ingresar</Link>
                         <Link href="/signup" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors hidden lg:inline">Registro</Link>
                    </div>
                </li>
            </ol>
            
        </nav>
        <div className = {`z-10 flex flex-col absolute font-semibold text-xl mt-1 w-80 bg-orange-400 rounded-xl gap-3 md:hidden  ml-2 ${isOpen ? "h-auto p-3" : "max-h-0 p-0"} transition-all duration-300`}>
            {arrayItemsBar.map ((item) => {
                if (item.name === "SignIn") return <Link href={item.ref} className ={`px-3 py-2 text-white font-bold rounded-lg bg-orange-500 active:bg-orange-600 transition-colors hover:ring-2 hover:ring-white ${isOpen ? "block" : "hidden"}`}>{item.name}</Link>
                return <Link href={item.ref} className ={`px-3 py-2 text-slate-600 hover:ring-2 hover:ring-white transition-colors active:bg-orange-300 ${isOpen ? "block" : "hidden"} hover:bg- rounded-xl`}>{item.name}</Link>
            })}
        </div>
    </>
    );
}

export default Nabvar;