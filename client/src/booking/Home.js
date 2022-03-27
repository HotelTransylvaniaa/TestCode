import { useState, useEffect } from "react";
import TopDestination from "../components/Topdestination";
import Search from "../components/Forms/search";
import About from "../components/about";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
      <TopDestination />
      <About />
    </>
  );
}
