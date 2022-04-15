import { useState, useEffect } from "react";
import "./home.css";
import TopDestination from "../components/Topdestination";
import Search from "../components/Forms/search";
import About from "../components/about";
import Header from "../components/Header";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="bgImage position-relative">
        <div className="header-content text-white py-4 px-3">
          <h2>- Welcome to AGODA -</h2>
          <h5>Pay less with Agoda so you can spend more on yourself.</h5>
        </div>
        <div className="search w-75">
          <Search />
        </div>
        {/* <Header /> */}
      </div>

      <TopDestination />
      <About />
      <Footer />
    </>
  );
}
