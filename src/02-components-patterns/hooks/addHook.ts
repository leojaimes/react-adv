import { useEffect, useRef, useState } from "react"
import { onChangeArgs } from "../interfaces/interfaces"
import { Product } from "../interfaces/product"

interface Props {
    value?:number,
    product: Product, 
    onChange?  : ( args: onChangeArgs )=> void 
}
export const useAdd = ( { value =0 , product, onChange }: Props   ) => {
    const [count, setCount] = useState(value)

    console.log({count})
    const isControlled =  useRef(!!onChange) //doble negacion si es false es false si es true es true


    const onClickButtonAdd = (number: number) => {

        console.log(`isControlled ${isControlled.current}`)

        if(isControlled.current ){
            return onChange!( {count:  number, product} ) //el simbolo ! en este concepto es decirle a typescript que confie que siempre le va a llegar un valor de funcion diferente a undefined
            
        }

        const newValue =    Math.max(number + count, 0)
 
        setCount(count => { return Math.max(number + count, 0) })

       onChange && onChange( {count:  newValue, product} )

    }

    useEffect(()=>{
        setCount(value)
    },[value])


    return {
        count,
        onClickButtonAdd
    }
}

 