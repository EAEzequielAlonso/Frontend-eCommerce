import { Product } from "@/components/cardProduct/types";

export const Card: React.FC<Product> = ({name, price, imgUrl}) => {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <img src={imgUrl}></img>
            </div>
            <div>
                <h4>Precio: {price}</h4>
            </div>
        </div>
    )
}

export default Card;