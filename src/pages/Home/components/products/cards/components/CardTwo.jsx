import cl from "./Card.module.scss";

const CardTwo = () => {
  return (
    <div className={cl.card}>
      <h4 className={cl.card__title}>ДЕТАЛИ ТРУБОПРОВОДОВ</h4>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Металлочерепица</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Профнастил</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Доборные элементы</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Водосточная система</p>
        </li>
      </ul>
      <a className={cl.card__link} href="#">
        Смотреть все
      </a>
      <img
        className={cl.card__imgTwo}
        src="./public/images/home/products/product-2.png"
        alt="product image"
      />
    </div>
  );
};

export default CardTwo;
