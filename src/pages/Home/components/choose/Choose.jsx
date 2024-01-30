import cl from "./Choose.module.scss";

const Choose = () => {
  return (
    <section className={cl.choose}>
      <div className="container">
        <div className={cl.choose__wrapper}>
          <h1 className={cl.choose__title}>ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
          <ul className={cl.choose__list}>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose1.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Большой выбор качественной продукции
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose2.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Широкий выбор металлоизделий в одном месте
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose3.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Помощь в таможенном оформлении грузов
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose4.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Доставим продукцию по России или в другие страны
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose5.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Персональный подход к каждому клиенту
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose6.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Скидки и бонусы постоянным клиентам
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose7.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Предоставление товарного кредита и отсрочки оплаты
              </p>
            </li>
            <li className={cl.list__item}>
              <img
                className={cl.item__img}
                src="./public/images/choose/choose8.png"
                alt=" choose list image"
              />
              <p className={cl.list__text}>
                Большой выбор услуг на складе: упаковка, резка в размер и пр.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
