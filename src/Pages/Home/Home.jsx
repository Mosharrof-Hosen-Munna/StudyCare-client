import React from "react";
import useAuth from "../../Hooks/useAuth";
import Explore from "./Explore/Explore";
import FindCourses from "./FindCourses/FindCourses";
import Header from "./Header/Header";

const Home = () => {
  const auth = useAuth()
  console.log(auth)
  return (
    <div >
     <Header/>
     <Explore/>
     <FindCourses/>
    </div>
  );
};

export default Home;
