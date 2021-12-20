import { Product } from '../interfaces/product';
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from "../components";

const products: Product[] = [
    {
        id: '1',
        name: 'Cofee Mug',
        imageUrl: './coffee-mug.png'
    },
    /*{
        id: '2',
        name: 'Cofee Mug 2',
        imageUrl: './coffee-mug.png'
    },
    {
        id: '3',
        name: 'Cofee Mug',
        imageUrl: './coffee-mug.png'
    },
    {
        id: '4',
        name: 'Cofee Mug',

    },
    {
        id: '5',
        name: 'Cofee Mug',
        imageUrl: './coffee-mug.png'
    },*/
]
export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>

            <br />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',

            }} >
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} >
                            <ProductCard.Image imageUrl="" />
                            <ProductCard.Title />
                            <ProductCard.Buttons />
                        </ProductCard>
                    ))
                }

                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} >
                            <ProductImage imageUrl="" />
                            <ProductTitle />
                            <ProductButtons />
                        </ProductCard>
                    ))
                }


            </div>
        </div>
    )
}


export default ShoppingPage