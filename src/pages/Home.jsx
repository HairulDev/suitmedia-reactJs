import Hero from "../components/molecules/Hero";
import CardPet from "../components/molecules/CardPet";
import Banner from "../components/molecules/Banner";
import CardProduct from "../components/molecules/CardProduct";
import Seller from "../components/molecules/Seller";
import BannerButtom from "../components/molecules/BannerButtom";
import CardKnowladge from "../components/molecules/CardKnowladge";
import Footer from "../components/molecules/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-5">
        <CardPet />
        <Banner />
        <CardProduct />
        <Seller />
        <BannerButtom />
        <CardKnowladge />
        <Footer />
      </div>
    </>
  );
};

export default Home;
