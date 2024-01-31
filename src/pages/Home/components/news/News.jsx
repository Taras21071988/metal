import cl from "./News.module.scss";

const News = () => {
  return (
    <section className={cl.news}>
      <div className="container">
        <div className={cl.news__wrapper}>
          <div className={cl.news__titleWrapper}>
            <h1 className={cl.news__title}>НОВОСТИ</h1>
            <a className={cl.news__titleLink} href="#">
              Смотреть все
            </a>
          </div>
          <div className={cl.news__content}>
            <div className={cl.content__wrapper}>
              <h3 className={cl.content__title}>Название новости</h3>
              <time className={cl.content__time}>24.03.2020</time>
              <p className={cl.content__text}>
                Таким образом реализация намеченных плановых заданий в
                значительной степени обуславливает создание модели развития.
              </p>
            </div>
            <div className={cl.content__wrapper}>
              <h3 className={cl.content__title}>Название новости</h3>
              <time className={cl.content__time}>24.03.2020</time>
              <p className={cl.content__text}>
                Таким образом реализация намеченных плановых заданий в
                значительной степени обуславливает создание модели развития.
              </p>
            </div>
            <div className={cl.content__wrapper}>
              <h3 className={cl.content__title}>Название новости</h3>
              <time className={cl.content__time}>24.03.2020</time>
              <p className={cl.content__text}>
                Таким образом реализация намеченных плановых заданий в
                значительной степени обуславливает создание модели развития.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
