import cl from "./Card.module.scss";

const CardOne = () => {
  return (
    <div className={cl.card}>
      <h4 className={cl.card__title}>ТРУБНЫЙ ПРОКАТ</h4>
      <ul className={cl.card__list}>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Сортовой прокат</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Фасонный прокат</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Листовой прокат</p>
        </li>
        <li className={cl.list__item}>
          <p className={cl.item__text}>Лента металлическая</p>
        </li>
      </ul>
      <a className={cl.card__link} href="#">Смотреть все</a>
    </div>
  );
};

export default CardOne;
