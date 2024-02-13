import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <h2 className="mt-6 font-bold text-4xl text-white   text-center">
        {" "}
        <span className=" hover:bg-orange-500 rounded hover:text-white hover:text-2xl stroke-black stroke-2">
          OUR COURSES
        </span>
      </h2>

      <div className="card_container mt-20    md:grid md:grid-cols-2 md:gap-6 md:m-2  lg:grid-cols-4  space-y-4 ">
        {courses.map((course) => (
          <Course course={course}> </Course>
        ))}
      </div>
    </>
  );
};

export default Courses;
