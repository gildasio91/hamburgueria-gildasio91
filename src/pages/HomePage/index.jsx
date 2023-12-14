import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import style from "../HomePage/style.module.scss";
import { toast } from "react-toastify";

export const HomePage = () => {
  const localCartList = localStorage.getItem("@CARTLIST");
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [numberProductsHeader, setNumberProductsHeader] = useState(0);
  const [filteredList, setFilteredList] = useState(productList);

  const filterProducts = (value) => {
    const filter = productList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filter);
  };

  // useEffect montagem - carrega os produtos da API e joga em productList
  const getHamburguers = async () => {
    const { data } = await api.get("/products");

    setProductList(data);
  };
  useEffect(() => {
    getHamburguers();
  }, []);

  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  // adição, exclusão, e exclusão geral do carrinho
  const addProduct = (product) => {
    const hasFavorite = cartList.includes(product);
    if (!hasFavorite) {
      setCartList([...cartList, product]);
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Produto já adicionado");
    }
  };

  const removeProduct = (productId) => {
    const updatedCartList = cartList.filter(
      (product) => product.id !== productId
    );
    setCartList(updatedCartList);
  };

  const removeAllProducts = () => {
    setCartList([]);
  };

  useEffect(() => {
    let numberProductsCart = cartList.length;
    setNumberProductsHeader(numberProductsCart);
  }, [cartList, filteredList]);

  // renderizações condições e o estado para exibir ou não o carrinho
  // filtro de busca
  // estilizar tudo com sass de forma responsiva
  // console.log(value);
  return (
    <>
      <Header
        numberProductsHeader={numberProductsHeader}
        setIsOpen={setIsOpen}
        filterProducts={filterProducts}
      />
      <main className={style.mainTeste}>
        <ProductList
          productList={productList}
          addProduct={addProduct}
          filteredList={filteredList}
        />
        {isOpen ? (
          <CartModal
            cartList={cartList}
            setIsOpen={setIsOpen}
            removeProduct={removeProduct}
            removeAllProducts={removeAllProducts}
          />
        ) : null}
      </main>
    </>
  );
};
