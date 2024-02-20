import Feature from "./Feature/Feature";
import State from "./State/State";
import Hero from "./Hero/Hero";
import Banners from "./Banners/Banners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banners />
      <Feature />
      <State />
    </div>
  );
};

export default Home;
