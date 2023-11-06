import "./Overview.css";
import imageOverview from "../../../public/products-image/overview.png";

const Overview = () => {
  return (
    <>
      <section className="overview-product">
        <div className="overview-product__left">
          <div className="list-images-overview">
            <ul className="list-select-images">
              <li>
                <figure>
                  <img
                    src="https://cdn-images.farfetch-contents.com/15/09/33/44/15093344_26605713_1000.jpg"
                    alt=""
                  />
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://cdn-images.farfetch-contents.com/15/09/33/44/15093344_26581667_1000.jpg"
                    alt=""
                  />
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://cdn-images.farfetch-contents.com/15/09/33/44/15093344_26605712_1000.jpg"
                    alt=""
                  />
                </figure>
              </li>
            </ul>
          </div>
          <div className="main-overview-image">
            <figure className="image-overview">
              <img src={imageOverview} alt="" />
            </figure>
          </div>
        </div>
        <div className="overview-product__right">
          <div className="overview-product__right-container">
            <h2 className="overview-title-product">T-shirt - hoodie</h2>
            <p className="description-overview">Tela fría, hecha con algodón</p>
            <p className="overview-price-product">$ 50.000</p>
            <button className="btn-agregar-overview">Agregar al carrito</button>
            <button className="btn-buy-overview">Comprar ahora</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;