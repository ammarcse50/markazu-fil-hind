import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";


const Root = () => {

  return (
    <>
      <div className="bg-[#3c336b]"> 
      <Header></Header>

        <Outlet></Outlet>

        <Footer></Footer></div>
       
  
    </>
  );
};

export default Root;
