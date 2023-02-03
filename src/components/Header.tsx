import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { RootState } from "../index"
import { addCard, sortCards } from "../store/reducers/cardsSlice"
import styles from "../css/Header.module.css"

const Header = () => {
    const cards = useSelector<RootState>(state => state.cardsReducer.data)
    const dispatch = useDispatch()
    console.log(cards)

    const handleAddCard = () => {
        const number = Math.floor(Math.random() * 1000)
        dispatch(addCard({id: number, field: number}))
    }

    const handleSortCards = () => {
        dispatch(sortCards())
    }

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Button title="Add Card" action={handleAddCard}/>
                <Button title="Sort Cards" action={handleSortCards}/>
            </div>
        </header>
    )
}

export default Header