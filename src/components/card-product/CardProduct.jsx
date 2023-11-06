import "./CardProduct.css";
import image from "/products-image/overview.png";

const CardProduct = () => {
  return (
    <>
      <article className="product-list__card">
        <div className="product-list__card-inner">
          <figure className="image-overview-card">
            <img src={image} alt="" />
            <span className="cta-hover-card">Añadir al carrito</span>
          </figure>
        </div>
          <figcaption className="description-product-card">
            <h3 className="name-product">T-shirt - black hoodie</h3>
            <p className="price">$ 50.000</p>
          </figcaption>
      </article>
    </>
  );
};

export default CardProduct;