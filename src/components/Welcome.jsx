import React, { useState } from "react";

const Welcome = () => {
  // State to track the selected value (controlled input)
  const [selectedLevel, setSelectedLevel] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change event for radio buttons
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    // Clear error when user selects an option
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedLevel) {
      setError("Please select an HSK level to continue");
      return;
    }
    // Clear error and proceed
    setError("");
    setIsSubmitted(true);
    // Here you can add your navigation or next step logic
    console.log("Selected Level:", selectedLevel);
  };

  // Options for the radio buttons
  const hskOptions = [
    { id: "hsk1", value: "HSK 1", label: "HSK 1" },
    { id: "hsk2", value: "HSK 2", label: "HSK 2" },
    { id: "hsk3", value: "HSK 3", label: "HSK 3" },
  ];

  return (
    <section className="pt-5 px-2 flex flex-col gap-4 h-full w-full bg-slate-100">
      <div className=" font-munito text-center py-4">
        <h1 className="">
          <span className="font-semibold text-xl block text-zeilight text-shadow-lg">
            你好
          </span>
          <span className="block font-inter text-lg font-semibold my-4 text-shadow-lg">
            Welcome to ZeiHanz Application
          </span>
        </h1>
        <h2 className="mt-2 text-sm italic text-gray-700">
          Master Chinese Characters, one card at a time
        </h2>
      </div>

      <div className="mt-4 px-4 pt-2 pb-6 rounded-2xl shadow-2xl bg-whie">
        <h3 className="text-zeidark text-center">
          Please select your HSK level to begin
        </h3>

        {/* Radio Group */}
        <div className="space-y-4 mt-4">
          {hskOptions.map((option) => (
            <label
              key={option.id}
              className={`
                flex items-center px-3 py-2 rounded-lg border-2 cursor-pointer
                transition-all duration-200 ease-in-out
                ${
                  selectedLevel === option.value
                    ? "border-zeilight bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-zeiverylight hover:bg-gray-50"
                }
              `}
            >
              <input
                type="radio"
                name="hskLevel"
                value={option.value}
                checked={selectedLevel === option.value}
                onChange={handleLevelChange}
                className="w-3 h-3 text-zeilight cursor-pointer accent-zeilight"
              />
              <span className="ml-3 font-medium text-gray-700">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-300 rounded-lg animate-pulse">
            <p className="text-red-600 text-sm flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`
            w-full mt-6 py-3 px-4 rounded-lg font-semibold text-white
            transition-all duration-200 ease-in-out
            ${
              selectedLevel
                ? "bg-zeilight hover:bg-zeidark transform hover:scale-[1.02] shadow-md"
                : "bg-gray-400 cursor-not-allowed opacity-60"
            }
          `}
          disabled={!selectedLevel && !isSubmitted}
        >
          {selectedLevel
            ? `Start Learning ${selectedLevel}`
            : "Select a Level to Begin"}
        </button>
      </div>
    </section>
  );
};

export default Welcome;
