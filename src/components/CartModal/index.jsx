import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "../CartModal/style.module.scss";

export const CartModal = ({ cartList, setIsOpen, removeProduct, removeAllProducts }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} className={styles.buttonCloseCart} />
          </button>
        </div>
        <ul className={styles.ul__container}>
          {cartList.map((product) => (
            <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
          ))}
        </ul>
        <div className={styles.container__totalPrice}>
          <div className={styles.div__totalPrice} >
            <span className={styles.span__total}>Total</span>
            <span className={styles.span__price}>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button onClick={() => removeAllProducts()}>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
