import React, { useState } from "react";
import { charactersToBeHighlighted } from "../scripts/cardrelated";

const Card = ({
  cardPosition,
  numberOfCards,
  name,
  pinyin,
  partOfSpeech,
  meaning,
  example,
  examplePinyin,
  translation,
  showPinyin,
  showMeaning,
  setShowPinyin,
  setShowMeaning,
}) => {
  const handlePinyin = () => {
    setShowPinyin((currentState) => !currentState);
  };
  const handleMeaning = () => {
    setShowMeaning((currentState) => !currentState);
  };

  return (
    <div className="bg-white rounded-md shadow-lg px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto lg:flex lg:flex-row lg:gap-8 lg:items-center">
      <div className="py-4 lg:flex-1 lg:flex lg:flex-col lg:justify-center">
        <div className="">
          <div className="w-fit h-fit text-center px-2 mb-4 rounded-sm text-sm py-[1px] shadow-2xl border-2 border-orange-600 sm:text-base sm:px-3 sm:py-1">
            <span className="text-zeilight">{cardPosition + 1}</span>
            <span className="text-orange-600 mx-1">of</span>
            <span className="text-zeilight">{numberOfCards}</span>
          </div>
          <h4 className="text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-kaiti font-bold text-zeidark text-center">
            {name}
          </h4>
          {showPinyin && (
            <h5 className="font-noto tracking-wide font-bold text-2xl text-center text-orange-600 lg:text-3xl lg:mt-2">
              {pinyin}
            </h5>
          )}
        </div>
        {showMeaning && (
          <div className="meaning mt-1 lg:mt-6 px-3">
            <p className="font-xl text-center tracking-wide">
              <span className="text-sm italic mr-1 lg:text-base">
                {partOfSpeech}.
              </span>
              <span className="text-zeilight text-base md:text-xl lg:text-2xl">
                {meaning}
              </span>
            </p>
            <p className="sm:px-4 lg:px-8">
              <span className="mx-4 mb- text-sm md:text-base lg:text-lg block text-gray-600 ">
                Example:
              </span>
              <span className="font-kaiti text-2xl block text-zeidark lg:text-3xl xl:text-4xl mt-2 lg:mt-4 ">
                {charactersToBeHighlighted(example, name).map(
                  ([char, isHighlighted], index) => (
                    <span
                      key={index}
                      className={`${isHighlighted && "text-orange-600"}`}
                    >
                      {char}
                    </span>
                  ),
                )}
              </span>
            </p>
            <p className="text-center tracking-wide">
              {charactersToBeHighlighted(examplePinyin, pinyin).map(
                ([char, isHighlighted], index) => (
                  <span
                    key={index}
                    className={`${isHighlighted && "text-orange-600"}`}
                  >
                    {char}
                  </span>
                ),
              )}
            </p>
            <p className="font-lato font-semibold mt-4 text-gray-700 tracking-wide text-center lg:text-lg">
              {translation}
            </p>
          </div>
        )}
      </div>

      {/* Buttons Section - Right on desktop */}
      <div className="flex flex-col gap-3 px-5 py-4 sm:px-8 sm:py-6 lg:px-6 lg:py-0 lg:w-72 xl:w-80 lg:border-l lg:border-gray-100 lg:justify-center">
        {/* Pinyin Button */}
        <button
          onClick={handlePinyin}
          className={`
            w-full py-2 rounded-lg font-semibold text-sm border-2 lg:text-base lg:py-3 transition-colors
            ${
              showPinyin
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-orange-50 text-orange-600 border-orange-300 hover:bg-orange-100"
            }
          `}
        >
          {showPinyin ? "Hide Pinyin" : "Show Pinyin"}
        </button>

        {/* Meaning Button */}
        <button
          onClick={handleMeaning}
          className={`
            w-full py-2 rounded-lg font-semibold text-sm border-2 lg:text-base lg:py-3 transition-colors
            ${
              showMeaning
                ? "bg-zeilight text-white border-zeilight"
                : "bg-blue-50 text-zeilight border-zeiverylight hover:bg-blue-100"
            }
          `}
        >
          {showMeaning ? "Hide Meaning" : "Show Meaning"}
        </button>
      </div>
    </div>
  );
};

export default Card;
