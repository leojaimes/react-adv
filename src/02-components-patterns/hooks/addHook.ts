import { useEffect, useRef, useState } from "react"
import { onChangeArgs, ProductCardInitialValues } from "../interfaces/interfaces"
import { Product } from "../interfaces/product"

interface Props {
    value?: number,
    product: Product,
    onChange?: (args: onChangeArgs) => void
    initialValues?: ProductCardInitialValues
}
export const useAdd = ({ value = 0, product, onChange, initialValues }: Props) => {
    const [count, setCount] = useState<number>(initialValues?.count || value)

    console.log(initialValues)
    const isControlled = useRef(!!onChange) //doble negacion si es false es false si es true es true
    let isMounted = useRef(false)


    const reset = ()=> {
        setCount(initialValues?.count || value )
    }

    const onClickButtonAdd = (number: number) => {

        console.log(`isControlled ${isControlled.current}`)
 

        if (isControlled.current) {
            return onChange!({ count: number, product }) //el simbolo ! en este concepto es decirle a typescript que confie que siempre le va a llegar un valor de funcion diferente a undefined

        }

        let  newValue = Math.max(number + count, 0  )

        if(initialValues?.maxCount ){
            newValue = Math.min(newValue, initialValues?.maxCount  ) 
        }

        setCount( newValue)

        onChange && onChange({ count: newValue, product })

    }

    useEffect(() => {
        if(!isMounted.current) return 
            
        setCount(value)
        //isMounted.current= true
        
       
    }, [value])

    useEffect(()=>{
        isMounted.current = true
    },[ ])


    return {
        count,
        onClickButtonAdd,
        reset
    }
}

