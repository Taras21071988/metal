import cl from "./Special.module.scss";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";
import CardTwo from "./components/CardTwo";

const Special = () => {
  return (
    <section className={cl.special}>
      <div className="container">
        <div className={cl.special__wrapper}>
          <div className={cl.special__titleWrapper}>
            <h1 className={cl.special__title}>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>
            <a className={cl.special__link} href="#">
              Смотреть все
            </a>
          </div>
          <div className={cl.special__content}>
            <CardOne />
            <CardTwo />
            <CardThree />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
