import { ReactElement, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import { AddButton } from "./AddButton"


 
interface Props {
   className?: string;
   children?: ReactElement | ReactElement[];
   style?: React.CSSProperties;
  
}

export const ProductButtons = (
    {className='', children, style  }: Props
    /*{
        count,
        onClickButtonAdd
    }
        : {
            count: number,
            onClickButtonAdd: (number: number) => void
        }*/
) => {
    const { count, onClickButtonAdd, initialValues } = useContext(ProductContext)
    let maxCount = 0
    if(initialValues?.maxCount){
        maxCount = initialValues.maxCount
    }

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
       
             {children}

             <AddButton 
                text="-"  
                className={`${styles.buttonMinus}`} 
                onClick={() => { onClickButtonAdd(-1) }}   
            />
            
            <div className={styles.countLabel}>{count}</div>

            <AddButton 
                text={`+` }  
                className={`${styles.buttonAdd} ${ !(maxCount > count) ? styles.disabled : ''  }`} 
                disabled={ !(maxCount > count)  }
                onClick={ maxCount > count ? () => {  onClickButtonAdd(+1)   }  : undefined  } 
                  
            />

  

   
        </div>
    )
}
