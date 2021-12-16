import { useState } from "react"


export const useAdd = (initValue: number) => {
    const [count, setCount] = useState(initValue)
    const onClickButtonAdd = (number: number) => {
        setCount(count => { return Math.max(number + count, 1) })
    }
    return {
        count,
        onClickButtonAdd
    }
}

 