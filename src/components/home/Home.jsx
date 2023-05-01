import React from 'react'

import Header from "../nav/Header";
import Hero from "../hero/Hero";
import Popular from "../popular/Popular";
import Featured from "../featured/Featured";
import List from "../list/List";
import Category from "../category/Category";
import Security from "../security/Security";
import Equipment from "../equipment/Equipment";
import Footer from "../footer/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Featured />
      <List />
      <Category />
      <Security />
      <Equipment />
      <Footer />
    </>
  );
}

export default Home