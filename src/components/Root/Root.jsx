import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import { LuSunMoon } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";
import WhatsAppIcon from "../whatsappicon/WhatsAppIcon";

const Root = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div
      className={` ${
        isDarkTheme ? "bg-[#1a103d] text-white" : "bg-white text-black"
      }`}
    > <button
        className="fixed bottom-8  right-4 z-50 bg-gray-800 text-white rounded-full p-2"
        onClick={toggleTheme}
      >
        
        <BsMoonStars  size="25px" />
      </button>
      <Header></Header>
     
      <Outlet></Outlet>
      <Footer></Footer>
   
    </div>
  );
};

export default Root;
