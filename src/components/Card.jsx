import React, { useState } from "react";

const Card = () => {
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  const handlePinyin = () => {
    setShowPinyin((currentState) => !currentState);
  };
  const handleMeaning = () => {
    setShowMeaning((currentState) => !currentState);
  };
  const str = "我说中文。这是我的猫";

  return (
    <div className=" border">
      <div className="border py-2">
        <div className="border">
          <h4 className="text-8xl font-kaiti font-bold text-zeidark text-center">
            我
          </h4>
          {showPinyin && (
            <h5 className="font-noto tracking-wide font-bold text-2xl text-center text-orange-600">
              wǒ
            </h5>
          )}
        </div>
        {showMeaning && (
          <div className="meaning mt-1">
            <p className="font-xl text-center tracking-wide">
              <span className="text-sm italic mr-1">pron.</span>
              <span className="text-zeilight text-base">I/Me</span>
            </p>
            <p className="px-2">
              <span className=" mx-4 text-sm block text-gray-600">
                Example:
              </span>
              <span className="font-kaiti text-2xl block text-zeidark">
                {str.split("").map((character, index) => (
                  <span
                    key={index}
                    className={`${character == "我" && "text-orange-600"}`}
                  >
                    {character}
                  </span>
                ))}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 px-5 py-4">
        {/* Pinyin Button */}
        <button
          onClick={handlePinyin}
          className={`
      w-full py-2.5 rounded-lg font-semibold text-sm border-2
      ${
        showPinyin
          ? "bg-orange-500 text-white border-orange-500"
          : "bg-orange-50 text-orange-600 border-orange-300"
      }
    `}
        >
          {showPinyin ? "Hide Pinyin" : "Show Pinyin"}
        </button>

        {/* Meaning Button */}
        <button
          onClick={handleMeaning}
          className={`
      w-full py-2.5 rounded-lg font-semibold text-sm border-2
      ${
        showMeaning
          ? "bg-zeilight text-white border-zeilight"
          : "bg-blue-50 text-zeilight border-zeiverylight"
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
