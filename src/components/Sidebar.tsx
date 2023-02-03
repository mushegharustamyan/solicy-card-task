import styles from "../css/SideBar.module.css"

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <p>
                Press The add "card" button to add a new card.
                Use "sort cards" to sort the button by the increase.
                Press "X" icon on the top right to delete them
            </p>
        </aside>
    )
}

export default Sidebar