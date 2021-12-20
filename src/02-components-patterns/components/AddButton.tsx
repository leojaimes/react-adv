import styles from '../styles/styles.module.css'

interface Props {
    text: string;
    onClick?: () => void;
    className?: string
}

export const AddButton = ({ text = '', onClick = () => { }, className = '' }: Props) => {
    return (
        <button className={`${styles.buttonMinus} ${className}`}
            onClick={onClick}
        >{text}</button>
    )
}
