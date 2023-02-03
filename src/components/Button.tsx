import styles from "../css/Button.module.css"

interface IProps {
    title: string
    action: () => void
}

const Button = ({title , action}:IProps) => {
    return <button onClick={() => action()} className={styles.button}>{title}</button>
}

export default Button