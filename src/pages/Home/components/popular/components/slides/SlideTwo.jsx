import cl from "./Slide.module.scss";

const SlideTwo = () => {
  return (
    <div className={cl.slide__wrapper}>
      <img
        className={cl.slide__img}
        src="./public/images/popular/slideTwo.png"
        alt="popular slide image"
      />
      <h5 className={cl.slide__text}>
        Балка <br />
        двутаровая
      </h5>
    </div>
  );
};

export default SlideTwo;
