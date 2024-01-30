import cl from "./Home.module.scss";
import Clients from "./components/clients/Clients";
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
      <Clients />
    </main>
  );
};

export default Home;
