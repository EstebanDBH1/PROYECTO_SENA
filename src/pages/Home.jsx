import AboutHome from "../components/about-home/AboutHome";
import HeroHome from "../components/hero-home/HeroHome";
import ListProducts from "../components/lists-products/ListProducts";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ListProducts />
      <AboutHome />
    </>
  );
};

export default Home;
