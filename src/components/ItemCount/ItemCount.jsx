import { useState } from "react"
import styles from "./ItemCount.module.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <>
            <div className={styles.countContainer}>
                <button className={styles.countButton} onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className={styles.countButton} onClick={increment}>+</button>
            </div>
            <div className={styles.buttonCartContainer}>
                <button className={styles.buttonCart} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount