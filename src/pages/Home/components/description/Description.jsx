import cl from "./Description.module.scss";

const Description = () => {
  return (
    <section className={cl.description}>
      <div className="container">
        <div className={cl.wrapper}>
          <div className={cl.descr__content}>
            <h1 className={cl.content__title}>
              Надёжный поставщик Выгодный партнёр
            </h1>
            <p className={cl.content__text}>
              Оптовая продажа металлопроката от производителя
            </p>
            <button className={cl.content__btn}>написать нам</button>
          </div>
          <div className={cl.descr__subcontent}>
            <div className={cl.subcontent__item}>
              <h2 className={cl.item__title}>27000 +</h2>
              <p className={cl.item__text}>товарных позиций</p>
            </div>
            <div className={cl.subcontent__item}>
              <h2 className={cl.item__title}>15 лет</h2>
              <p className={cl.item__text}>работы в отрасли</p>
            </div>
            <div className={cl.subcontent__item}>
              <h2 className={cl.item__title}>2200 +</h2>
              <p className={cl.item__text}>постоянных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
