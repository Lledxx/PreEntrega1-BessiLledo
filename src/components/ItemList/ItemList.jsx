import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({ products }) => {
    return(
        <div className={styles.divContainerCards}>
            {
                products.map(prod => {
                    return(
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}

export default ItemList