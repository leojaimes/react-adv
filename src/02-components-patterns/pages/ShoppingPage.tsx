
import {
    ProductCard,
} from "../components";
import '../styles/custom-styles.css'


import { product1 as product } from '../data/products';
import { Product } from "../interfaces/product";





export const ShoppingPage = () => {

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

                <ProductCard
                    initialValues={{
                        count: 4,
                        maxCount: 11,
                    }}
                    key={`${product.id}-p`}
                    product={product}

                >
                    {
                        (
                            {
                                count,
                                isMaxCountReached,
                                maxCount,
                                product,



                                increaseBy,
                                reset
                            }


                        ) => (
                            <>

                                <ProductCard.Image imageUrl="" className='custom-image' />
                                <ProductCard.Title />
                                <ProductCard.Buttons />
                                <button
                                    onClick={reset}
                                >Reset </button>
                                {isMaxCountReached && <> you have reached to the end  </>}

                                <button
                                    onClick={() => increaseBy(+2)}
                                >+2 </button>

 
                                <button
                                    onClick={() => increaseBy(-2)}
                                >-2 </button>

                            </>

                        )

                    }
                </ProductCard>


            </div>

            <div className='shopping-cart'>

            </div>

        </div>
    )
}


export default ShoppingPage