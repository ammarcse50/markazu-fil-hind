import Courses from "../Courses/Courses";
import { Helmet } from "react-helmet";
import WhatsAppIcon from "../whatsappicon/WhatsAppIcon";

const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>Markzo | Home</title>
      </Helmet>
      {/* carousel  */}

      <div className="carousel md:w-full md:h-[590px]">
        <div id="slide1" className="carousel-item relative w-full h-86">
          <img
            src="https://i.ibb.co/VYhvZKM/Light-Purple-Minimalist-Blurred-Background-Course-Banner-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/rHBcHph/Purple-Simple-and-Bold-School-Admission-Banner-5-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/rcSfB9P/29144.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/tJnK6BS/29479.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Cards of courses  */}

      <Courses> </Courses>
      <WhatsAppIcon  />
    </>
  );
};

export default Home;
