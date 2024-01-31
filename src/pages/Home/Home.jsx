import cl from "./Home.module.scss";
import Choose from "./components/choose/Choose";
import Clients from "./components/clients/Clients";
import Description from "./components/description/Description";
import News from "./components/news/News";
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
      <Choose />
      <News />
    </main>
  );
};

export default Home;
