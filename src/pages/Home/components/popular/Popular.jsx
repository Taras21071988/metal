import cl from "./Popular.module.scss";
import SwiperPopular from "./components/SwiperPopular";

const Popular = () => {
  return (
    <section className={cl.popular}>
      <div className="container">
        <div className={cl.popular__wrapper}>
          <h1 className={cl.popular__title}>ПОПУЛЯРНЫЕ разделы</h1>
          <SwiperPopular />
        </div>
      </div>
    </section>
  );
};

export default Popular;
