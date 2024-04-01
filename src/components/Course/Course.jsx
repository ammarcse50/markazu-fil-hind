import {  NavLink } from "react-router-dom";


const Course = ({course}) => {

    const { cover, title, contact, desc } = course;

    return (
        <div>
       <div className="card w-full h-full shadow-2xl bg-green-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={cover}
              alt="courses"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <div className="flex flex-col items-center flex-grow"> 
             <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
            </div>
          
            <div className="card-actions ">
           <NavLink to={contact}> <button   className="btn  btn-warning  hover:bg-orange-500 rounded hover:text-white">Contact</button></NavLink>  
            </div>
          </div> 
         
        </div>
            
        </div>
    );
};

export default Course;