
import styles from '../styles/styles.module.css'
import { useAdd } from '../hooks/addHook'
import {  createContext } from 'react'
import { ProductContextProps, IProductProps } from '../interfaces/interfaces'
 

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext




export const ProductCard = ({ product, children }: IProductProps) => {
    const { count, onClickButtonAdd } = useAdd(1)
    return (
        <Provider value={
            {
                count,
                onClickButtonAdd,
                product
            }

        }>
            <div className={styles.productCard} >
                {children}
            </div>
        </Provider>
    )
}



export default ProductCard