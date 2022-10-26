import React from "react";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const FindCourses = () => {
  return (
    <div className="py-24 px-4 bg-slate-100">
      <div className="container mx-auto">
        <div className="md:flex  justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">
              <span className="text-primary mb-4 inline-block">
                Find The Right
              </span>
              <br />
              Online Courseimg For You
            </h1>
            <p className="text-lg mt-2">
              You don't have to struggle alone, you've got our assistance and
              help.
            </p>
          </div>
          <div className="text-lg mt-4 md:mt-0 font-semibold cursor-pointer hover:text-primary duration-300">
            See all Courses
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
      </div>
    </div>
  );
};

export default FindCourses;
