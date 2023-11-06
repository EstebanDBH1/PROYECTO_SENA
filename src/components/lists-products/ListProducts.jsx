import CardProduct from "../card-product/CardProduct";
import "./ListProducts.css";

const ListProducts = () => {
  return (
    <>
      <section className="products">
        <h2 className="products--subtitle">Lo más destacado</h2>
        <div className="products__list">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
    </>
  );
};

export default ListProducts;