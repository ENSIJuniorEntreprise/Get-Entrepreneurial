import React from "react";
import './Home.css'
import Event from "./AboutTheEvent/Event";
import Allies from "./Allies/Allies";
import Articles from "./Articles/Articles";
import Header from "./Header/Header";
import Sections from "./Sections/Sections";
import EJE from "./WhoWeAre/EJE";

export default function Home() {
  return (
    <div >
      <Header></Header>
      <Event></Event> 
      <Sections></Sections> 
      <EJE></EJE>
  {/* <Articles></Articles> */}
   <Allies></Allies>    
    </div>
  );
}
