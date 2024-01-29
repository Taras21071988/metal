import cl from "./Cards.module.scss";

const CardThree = () => {
  return (
    <div className={cl.card__wrapper}>
      <div className={cl.card__content}>
        <h5 className={cl.card__text}>
          Труба котельная 377х17 мм, ту 14-3р-55-2001 сталь 12х1мф. 11 тн
        </h5>
        <p className={cl.card__price}>200 000 руб/тн.</p>
        <a className={cl.card__link} href="#">
          Подробнее
        </a>
      </div>
      <div className={cl.cards__img}>
        <img
          src="./public/images/special/special-1.png"
          alt="special product"
        />
      </div>
    </div>
  );
};

export default CardThree;
