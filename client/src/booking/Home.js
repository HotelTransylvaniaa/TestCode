import { useState,useEffect } from "react";
import TopDestination from "../components/Topdestination";
import Search from "../components/Forms/search";
import About from "../components/about";


export default function Home(){
    return(
        <>
            <Search />
           <TopDestination/>
           <About/>
        </>
            
    )
}
