import { useState, useEffect } from "react";
import "./home.css"
import TopDestination from "../components/Topdestination";
import Search from "../components/Forms/search";
import About from "../components/about";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="position-relative">
        <Header />
      </div>
      <div className="position-absolute search translate-middle w-75">
        <Search />
      </div>
      <TopDestination />
      <About />
    </>
  );
}
