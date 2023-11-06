import "./Admin.css";

const Admin = () => {
  return (
    <>
      <section className="page-admin">
        <div className="hero-page-admin">
          <h2 className="text-hero-page-admin">
            <span>Administra</span>
            <span>tus</span>
            <span>productos</span>
            <span>desde</span>
            <span>aquí</span>
          </h2>
        </div>

        <section className="submit-product-section">
          <form className="form-submit-product">
            <label htmlFor="nombre">Nombre del Producto:</label>
            <input type="text" name="nombre" id="nombre" required />
            <br />
            <br />

            <label htmlFor="descripcion">Descripción del Producto:</label>
            <textarea
              name="descripcion"
              id="descripcion"
              rows="4"
              required
            ></textarea>
            <br />
            <br />

            <label htmlFor="precio">Precio del Producto:</label>
            <input type="number" name="precio" id="precio" required />
            <br />
            <br />

            <label htmlFor="imagen">Imagen del Producto:</label>
            <input
              type="file"
              name="imagen"
              id="imagen"
              accept="image/*"
              required
            />
            <br />
            <br />

            <input type="submit" id="submit-product-btn" value="Subir Producto" />
          </form>
        </section>
      </section>
    </>
  );
};

export default Admin;
