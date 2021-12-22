
import styles from '../styles/styles.module.css'
import { useAdd } from '../hooks/addHook'
import { createContext } from 'react'
import { ProductContextProps, IProductProps } from '../interfaces/interfaces'
import { countReset } from 'console'


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext




export const ProductCard = ({ product, children, className, style, onChange, value = 0, initialValues }: IProductProps) => {
    const { count, onClickButtonAdd, reset } = useAdd({ value, product, onChange, initialValues })


 
    return (
        <Provider value={
            {
                count,
                onClickButtonAdd,
                product,
                initialValues
            }

        }>
            <div className={`${styles.productCard} ${className} `}
                style={style}
            >
                {
                    children && 
                    
                    children({
                        count: count,
                        isMaxCountReached: !!initialValues?.maxCount &&  initialValues.maxCount === count,
                        maxCount: initialValues?.maxCount,
                        product: product,
                        increaseBy: onClickButtonAdd,
                        reset: reset,

                    })
                
                }
            </div>
        </Provider>
    )
}



export default ProductCard