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
              <div className="text-6xl">
                Access 2700+ <br />{" "}
                <span className="font-bold">
                  Online Tutorial From Top Instructor.
                </span>
              </div>
              <p className="text-2xl my-8">
                Meet university,and cultural institutions, who'll share their
                experience.
              </p>
              <Link to={`/courses`}>
              <button className="btn btn-primary btn-lg">
                View All Courses
              </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto text-center">
            <img className="w-4/6 rounded-lg mx-auto" src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
