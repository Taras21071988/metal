import cl from "./Products.module.scss";
import Cards from "./cards/Cards";

const Products = () => {
  return (
    <section className={cl.product}>
      <div className="container">
        <div className={cl.wrapper}>
          <div className={cl.cards__wrapper}>
            <Cards />
          </div>
          <div className={cl.links__wrapper}>
            <a href="#">Смотреть все</a>
            <a href="#">скачать прайс-лист</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
