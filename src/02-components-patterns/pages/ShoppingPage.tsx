import { Product } from '../interfaces/product';
import {
    ProductCard,

} from "../components";
import '../styles/custom-styles.css'
import { useEffect, useState } from 'react';
import { onChangeArgs } from '../interfaces/interfaces';




const product1 = {
    id: '1',
    name: 'Cofee Mug 1',
    imageUrl: './coffee-mug2.png'
}


const product2 = {
    id: '2',
    name: 'Cofee Mug 2',
    imageUrl: './coffee-mug2.png'
}


const products: Product[] = [
    product1,
    product2


]

interface ProductInCart extends Product {
    count: number;
}
export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = (args: onChangeArgs) => {
        const { count, product } = args


        const newAdd = { [product.id]: { ...product, count } }


        setShoppingCart({...shoppingCart, ...newAdd })


    }

    useEffect(() => {
        console.log(shoppingCart)
    }, [shoppingCart])



    return (
        <div style={{

        }}>
            <h1>ShoppingPage</h1>

            <br />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',

            }} >
                {
                    products.map((product) => (
                        <ProductCard
                            key={`${product.id}-p`}
                            product={product}
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image imageUrl="" className='custom-image' />
                            <ProductCard.Title />
                            <ProductCard.Buttons />
                        </ProductCard>
                    ))
                }








            </div>

            <div className='shopping-cart'>
                <ProductCard

                    product={product2}
                    className='bg-dark txt-white'
                    style={{
                        width: '100px',

                    }}

                >
                    <ProductCard.Image imageUrl="" className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.5)' }} />
                    <ProductCard.Title className='txt-white' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard

                    product={product1}
                    className='bg-dark txt-white'
                    style={{
                        width: '100px',

                    }}

                >
                    <ProductCard.Image imageUrl="" className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.5)' }} />
                    <ProductCard.Title className='txt-white' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>



            </div>
        </div>
    )
}


export default ShoppingPage