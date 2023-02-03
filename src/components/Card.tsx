import { ICard } from "../types"
import { deleteCard } from "../store/reducers/cardsSlice"
import { useDispatch } from "react-redux"
import styles from "../css/Card.module.css"

interface IProps {
    data: ICard
}

const randomColorGenerator = ():string => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r} , ${g} , ${b})`
}

const Card = ({ data }: IProps) => {
    const dispatch = useDispatch()

    const handleDeleteCard = (id: number) => {
        dispatch(deleteCard(id))
    }

    const color = randomColorGenerator()

    return (
        <div key={data.id} className={styles.card} style={{border: `3px solid ${color}`}}>
            <button
                onClick={() => handleDeleteCard(data.id)}
                className={styles.button}
                style={{ border: `2px solid ${color}` }}
            >
                X
            </button>
            <p className={styles.field}>{data.field}</p>
        </div>
    )
}

export default Card