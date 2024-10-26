import { Product } from "@/components/cardProduct/types"
import { products } from "@/utils/products"
import Card from "./card"
import React from "react"

export const RenderCards: React.FC = () => {
    return (
        <div className = "flex justify-around flex-wrap max-w-7xl mx-auto mt-7 gap-5">
            {products.map((prod) => {
                return (
                    <Card name={prod.name} imgUrl={prod.imgUrl} price={prod.price}/>
                )
            })}
        </div>
    )
}

export default RenderCards