import { ICard } from "../types"
import Card from "./Card"
import styles from "../css/Cards.module.css"

interface IProps {
    data: ICard[]
}



const Cards = ({ data }: IProps) => {
    return (
        <div className={styles.cards}>
            <div className={styles.wrapper}>
                {
                    data.map((value) => (
                        <Card key={value.id} data={value}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards