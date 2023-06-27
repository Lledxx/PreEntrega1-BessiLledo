import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        document.title = product ? product.name : 'Gamertek Store'

        return () => document.title = 'Gamertek Store'
    }, [product])

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando producto...</h1>
    }

    return(
        <div>
            <h1 className={styles.detailsTitle}>Detalles del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer