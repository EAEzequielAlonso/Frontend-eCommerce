import { Product } from "@/components/cardProduct/types";

export const Card: React.FC<Product> = ({name, price, imgUrl}) => {
    return (
        <div className = "border-1 border-slate-400 rounded-xl shadow-xl text-sm bg-orange-200 w-[300px]">
            <div className = "w-[250px] mx-auto mt-5">
                <img src={imgUrl} className = "rounded-2xl"></img>
            </div>
            <div>
                <h3 className="text-lg">Descripcion:</h3>
                <p>{name}</p>
            </div>
            <div>
                <h3>Precio:</h3>
                <p> {price}</p>
            </div>
        </div>
    )
}

export default Card;