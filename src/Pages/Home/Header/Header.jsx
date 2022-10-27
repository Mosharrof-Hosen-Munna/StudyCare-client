import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../../images/header.jpg";

const Header = () => {
  return (
    <section className="py-24 px-4 bg-slate-100" >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 g-4">
          <div className="flex items-center">
            <div>
              <div className="text-3xl md:text-6xl">
                Access 2200+ <br />{" "}
                <span className="font-bold">
                  Online Tutorial From Top Instructor.
                </span>
              </div>
              <p className="text-2xl my-8">
                Meet university,and cultural institutions, who'll share their
                experience and take premium classes.
              </p>
              <Link to={`/courses`}>
              <button className="btn btn-primary md:btn-lg">
                View All Courses
              </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-8 md:mt-0 text-center">
            <img className="w-full md:w-4/6 rounded-lg mx-auto" src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
