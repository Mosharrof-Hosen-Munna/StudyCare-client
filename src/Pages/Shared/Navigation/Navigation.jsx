import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaBattleNet } from "react-icons/fa";

const Navigation = () => {
  const [check,setCheck] = useState(false)
  const { user, logOut } = useAuth();
  return (
    <div className="bg-violet-700 text-white sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-4xl flex items-center">
        <span className="mr-4"><FaBattleNet/></span>    STUDY <span className="text-rose-600">CARE</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 flex items-center text-lg">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white text-lg mr-2">Dark Mode</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked={check}
                    onChange={()=>setCheck(!check)}
                  />
                </label>
              </div>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li onClick={logOut}>
                  <a>Logout</a>
                </li>

                <div
                  className="tooltip  tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <div className="avatar ml-4">
                    <div className="w-10 rounded-full cursor-pointer">
                      <img
                        src={
                          user.photoURL
                            ? user.photoURL
                            : `https://placeimg.com/192/192/people`
                        }
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
