import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import History from "./components/history/History";
import SecBanner from "./components/secBanner/SecBanner";

const Home = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <History />
      <SecBanner />
    </main>
  );
};

export default Home;
