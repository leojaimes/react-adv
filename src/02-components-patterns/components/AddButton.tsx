import styles from '../styles/styles.module.css'

interface Props {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?:boolean;
}

export const AddButton = ({ text = '', onClick = () => { }, className = '',disabled= false  }: Props) => {
    return (
        <button 
            className={`${styles.buttonMinus} ${className}`}
            disabled={ disabled }
            onClick={onClick}
        >{text}</button>
    )
}
