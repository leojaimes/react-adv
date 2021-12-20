
import { ProductCard as ProductCardParent }from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

//export { ProductCard }from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';
 

export const ProductCard    =    Object.assign(ProductCardParent, {
   Title: ProductTitle,
   Image: ProductImage,
   Buttons: ProductButtons
   
}) //Asignarle nuevas propiedades a ProductCard

export default ProductCard