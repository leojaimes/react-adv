import { ReactElement } from "react";
 

export interface Product {
    id: string,
    name: string;
    imageUrl?: string,

}


export interface onChangeArgs {
    product: Product;
    count: number  ;
 } 
 
export interface IProductProps {
    product: Product;
    children?: ReactElement | ReactElement[],
    className?: string, 
    style?: React.CSSProperties,
    onChange? : (args: onChangeArgs   )=>void ,
    value?:number

}

export interface ProductContextProps {
    count: number;
    onClickButtonAdd: (number: number) => void;
    product: Product,
  
}

export interface ProductCardParentProps {
    ({ product, children }: IProductProps): JSX.Element,
    Title: () => JSX.Element,
    Image: ({ imageUrl }: { imageUrl: string }) => JSX.Element,
    Buttons: ({className  }: {className?: string }) => JSX.Element,

}
