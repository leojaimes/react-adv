import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


interface Props {
    className?: string;
    style?: React.CSSProperties;
}



export const ProductTitle = ({ className, style }: Props) => {
    const { product } = useContext(ProductContext)
    const { name } = product

    return (
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {name}
        </span>
    )
}
