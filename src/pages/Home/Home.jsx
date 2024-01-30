import cl from "./Home.module.scss";
import Description from "./components/description/Description";
import Popular from "./components/popular/Popular";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Special from "./components/special/Special";

const Home = () => {
  return (
    <main className={cl.home}>
      <Description />
      <Products />
      <Popular />
      <Special />
      <Services />
    </main>
  );
};

export default Home;
