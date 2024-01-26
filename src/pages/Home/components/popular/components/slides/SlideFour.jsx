import cl from "./Slide.module.scss";

const SlideFour = () => {
  return (
    <div className={cl.slide__wrapper}>
      <img
        className={cl.slide__img}
        src="./public/images/popular/slideFour.png"
        alt="popular slide image"
      />
      <h5 className={cl.slide__text}>
        Уголок <br /> металлический
      </h5>
    </div>
  );
};

export default SlideFour;
