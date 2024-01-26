import cl from "./Cards.module.scss";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";

const Cards = () => {
  return (
    <div className={cl.cards}>
      <CardOne />
      <CardTwo />
    </div>
  );
};

export default Cards;
