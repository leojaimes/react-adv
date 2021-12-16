
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useAdd } from '../hooks/addHook'
import { Product } from '../interfaces/product'



interface IProductProps {
    product: Product,

}

export const ProductCard = (product: IProductProps) => {
    const { imageUrl, name } = product.product

    const { count, onClickButtonAdd } = useAdd(1)
    return (
        <>
            {
                true &&
                <>
                    <div className={styles.productCard}>
                        <img className={styles.productImg} src={imageUrl ? imageUrl: noImage } alt="Coffe Mug" />
                        <span className={styles.productDescription}>{name}</span>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.buttonMinus}
                                onClick={() => { onClickButtonAdd(-1) }}
                            >-</button>
                            <div className={styles.countLabel}>{count}</div>
                            <button className={styles.buttonAdd}
                                onClick={() => { onClickButtonAdd(1) }}
                            >+</button>

                        </div>
                    </div>

                </>
            }

            {
                false &&
                <div className={styles.productCard}>
                    <img className={styles.productImg} src={noImage} alt="Coffe Mug" />
                </div>
            }



        </>

    )
}

export default ProductCard