import { useEffect, useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"

interface ProductInCart extends Product {
    count: number;
}
export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
    
        
    
        setShoppingCart((previusShoppingCart) => {
    
            const   productInCart: ProductInCart = previusShoppingCart[product.id] || {...product, count:0 }  //si no exisste el producto coloco {}
            if(Math.max(productInCart.count + count, 0) > 0 ){
                productInCart.count +=  count
    
                return  { ...previusShoppingCart,   [product.id]: productInCart   }
            } 
            //Borrar el producto 
            const { [product.id]: toDelete, ...rest } = previusShoppingCart
            return   { ...rest }
    
    
    
            /*
            const newShoppingCart = { [product.id]: { ...product, count } }
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = previusShoppingCart
                return { ...rest }
            }
    
            return { ...previusShoppingCart, ...newShoppingCart }*/
        })
    
    
    }
    
    useEffect(() => {
        console.log(shoppingCart)
        for (const product in shoppingCart) {
            console.log(product)
        }
    
    
    
    
        for (var i in shoppingCart) {
            if (shoppingCart.hasOwnProperty(i)) {
                console.log('Key is: ' + i + '. Value is: ' + shoppingCart[i]);
                console.log( shoppingCart[i]  )
            }
        }
    
    
    }, [shoppingCart])



    return {
        shoppingCart,
        onProductCountChange
    }

}
