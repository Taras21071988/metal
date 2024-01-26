import cl from "././Card.module.scss";

const CardThree = () => {
  return (
    <div className={cl.card}>
      <h4 className={cl.card__title}>ТРУБОПРОВОДНАЯ АРМАТУРА</h4>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Сайдинг металлический</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Панели</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Доборные элементы</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Элементы безопасности</p>
        </li>
      </ul>
      <a className={cl.card__link} href="#">
        Смотреть все
      </a>
      <img
        className={cl.card__imgThree}
        src="./public/images/home/products/product-3.png"
        alt="product image"
      />
    </div>
  );
};

export default CardThree;
