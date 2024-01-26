import cl from "./Slide.module.scss";

const SlideThree = () => {
  return (
    <div className={cl.slide__wrapper}>
      <img
        className={cl.slide__img}
        src="./public/images/popular/slideThree.png"
        alt="popular slide image"
      />
      <h5 className={cl.slide__text}>Арматура</h5>
    </div>
  );
};

export default SlideThree;
