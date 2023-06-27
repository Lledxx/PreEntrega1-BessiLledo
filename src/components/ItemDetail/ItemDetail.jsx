import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
    return(
        <div className={styles.cardDetailContainer}>
            <div className={styles.imgDetailsContainer}>
                <img src={img} alt={name} className={styles.imgDetailProduct}/>
            </div>
            <div className={styles.cardDetailsContainer}>
                <h2>{name}</h2>
                <p>Precio: <span>${price}</span></p>
                <p>Descripción: {description}</p>
                <p>Categoría: {category}</p>
                <p>Stock disponible: {stock}</p>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </div>
        </div>
    )
}

export default ItemDetail