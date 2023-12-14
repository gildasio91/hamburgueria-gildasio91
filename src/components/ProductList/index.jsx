import { ProductCard } from "./ProductCard";
import styles from "../ProductList/style.module.scss";

export const ProductList = ({ productList, addProduct, filteredList }) => {
  return (
    <ul className={styles.products__container}>
      {filteredList.length > 0
        ? filteredList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))
        : productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
    </ul>
  );
};
