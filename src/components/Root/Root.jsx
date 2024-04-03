import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

// import { LuSunMoon } from "react-icons/lu";
// import { BsMoonStars } from "react-icons/bs";
// import WhatsAppIcon from "../whatsappicon/WhatsAppIcon";

const Root = () => {
  return (
    <div className="">

      <div className={`md:px-20 pt-32 `}>
        <div className={``}>
     
          <Header></Header>
        </div>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
