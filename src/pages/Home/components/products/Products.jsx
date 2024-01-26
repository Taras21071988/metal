import cl from "./Products.module.scss";
import Cards from "./cards/Cards";

const Products = () => {
  return (
    <section className={cl.product}>
      <div className="container">
        <div className={cl.product__wrapper}>
          <div className={cl.cards__wrapper}>
            <Cards />
          </div>
          <div className={cl.links__wrapper}>
            <a className={cl.link__look} href="#">Смотреть все</a>
            <a className={cl.link__price} href="#">скачать прайс-лист</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
