import { Product } from "@/components/cardProduct/types";
import Link from "next/link";

export const Card: React.FC<Product> = ({name, price, imgUrl}) => {
    return (
        <div className = "flex flex-col border-2 bg-white border-cyan-700 p-2 rounded-xl hover:scale-105 duration-300 transition shadow-xl text-xl  w-[300px]">
            <div className = "w-[250px] h-[250px] mx-auto mt-2 flex justify-center items-center">
                <img src={imgUrl} className = "rounded-2xl hover:scale-110 transition duration-300"></img>
            </div>
            <div className="m-2 text-lg flex-1 ">
                <p className = "text-slate-600 text-center">{name}</p>
            </div>
            <div className = "flex justify-between items-center py-2">
                <h3 className = "text-2xl font-bold text-slate-500 ml-8">$ {price}</h3>
                <Link href="/products/productDetail/1" className = "bg-orange-600 mr-8 px-8 py-2 rounded-md hover:bg-orange-700 text-white">Ver</Link>
            </div>
        </div>
    )
}

export default Card;