import React from "react";

const Hero = () => {
  return (
    <section className="max-w-full mx-auto flex flex-col text-center font-Ds">
      <div className="max-w-5xl mx-auto mt-20 ">
        <h1 className="text-Dark-blue text-7xl font-Ds font-bold">Startup Framework</h1>
        <div className="max-w-[600px] mx-auto mt-10">
          <p className="text-[22px] text-Under-gray font-Ds">
            We made it so beutiful and simple. It combines landings, pages,
            blogs and shop screens. It is definitely the tool you need in your
            collection!
          </p>

          <button className="mt-20 rounded-full bg-Teal py-4 px-7 text-white">Purchase now for $248</button>
          <p className="mt-2 text-Teal font-Ds">Learn more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
