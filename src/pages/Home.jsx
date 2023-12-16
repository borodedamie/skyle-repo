import React from "react";
import Workimages from "../components/Workimages";
import Header from '../components/Header'
import Whatwedo from "../components/Whatwedo";
import Carousel from "../components/Carousel";
import ContactHero from "../components/ContactHero";

const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Whatwedo/>
      <Workimages />
      <ContactHero/>
    </div>
  );
};

export default Home;
