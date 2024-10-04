import { Product } from "@/components/cardProduct/types"
import { products } from "@/utils/products"
import Card from "./card"
import React from "react"

export const RenderCards: React.FC = () => {
    return (
        <>
            {products.map((prod) => {
                return (
                    <Card name={prod.name} imgUrl={prod.imgUrl} price={prod.price}/>
                )
            })}
        </>
    )
}

export default RenderCards