import React from "react";
import Backarrow from "../svgs/Backarrow";
import Card from "./Card";

const Dashboard = ({ selectedLevel, setBackButtonClicked }) => {
  return (
    <section className="py-4 px-4 flex flex-col gap-10">
      <header className="flex border shadow-2xl">
        <button
          className="hover:cursor-pointer"
          onClick={() => setBackButtonClicked(true)}
        >
          <Backarrow />
        </button>

        <h1 className="text-xl text-zeidark text-center w-full border">
          {selectedLevel}
        </h1>
      </header>

      <div className="">
        <Card />
      </div>
    </section>
  );
};

export default Dashboard;
