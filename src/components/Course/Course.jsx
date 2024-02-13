import { Link } from "react-router-dom";


const Course = ({course}) => {

    const { cover, title, contact, desc } = course;

    return (
        <div>
             <div className="card w-90 bg-green-700 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={cover}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <div className="flex flex-col items-center flex-grow">  <h2 className="card-title">{title}</h2>
            <p>{desc}</p></div>
          
            <div className="card-actions">
           <Link to={contact}> <button   className="btn btn-primary">Contact</button></Link>  
            </div>
          </div> 
         
        </div>
            
        </div>
    );
};

export default Course;