import { MdDelete } from "react-icons/md";
import styles from "../CartItemCard/style.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
  return (
    <li className={styles.liCard}>
      <div className={styles.img__container}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.container__priceModal}>
        <h3 className={styles.heading1}>{product.name}</h3>
        <span className={styles.priceProductModal}>
          {" "}
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button className={styles.btnDeleteProduct} aria-label="delete" title="Remover item" onClick={() => removeProduct(product.id)}>
        <MdDelete size={21} />
      </button>
    </li>
  );
};
