import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <>
               {/* carousel  */}
               
               <div className="carousel w-full h-[590px]">
                 <div id="slide1" className="carousel-item relative w-full h-86">
                   <img
                     src="/src/raw/Light Purple Minimalist Blurred Background Course Banner (1).jpg"
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
                     src="/src/raw/Purple Simple and Bold School Admission Banner (5) (1).jpg"
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
                   <img src="/src/Raw/29144.jpg" className="w-full" />
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
                   <img src="/src/raw/29479.jpg" className="w-full" />
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
    
    
    
    
    
    </>
                   



                       
  );
};

export default Home;
