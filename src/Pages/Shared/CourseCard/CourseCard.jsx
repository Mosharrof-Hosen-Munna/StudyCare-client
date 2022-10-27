import React from "react";
import { FaBusinessTime } from "@react-icons/all-files/fa/FaBusinessTime";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link } from "react-router-dom";


const CourseCard = ({course}) => {
  return (
    <div className="rounded-lg bg-white shadow-xl shadow-slate-200">
      <div>
        <img
        className="rounded-t-lg w-full max-h-64"
          src={course.img}
          alt=""
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between text-lg">
          <div className="flex items-center">
            <FaBusinessTime  className="mr-2"/> {Math.floor(Math.random() *100)} Lesson
          </div>
          <div>{course.rating.number} ({course.rating.total})</div>
        </div>
        <Link to={`/courses/details/${course._id}`}>
        <div className="text-xl cursor-pointer hover:text-primary duration-300 font-semibold my-3">{course.name}</div>
        </Link>
        <div className="flex items-center my-6">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              <img src={course.instructor.profile} />
            </div>
          </div>
          <h5 className="text-lg ml-4">{course.instructor.name}</h5>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-lg mt-4 mb-auto">
       <div className="text-xl font-bold text-primary"> {course.price}</div>
      <Link to={`/courses/details/${course._id}`}>
      <div className="flex items-center hover:text-primary duration-300">Know Details <FaArrowRight className="ml-4"/></div></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
