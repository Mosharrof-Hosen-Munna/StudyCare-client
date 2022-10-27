import React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { user } = useAuth();
  const course = useLoaderData()
  
  return (
    <div>
      <h1 className="text-3xl text-primary font-semibold mb-4">
        Checkout! Proceed to your Payment
      </h1>
      
      <div className="card  bg-white p-4">
        <div className="md:flex">
          <img className="w-full md:w-2/4 max-h-72" src={course.img} alt="" />
          <div className="ml-4 p-4">
            <h2 className="text-3xl font-semibold">{course.name}</h2>
            <h4 className="text-xl">by {course.instructor.name}</h4>
            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-xl font-semibold ">
                  Badge: {course.rating.badge}
                </h5>
                <div className="flex items-center text-rose-600">
                  <div className="text-xl font-semibold text-black">
                    Rating:{" "}
                  </div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-black font-semibold">
                    ({course.rating.number})
                  </span>
                </div>
              </div>
              <h5 className="text-xl mt-4 font-semibold ">
                Total Reviews: {course.rating.total}
              </h5>
              <h5 className="text-xl mt-4 font-semibold ">
                Lessons: {course.lesson}
              </h5>
              <h5 className="text-xl mt-4 font-semibold ">
                Course Price: <span className="text-primary font-bold text-2xl">{course.price}</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="p-4 w-full md:w-3/4 mx-auto">
          <h2 className="text-3xl text-primary mt-4 text-center font-semibold">
            Payment Details
          </h2>
          <p className="text-lg text-center mb-4">Complete your purchase by providing your payment details</p>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={user.displayName}
              disabled
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={user.email}
              disabled
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Payment Method</span>
            </label>
            <input
              type="text"
              placeholder="Method"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Write your Answer</span>
            </label>
            <textarea
              type="text"
              placeholder="Any Question write here"
              rows={4}
              className="textarea input-bordered"
            />
          </div>
          <div className="text-center mt-8">
            <button className="btn btn-primary w-3/4 md:w-2/4 ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
