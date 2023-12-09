import styles from "../ProductCard/style.module.scss"

export const ProductCard = ({ product, addProduct }) => {
    return(
        <li className={styles.li__container}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className={styles.heading1}>{product.name}</h3>
                <span className={styles.caption}>{product.category}</span>
                <span className={styles.price}> {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className={styles.add__li} onClick={() => addProduct(product)}>Adicionar</button>
            </div>
        </li>
    )
}