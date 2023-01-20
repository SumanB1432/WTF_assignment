import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <Search />
      <Banner />
      {/* <Search /> */}
      <About />
      <Services />
    </div>
  );
}
