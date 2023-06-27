import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
    return(
        <div className={styles.cartContainer}>
            <img src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

export default CartWidget;