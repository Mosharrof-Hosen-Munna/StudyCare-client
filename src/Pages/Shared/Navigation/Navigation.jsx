import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaBattleNet } from "react-icons/fa";

const Navigation = () => {
  const [check, setCheck] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <div className="bg-primary text-white sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div class="navbar-start">
          <div class="dropdown flex items-center">
            <label tabindex="0" class="btn block  md:hidden  btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-600  rounded-box w-52"
            >
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
                  <span className="label-text text-white text-lg mr-2">
                    Dark Mode
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked={check}
                    onChange={() => setCheck(!check)}
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
        <div className="flex">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-4xl flex items-center"
          >
            <span className="mr-4">
              <FaBattleNet />
            </span>{" "}
            STUDY <span className="text-rose-600">CARE</span>
          </Link>
        </div>
        </div>
        <div className="flex-none hidden md:block">
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
                  <span className="label-text text-white text-lg mr-2">
                    Dark Mode
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked={check}
                    onChange={() => setCheck(!check)}
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
