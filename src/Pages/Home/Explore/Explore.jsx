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
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);

  const data = [
    {
      id: "01",
      name: "Data Science",
      slogan: "Data is Everything",
    },
    {
      id: "02",
      name: "Business",
      slogan: "Improve your business",
    },
    {
      id: "03",
      name: "Art & Design",
      slogan: "Fun & Challenging",
    },
    {
      id: "04",
      name: "Lifestyle",
      slogan: "New Skills, New You",
    },
    {
      id: "05",
      name: "Marketing",
      slogan: "Improve your business",
    },
    {
      id: "06",
      name: "Finance",
      slogan: "Fun & Challenging",
    },
    {
      id: "07",
      name: "Health & Fitness",
      slogan: "Invest to Your Body",
    },
    {
      id: "08",
      name: "Music",
      slogan: "Major or Minor",
    },
    {
      id: "09",
      name: "Academics",
      slogan: "High Education Level",
    },
  ];
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold">
            <span className="text-primary mb-4 inline-block"> Explore</span>{" "}
            <br />
            Our Popular Courses
          </h1>
          <Link to={`/courses`}>
            <div className="text-lg font-semibold cursor-pointer hover:text-primary duration-300">
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
