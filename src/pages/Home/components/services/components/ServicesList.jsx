import cl from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <ul className={cl.list__wrapper}>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group1.png"
          alt="list images"
        />
        <p className={cl.list__text}>Резка металлопроката</p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group2.png"
          alt="list images"
        />
        <p className={cl.list__text}>Литье деталей и заготовок</p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group3.png"
          alt="list images"
        />
        <p className={cl.list__text}>Шлифовка труб и металлопроката</p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group4.png"
          alt="list images"
        />
        <p className={cl.list__text}>
          Токарные, фрезерные и слесарные работы по металлу
        </p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group5.png"
          alt="list images"
        />
        <p className={cl.list__text}>
          Термообработка (закаливание металлоизделий)
        </p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group6.png"
          alt="list images"
        />
        <p className={cl.list__text}>Цинкование металлоизделий</p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group7.png"
          alt="list images"
        />
        <p className={cl.list__text}>Нанесение антикоррозионных покрытий</p>
      </li>
      <li className={cl.list__item}>
        <img
          className={cl.list__img}
          src="./public/images/services/list-img/Group8.png"
          alt="list images"
        />
        <p className={cl.list__text}>Изоляция труб</p>
      </li>
    </ul>
  );
};

export default ServicesList;
