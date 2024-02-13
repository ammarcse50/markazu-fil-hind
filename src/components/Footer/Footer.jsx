import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white p-10 bg-base-200 text-base-content ">
      <div className="footer md:max-w-6xl md:mx-auto ">
        <aside className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/JQ3VWbs/logo.png"
            className="w-[150px]"
            alt=""
          />

          <p className="text-xl font-semibold">Markazu Ta'leemil Qira'at</p>
          <br />

          <p> Since 2024</p>
        </aside>

        <nav>
          <h6 className="font-bold text-xl text-white ">Social Connectivity</h6>
          <div className="flex gap-4 text-3xl">
            <NavLink to="https://www.facebook.com/profile.php?id=100024729392931">
              <FaFacebookSquare className="text-[blue]" />{" "}
            </NavLink>
            <NavLink
              className="text-[#4af358]"
              to="https://api.whatsapp.com/send?phone=919954460622"
            >
              <IoLogoWhatsapp />{" "}
            </NavLink>
            <NavLink
              className="text-[#f36a44]"
              to="mailto:habibulworis2000@gmail.com"
            >
              <SiGmail />{" "}
            </NavLink>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
