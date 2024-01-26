import cl from "./Cards.module.scss";
import CardFour from "./components/CardFour";
import CardOne from "./components/CardOne";
import CardThree from "./components/CardThree";
import CardTwo from "./components/CardTwo";

const Cards = () => {
  return (
    <div className={cl.cards}>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  );
};

export default Cards;
