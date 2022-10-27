import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";
import { FaBusinessTime } from "@react-icons/all-files/fa/FaBusinessTime";
import { FaArtstation } from "@react-icons/all-files/fa/FaArtstation.esm";
import { FaSmile } from "@react-icons/all-files/fa/FaSmile";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const icons = [
    <FaDatabase className="text-5xl " />,
    <FaBusinessTime className="text-5xl" />,
    <FaArtstation className="text-5xl " />,
    <FaSmile className="text-5xl " />,
    <FaBusinessTime className="text-5xl" />,

    <FaDatabase className="text-5xl " />,
    <FaDatabase className="text-5xl" />,
    <FaSmile className="text-5xl " />,
    <FaArtstation className="text-5xl " />,
  ];

  useEffect(() => {
    fetch("https://educational-server-mosharrof-hosen-munna.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="md:text-5xl text-2xl font-bold">
            <span className="text-primary mb-4 inline-block"> Explore</span>{" "}
            <br />
            Our Popular Courses
          </h1>
          <Link to={`/courses`}>
            <div className="md:text-lg text-md font-semibold cursor-pointer hover:text-primary duration-300">
              View all Category
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((c, i) => {
            return <CategoryCard category={c}>{icons[i]}</CategoryCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Explore;
