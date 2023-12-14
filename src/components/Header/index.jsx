
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss";


export const Header = ({
  numberProductsHeader,
  setIsOpen,
  filterProducts,
}) => {



  return (
    <header className={styles.header}>
      <div className={styles.div__container}>
        <div className={styles.div__logo}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button onClick={() => setIsOpen(true)}>
            <MdShoppingCart className={styles.cartIcon} size={21} />
            <span>{numberProductsHeader}</span>
          </button>
        </div>
        <form className={styles.form__container}>
          <input
            type="text"
            onChange={(e) => filterProducts(e.target.value)}
          />
          <MdSearch onClick={() => filterProducts(valueInput)} className={styles.searchIcon} size={19} />
        </form>
      </div>
    </header>
  );
};
