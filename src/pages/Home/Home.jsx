import cl from "./Home.module.scss";
import Description from "./components/description/Description";
import Popular from "./components/popular/Popular";
import Products from "./components/products/Products";

const Home = () => {
  return (
    <main className={cl.home}>
      <Description />
      <Products />
      <Popular />
    </main>
  );
};

export default Home;
