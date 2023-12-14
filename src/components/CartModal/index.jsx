import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "../CartModal/style.module.scss";
import { useEffect, useRef } from "react";

export const CartModal = ({
  cartList,
  setIsOpen,
  removeProduct,
  removeAllProducts,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  const buttonCloseRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        buttonCloseRef.current?.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button
            ref={buttonCloseRef}
            aria-label="close"
            title="Fechar"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} className={styles.buttonCloseCart} />
          </button>
        </div>
        <ul className={styles.ul__container}>
          {cartList.map((product) => (
            <CartItemCard
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          ))}
        </ul>
        <div className={styles.container__totalPrice}>
          <div className={styles.div__totalPrice}>
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
