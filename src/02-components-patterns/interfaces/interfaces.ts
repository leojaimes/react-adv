import { ReactElement } from "react";
import { ProductTitle } from '../components/ProductTitle';

export interface Product {
    id: string,
    name: string;
    imageUrl?: string,

}
export interface IProductProps {
    product: Product;
    children?: ReactElement | ReactElement[]

}

export interface ProductContextProps {
    count: number;
    onClickButtonAdd: (number: number) => void;
    product: Product
}

export interface ProductCardParentProps {
    ({ product, children }: IProductProps): JSX.Element,
    Title: () => JSX.Element,
    Image: ({ imageUrl }: { imageUrl: string }) => JSX.Element,
    Buttons: () => JSX.Element,

}

