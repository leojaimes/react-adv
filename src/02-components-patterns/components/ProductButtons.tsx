import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'


export const ProductButtons = (
    /*{
        count,
        onClickButtonAdd
    }
        : {
            count: number,
            onClickButtonAdd: (number: number) => void
        }*/
) => {
    const { count, onClickButtonAdd } = useContext(ProductContext)
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus}
                onClick={() => { onClickButtonAdd(-1) }}
            >-</button>
            <div className={styles.countLabel}>{count}</div>
            <button className={styles.buttonAdd}
                onClick={() => { onClickButtonAdd(1) }}
            >+</button>
        </div>
    )
}
