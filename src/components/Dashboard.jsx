import React, { useState } from "react";
import Backarrow from "../svgs/Backarrow";
import Card from "./Card";
import ChevronBack from "../svgs/ChevronBack";
import ChevronFront from "../svgs/ChevronFront";
import { HskOneCharacters } from "../data/hskOne";
import { HskTwoCharacters } from "../data/hskTwo";
import { HskThreeCharacters } from "../data/hskThree";

import RandomSVG from "../svgs/RandomSVG";

const Dashboard = ({ selectedLevel, setBackButtonClicked }) => {
  const [cardPosition, setCardPosition] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  const resetCardState = () => {
    setShowPinyin(false);
    setShowMeaning(false);
  };

  const data =
    selectedLevel == "HSK 1"
      ? HskOneCharacters
      : selectedLevel == "HSK 2"
        ? HskTwoCharacters
        : HskThreeCharacters;
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

  return (
    <section className="py-4 px-4 flex flex-col gap-10 pb-10 ">
      <header className="flex shadow-2xl px-4 py-2 rounded-md">
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
      </header>

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
    </section>
  );
};

export default Dashboard;
