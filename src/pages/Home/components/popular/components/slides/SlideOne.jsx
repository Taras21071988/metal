import cl from "./Slide.module.scss";

const SlideOne = () => {
  return (
    <div className={cl.slide__wrapper}>
      <img
        className={cl.slide__img}
        src="./public/images/popular/slideOne.png"
        alt="popular slide image"
      />
      <h5 className={cl.slide__text}>Швеллер</h5>
    </div>
  );
};

export default SlideOne;
