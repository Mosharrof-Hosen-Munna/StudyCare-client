import React from "react";
import { FaBusinessTime } from "@react-icons/all-files/fa/FaBusinessTime";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";


const CourseCard = () => {
  return (
    <div className="rounded-lg bg-white shadow-xl shadow-slate-200">
      <div>
        <img
        className="rounded-t-lg"
          src="https://educal-react.vercel.app/assets/img/course/course-3.jpg"
          alt=""
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between text-lg">
          <div className="flex items-center">
            <FaBusinessTime  className="mr-2"/> 43 Lesson
          </div>
          <div>3.5 (55)</div>
        </div>
        <div className="text-xl font-semibold my-3">Become a product Manager learn the skills & job.</div>
        <div className="flex items-center my-6">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <h5 className="text-lg ml-4">Jim Séchen</h5>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-lg mt-4">
       <div className="text-xl font-bold text-primary"> $32.00</div>
       <div className="flex items-center">Know Details <FaArrowRight className="ml-4"/></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
