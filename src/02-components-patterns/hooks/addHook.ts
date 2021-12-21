import { useState } from "react"
import { onChangeArgs } from "../interfaces/interfaces"
import { Product } from "../interfaces/product"

interface Props {
    product: Product, 
    onChange?  : ( args: onChangeArgs )=> void 
}
export const useAdd = ( { product, onChange }: Props   ) => {
    const [count, setCount] = useState(0)


    const onClickButtonAdd = (number: number) => {

        const newValue =    Math.max(number + count, 0)

        setCount(count => { return Math.max(number + count, 0) })

       onChange && onChange( {count:  newValue, product} )

    }
    return {
        count,
        onClickButtonAdd
    }
}

 