import { ReactElement } from "react";


export interface Product {
    id: string,
    name: string;
    imageUrl?: string,

}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductCardInitialValues {
    count?: number;
    maxCount?: number;
}

export interface Entry {
    message: string;
}
export interface IProductProps {
    product: Product;
    //children?: ReactElement | ReactElement[],
    children? : ( args: ProductCartHandlers )=> JSX.Element  ,
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues: ProductCardInitialValues

}

export interface ProductContextProps {
    count: number;
    onClickButtonAdd: (number: number) => void;
    product: Product,
    initialValues?: ProductCardInitialValues
}

export interface ProductCardParentProps {
    ({ product, children }: IProductProps): JSX.Element,
    Title: () => JSX.Element,
    Image: ({ imageUrl }: { imageUrl: string }) => JSX.Element,
    Buttons: ({ className }: { className?: string }) => JSX.Element,

}

export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number ) => void;
    reset: ()=> void;

}