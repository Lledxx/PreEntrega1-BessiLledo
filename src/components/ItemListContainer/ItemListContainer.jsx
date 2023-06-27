import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = categoryId ? categoryId : 'Todos los productos'

        return () => document.title = 'Gamertek Store'
    }, [categoryId])

    // NAVEGACION POR CATEGORIA
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
        })

    }, [categoryId])

    return (
        <div>
            <h1 className={styles.saludo}>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;