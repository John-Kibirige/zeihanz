import React from "react";
import Backarrow from "../svgs/Backarrow";
import Card from "./Card";
import ChevronBack from "../svgs/ChevronBack";
import ChevronFront from "../svgs/ChevronFront";

const Dashboard = ({ selectedLevel, setBackButtonClicked }) => {
  return (
    <section className="py-4 px-4 flex flex-col gap-10 bg-slate-100 w-screen h-screen">
      <header className="flex shadow-2xl px-4 py-2 rounded-md">
        <button
          className="hover:cursor-pointer flex gap-4 items-center  px-4 py-1 lg:py-2 border-2 border-zeilight active:scale-95"
          onClick={() => setBackButtonClicked(true)}
        >
          <Backarrow />
          <span className="block text-zeilight ">Back</span>
        </button>

        <h1 className="text-xl lg:text-2xl text-zeidark text-center w-full font-semibold">
          {selectedLevel}
        </h1>
      </header>

      <div className="">
        <Card />
      </div>
      {/* create the next and previous button */}
      <div className=" flex justify-between lg:w-2/3 xl:w-1/2 mx-auto">
        <button className=" bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center active:scale-95 lg:text-lg shadow-md">
          <ChevronBack />
          <span className="block text-white">Previous</span>
        </button>

        <button className=" border-2 border-orange-600  px-4 py-2 rounded-md flex gap-4 items-center active:scale-95 shadow-md">
          <span className="block text-orange-600 lg:text-lg">Next</span>{" "}
          <ChevronFront />
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
