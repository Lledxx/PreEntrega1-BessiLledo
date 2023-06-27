import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ id, img, name, category, price, stock }) => {

    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/item/${id}`)} className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={img} alt={name} className={styles.imgProduct}/>
            </div>
            <div className={styles.cardDetailsContainer}>
                <h3>{name}</h3>
                <p>Precio: {price}</p>
                <button onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/item/${id}`) }} 
                    className={styles.buttonDetails}>Ver detalle
                </button>
            </div>
        </div>
    )
}

export default Item
{/* la prop key va como un identificador para que react pueda comparar lo anterior con lo nuevo y hacer el render siempre va dentro del metodo .map() en el componente padre */}