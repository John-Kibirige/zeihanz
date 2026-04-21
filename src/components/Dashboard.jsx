import React, { useState } from "react";
import Backarrow from "../svgs/Backarrow";
import Card from "./Card";
import ChevronBack from "../svgs/ChevronBack";
import ChevronFront from "../svgs/ChevronFront";
import { HskOneCharacters } from "../data/hskOne";
import { HskTwoCharacters } from "../data/hskTwo";
import { HskThreeCharacters } from "../data/hskThree";

import RandomSVG from "../svgs/RandomSVG";
import Humberger from "../svgs/Humberger";
import Close from "../svgs/Close";
import { characterDatabase } from "../data/database";

const Dashboard = ({ selectedLevel, setBackButtonClicked }) => {
  const [cardPosition, setCardPosition] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  // state for displaying the navigation popup
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("main");

  const resetCardState = () => {
    setShowPinyin(false);
    setShowMeaning(false);
  };

  const dataBasedOnLevel = characterDatabase[selectedLevel];
  const data = dataBasedOnLevel[activeCategory];

  const numberOfCards = data.length;
  const {
    name,
    pinyin,
    partOfSpeech,
    meaning,
    example,
    examplePinyin,
    translation,
  } = data[cardPosition];

  const handleNext = () => {
    setCardPosition((state) => {
      return state == numberOfCards - 1 ? state : state + 1;
    });
    resetCardState();
  };

  const handlePrevious = () => {
    setCardPosition((state) => {
      return state == 0 ? state : state - 1;
    });
    resetCardState();
  };

  const handleRandom = () => {
    setCardPosition(Math.floor(Math.random() * numberOfCards));
    resetCardState();
  };

  // showing the menu for mobile
  const handleShowMenu = () => {
    setShowMenu((state) => !state);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const categories = [
    { id: "main", label: "Main" },
    { id: "names", label: "Names" },
    { id: "excluded", label: "Excluded" },
    { id: "compounds", label: "Compounds" },
    { id: "extra", label: "Extra" },
  ];

  return (
    <section className="py-4 px-4 flex flex-col gap-10 pb-10 ">
      <header className="flex shadow-lg px-4 py-2 rounded-md items-center relative border-2 border-red-600">
        <button
          className="hover:cursor-pointer flex gap-4 items-center  px-4 py-1 lg:py-2 border-2 border-zeilight active:scale-95"
          onClick={() => setBackButtonClicked(true)}
        >
          <Backarrow />
          <span className="text-zeilight hidden sm:block ">Back</span>
        </button>

        <h1 className="text-xl lg:text-2xl text-zeidark text-center w-full font-semibold">
          {selectedLevel}
        </h1>
        {/* navigation mobile*/}
        <div className="">
          <button
            className="cursor-pointer active:scale-95"
            onClick={handleShowMenu}
          >
            {!showMenu ? <Humberger /> : <Close />}
          </button>
        </div>

        {showMenu && (
          <nav className="border absolute top-full mt-2 w-full left-0 right-0 h-fit px-5 py-4 flex flex-col gap-2 font-nunito tracking-wide rounded-md shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-left px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? "bg-orange-600 text-white"
                    : "text-zeidark hover:bg-orange-200 "
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        )}
      </header>
      <div className="    PLEASE REMOVE ME REMOVE ME REMOVE ME..........................................">
        <div className="">
          <Card
            key={cardPosition}
            cardPosition={cardPosition}
            numberOfCards={numberOfCards}
            name={name}
            pinyin={pinyin}
            partOfSpeech={partOfSpeech}
            meaning={meaning}
            example={example}
            examplePinyin={examplePinyin}
            translation={translation}
            showPinyin={showPinyin}
            showMeaning={showMeaning}
            setShowPinyin={setShowPinyin}
            setShowMeaning={setShowMeaning}
          />
        </div>
        {/* create the next and previous button */}
        <div className=" flex justify-between sm:justify-around lg:justify-between w-full lg:w-2/3 xl:w-1/2 lg:mx-auto">
          <button
            className=" bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center active:scale-95 lg:text-lg shadow-md cursor-pointer"
            onClick={handlePrevious}
          >
            <ChevronBack />
            <span className="hidden sm:block text-white">Previous</span>
          </button>

          <button
            className=" bg-zeidark px-4 py-2 rounded-md flex gap-2 items-center active:scale-95 lg:text-lg shadow-md cursor-pointer"
            onClick={handleRandom}
          >
            <RandomSVG />
            <span className="hidden sm:block text-white">Shuffle</span>
          </button>

          <button
            className=" border-2 border-orange-600  px-4 py-2 rounded-md flex gap-4 items-center active:scale-95 shadow-md cursor-pointer"
            onClick={handleNext}
          >
            <span className=" hidden sm:block text-orange-600 lg:text-lg">
              Next
            </span>{" "}
            <ChevronFront />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
