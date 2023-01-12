import React from "react";

const Card = ({icon,title,text}) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
      <div className="py-5">
        {icon}
      </div>
      <div>
        <h1 className="mb-5 text-[22px]  mx-auto">{title}</h1>
        <p className="text-Under-gray leading-[26px]">
            {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
