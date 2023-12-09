import { ProductCard } from "./ProductCard";
import styles from "../ProductList/style.module.scss"

export const ProductList = ({ productList, addProduct }) => {
   return (
      <ul className={styles.products__container}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProduct={addProduct}/>
         ))}
      </ul>
   );
};
