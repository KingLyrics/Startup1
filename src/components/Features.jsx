import React from "react";
import Card from "./Card";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaCompressAlt, FaDesktop } from "react-icons/fa";

const Features = () => {
  return (
    <div className="py-48 px-4 max-w-[1240px] mx-auto">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-[42px] text-Under-gray font-Ds text-center">
          Our Benefits
        </h1>
        <div className="max-w-5xl mt-14 mx-auto grid grid-cols-3 gap-x-28">
          <Card
            icon={<BsFillBriefcaseFill size={70} className="text-Teal" />}
            title={"Many Useful components"}
            text={
              "Startup Framework contains components and complex blocks which can easily be integrated into almost any design."
            }
          />
          <Card
            icon={<FaCompressAlt size={70} className="text-Teal" />}
            title={"Responsive Layout"}
            text={
              "We haven’t forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support."
            }
          />
          <Card
            icon={<FaDesktop size={70} className="text-Teal" />}
            title={"Retina Ready"}
            text={
              "Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
