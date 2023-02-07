import React from "react";

const HomeActivityCard = ({ name, title }) => {
  return (
    <div>
      <div className=" w-32 h-26 mt-6 rounded overflow-hidden shadow-lg mr-4 ml-12 items-center justify-center bg-slate-50 py-2 ">
        <div className="font-extrabold text-center text-dark-purple">
          <h2 className="  text-5xl">{name}</h2>
          <h2 className="pt-2  text-lg">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeActivityCard;
