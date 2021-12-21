import { Product } from '../interfaces/product';
import {
    ProductCard,
} from "../components";
import '../styles/custom-styles.css'
 
import { useShoppingCart } from '../hooks/useShoppingCart';
import {  products } from '../data/products';





export const ShoppingPage = () => {
    const {shoppingCart,  onProductCountChange} =    useShoppingCart()
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
                            value= { shoppingCart[product.id]?.count || 0 }
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
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            value={product.count}

                            product={product}
                            className='bg-dark txt-white'
                            style={{
                                width: '100px',

                            }}
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image imageUrl="" className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.5)' }} />
                            <ProductCard.Title className='txt-white' />
                            <ProductCard.Buttons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>
            {JSON.stringify(shoppingCart)}
        </div>
    )
}


export default ShoppingPage