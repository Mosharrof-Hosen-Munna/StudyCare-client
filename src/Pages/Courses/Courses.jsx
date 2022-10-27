import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://educational-server-mosharrof-hosen-munna.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
