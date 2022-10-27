import React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const CommentCard = ({ comment }) => {

  return (
    <div className="flex items-start bg-white shadow-lg rounded-lg shadow-slate-200 p-4 my-4">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={comment.profile} />
        </div>
      </div>
      <div className="ml-8 w-full">
        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h3 className="text-lg font-bold">{comment.name}</h3>
            <p>{comment.date}</p>
          </div>
          <div className="flex text-rose-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
