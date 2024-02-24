import Feature from "./Feature/Feature";
import State from "./State/State";
import Hero from "./Hero/Hero";
import Banners from "./Banners/Banners";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Banners />
      <Feature />
      <State />
      <Footer />
    </div>
  );
};

export default Home;
