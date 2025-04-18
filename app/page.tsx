import Header from "./components/Header";
import Hero from "./components/Hero";
import OffersSection from "./components/offerSection";
import Products from "./components/Products";
import Jwellery from "./components/Jwellery";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <OffersSection/>
      <Products/>
      <Jwellery/>
      <Category/>
      <Contact/>
      <Footer/>
    </div>
  );
}
