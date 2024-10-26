import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

export default function SignUpForm () {
    return (
        <div>
        <div className = "bg-slate-900 border text-xl border-orange-500 rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 mt-20 relative">
            <h1 className = "text-4xl text-white font-bold text-center mb-6">Register</h1>
            <form action="" >
                <div className = "relative my-6">
                    <input type="email" className ="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-950 peer"  placeholder=""/>
                    <label htmlFor="" className = "absolute text-white duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Email</label>
                    <TfiEmail className = "absolute top-4 right-4"/>
                </div>
                <div className = "relative my-6">
                    <input type="text" className ="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-950 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-950 peer"  placeholder=""/>
                    <label htmlFor="" className = "absolute text-white duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Nombre Completo</label>
                    <FaUser className = "absolute top-4 right-4"/>
                </div>
                <div className = "relative my-10">
                    <input type="password" className ="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:norder.blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-950 peer" placeholder=""/>
                    <label htmlFor="" className = "absolute text-white duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Clave</label>
                    <RiLockPasswordFill className = "absolute top-4 right-4"/>
                </div>
                <div className = "relative my-10">
                    <input type="password" className ="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:norder.blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-950 peer" placeholder=""/>
                    <label htmlFor="" className = "absolute text-white duration-300 transform -traslate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Confirmación</label>
                    <RiLockPasswordFill className = "absolute top-4 right-4"/>
                </div>
                
                <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-orange-700 active:bg-orange-800 hover:text-white py-2 transition-colors" >SignIn</button>
                <div>
                    <span className= "m-4">¿Ya tienes una cuenta? <Link href="signin" className= "text-blue-950">Haz Login</Link></span>
                </div>
            </form>
            </div>
        </div>
        )
}