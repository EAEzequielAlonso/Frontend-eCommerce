import Link from "next/link";

export const Nabvar = () => {
    return (
        <nav>
            <ol className = "flex h-16  md:h-32 justify-between items-center max-w-7xl mx-auto shadow-lg bg-orange-300">
                <li className="ml-6 md:hidden">
                    <button className = 'transition-colors border-2 border-orange-700 focus:ring-2 focus:ring-slate-200 -ml-2 p-1 bg-orange-500 rounded text-black  hover:bg-orange-700 hover:text-slate-100' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <a href="/" className = "text-black hover:rotate-12 duration-300 mr-6 hidden md:visible">
                        <svg className= "visible w-14" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <div className = "flex">
                        <input type="text" className = " rounded-l-xl border-2 border-black text-slate-700 text-xl pl-3 font-semibold"/>
                        <button className = 'transition-colors border-2 border-orange-700 focus:ring-2 focus:ring-slate-200 -ml-2 bg-orange-500 rounded-r-xl text-black  hover:bg-orange-700 hover:text-slate-100'>
                            <svg className = "w-10 " data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className = "space-x-8 ml-8 hidden md:flex">
                         <Link href="/" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Home</Link>
                         <Link href="/products" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Productos</Link>
                         <Link href="/conocenos" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Conocenos</Link>
                         <Link href="/ingresar" className ="px-3 py-2 text-white font-bold rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm hover:shadow-xl hover:shadow-white">Ingresar</Link>
                         <Link href="/registro" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Registro</Link>
                     </div>
                </li>
                <li className = "flex items-center">
                    <a href="/" className = "text-black hover:rotate-12 duration-300 mr-6 md:hidden">
                        <svg className= "visible w-14" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
                        </svg>
                    </a>
                </li>
            </ol>
            <div className = "flex-col hidden mt-1 w-80 bg-red-400 rounded-xl p-2 space-y-1 pb-3 pt-2 border-t h-80 md:hidden shadow-2xl ml-2">
                <Link href="/" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Home</Link>
                <Link href="/jobs" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Productos</Link>
                <Link href="/projects" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Conocenos</Link>
                <Link href="/contact" className ="px-3 py-2 text-white font-bold rounded-lg bg-sky-400 hover:bg-sky-600 transition-colors">Ingresar</Link>
                <Link href="/pruebas" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Registro</Link>
            </div>
        </nav>
        // <nav className = "bg-orange-300 shadow-2xl mb-3 text-xl h-36 font-semibold">
        //     <div className = "flex h-16 justify-between items-center max-w-6xl mx-auto">
                
        //         <button className = 'transition-colors focus:ring-2 focus:ring-slate-200 -ml-2 p-1 rounded text-slate-500 hover:bg-sky-500 hover:text-slate-100 md:hidden' >
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //             </svg>
        //         </button>
        //         <div className = "flex items-center">
        //             <a href="/" className = "text-black hover:rotate-6 duration-300 ">
                        
        //                 <svg className= "visible h-32 py-3" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
        //                 </svg>
        //             </a>
        //             <div className = "space-x-8 ml-8 hidden md:flex">
        //                 <Link href="/" className ="px-3 py-2 text-sky-500">Home</Link>
        //                 <Link href="/products" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Productos</Link>
        //                 <Link href="/projects" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Conocenos</Link>
        //                 <Link href="/contact" className ="px-3 py-2 text-white font-bold rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm hover:shadow-xl hover:shadow-white">Ingresar</Link>
        //                 <Link href="/pruebas" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Registro</Link>
        //             </div>
        //         </div>
        //         <div className= "flex">
        //             <Link href ="/shopingCart" className = 'transition-colors focus:ring-2 focus:ring-slate-200 rounded-full text-slate-500 hover:text-sky-500 focus:ring-offset-1 '>
        //                 <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="size-10">
        //                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
        //                 </svg>
        //             </Link>
        //             <Link href ="/userDashboard" className = 'transition-colors ml-4 focus:ring-2 focus:ring-slate-200 rounded-full text-slate-500 hover:text-sky-500 focus:ring-offset-1'>
        //                 <img className = "h-10 w-10 rounded-full" 
        //                     src="https://ui-avatars.com/api?name=Ezequiel+Alonso" alt = "Ezequiel Alonso" />
        //             </Link>
        //         </div>
        //     </div>
        //     <div className = "flex-col absolute hidden mt-1 w-80 bg-red-400 rounded-xl p-2 space-y-1 pb-3 pt-2 border-t md:hidden shadow-2xl">
        //         <Link href="/" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Home</Link>
        //         <Link href="/jobs" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Productos</Link>
        //         <Link href="/projects" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Conocenos</Link>
        //         <Link href="/contact" className ="px-3 py-2 text-white font-bold rounded-lg bg-sky-400 hover:bg-sky-600 transition-colors">Ingresar</Link>
        //         <Link href="/pruebas" className ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Registro</Link>
        //     </div>
        // </nav>
    );
}

export default Nabvar;