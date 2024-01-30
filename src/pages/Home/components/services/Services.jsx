import cl from "./Services.module.scss";
import ServicesList from "./components/ServicesList";

const Services = () => {
  return (
    <section className={cl.services}>
      <div className="container">
        <div className={cl.services__wrapper}>
          <div className={cl.services__listWrapper}>
            <h1 className={cl.services__title}>УСЛУГИ</h1>
            <ServicesList />
          </div>
          <div className={cl.services__img}>
            <img
              src="./public/images/services/main_img.jpg"
              alt="services image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
