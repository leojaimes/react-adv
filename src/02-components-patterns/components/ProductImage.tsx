import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'


interface Props {
    imageUrl?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ imageUrl = '', className = '', style }: Props) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string;
    if (imageUrl) {
        imgToShow = imageUrl
    } else if (product.imageUrl) {
        imgToShow = product.imageUrl
    } else {
        imgToShow = noImage
    }


    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgToShow}
            alt="Coffe Mug"
        />
    )
}