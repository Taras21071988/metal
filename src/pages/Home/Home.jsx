import cl from "./Home.module.scss";
import Description from "./components/description/Description";
import Products from "./components/products/Products";

const Home = () => {
  return (
    <main className={cl.home}>
      <Description />
      <Products />
    </main>
  );
};

export default Home;
