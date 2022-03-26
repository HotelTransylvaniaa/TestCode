import { useState,useEffect } from "react";
import TopDestination from "../components/Topdestination";
import Search from "../components/Forms/search";

export default function Home(){
    return(
        <>
            <Search />
           <TopDestination/>
        </>
            
    )
}
