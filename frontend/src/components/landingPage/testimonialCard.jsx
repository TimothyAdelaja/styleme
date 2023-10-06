import React from "react";

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-3/5 shadow-md">
      <p className="text-sm font-medium ">{quote}</p>
      <p className="text-gray-600 font-semibold">{author}</p>
      <p className="text-gray-400">{role}</p>
    </div>
  );
};

export default TestimonialCard;
