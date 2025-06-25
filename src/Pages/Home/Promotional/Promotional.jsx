import React from "react";
import promotional from "../../../assets/promotional.jpg";
import { Link } from "react-router-dom";

const Promotional = () => {
  return (
    <div
      className="hero min-h-screen my-10"
      style={{
        backgroundImage: `url(${promotional})`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl md:text-5xl font-extrabold">
            🎁 Special Offer Just for You!
          </h1>
          <p className="mb-6 text-lg">
            Pay <span className="font-semibold">any 3 bills</span> this month
            and get
            <span className="font-bold text-[#95b864]">
              {" "}
              10 BDT cashback
            </span>{" "}
            instantly in your balance. Offer valid till{" "}
            <span className="underline">May 30, 2025</span>. Don’t miss out!
          </p>
          <Link to="/bills">
            <button className="btn  border border-none outline-none text-white font-semibold bg-[#95b864] px-6 py-2 rounded-lg">
              Pay Now & Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
