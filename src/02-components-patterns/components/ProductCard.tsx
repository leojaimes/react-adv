
import styles from '../styles/styles.module.css'
import { useAdd } from '../hooks/addHook'
import {  createContext } from 'react'
import { ProductContextProps, IProductProps } from '../interfaces/interfaces'
 

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext




export const ProductCard = ({ product, children, className, style, onChange, value=0  }: IProductProps) => {
    const { count, onClickButtonAdd } = useAdd(  { value,   product, onChange } )
    return (
        <Provider value={
            {
                count,
                onClickButtonAdd,
                product,
               
            }

        }>
            <div className={  `${styles.productCard} ${className} `} 
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}



export default ProductCard