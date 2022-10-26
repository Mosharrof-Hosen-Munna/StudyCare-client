import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  // console.log(user.providerData[0].photoURL);
  return (
    <div className="bg-violet-700 text-white sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-4xl">
            STUDY <span className="text-rose-600">CARE</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 flex items-center">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
                      <div className="w-10 rounded-full">
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
