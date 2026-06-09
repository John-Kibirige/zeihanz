import React, { useState } from "react";
import Backarrow from "../svgs/Backarrow";
import Card from "./Card";
import ChevronBack from "../svgs/ChevronBack";
import ChevronFront from "../svgs/ChevronFront";
import RandomSVG from "../svgs/RandomSVG";
import Humberger from "../svgs/Humberger";
import Close from "../svgs/Close";
import { characterDatabase } from "../data/database";
import GridIcon from "../svgs/GridIcon";
import GrammarCard from "./GrammarCard";
import SearchBar from "./SearchBar";

const Dashboard = ({ selectedLevel, setBackButtonClicked }) => {
  const [cardPosition, setCardPosition] = useState(0);
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("main");
  const [showCardGrid, setShowCardGrid] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const resetCardState = () => {
    setShowPinyin(false);
    setShowMeaning(false);
  };

  const dataBasedOnLevel = characterDatabase[selectedLevel] || {};
  const categoryData = dataBasedOnLevel[activeCategory] || [];

  // Search logic
  const handleSearch = (query) => {
    if (!query) {
      setSearchQuery("");
      setSearchResults([]);
      setIsSearching(false);
      setCardPosition(0);
      return;
    }

    setSearchQuery(query);

    const results = categoryData.filter((item) => {
      if (activeCategory !== "grammar") {
        const nameMatch = item.name
          ?.toLowerCase()
          .includes(query.toLowerCase());
        const pinyinMatch = item.pinyin
          ?.toLowerCase()
          .includes(query.toLowerCase());
        const meaningMatch = item.meaning
          ?.toLowerCase()
          .includes(query.toLowerCase());
        return nameMatch || pinyinMatch || meaningMatch;
      } else {
        const nameMatch = item.name
          ?.toLowerCase()
          .includes(query.toLowerCase());
        const descriptionMatch = item.description
          ?.toLowerCase()
          .includes(query.toLowerCase());
        return nameMatch || descriptionMatch;
      }
    });

    setSearchResults(results);
    setIsSearching(true);
    setCardPosition(0);
  };

  const displayData = isSearching ? searchResults : categoryData;
  const numberOfCards = displayData.length;
  const currentItem = displayData[cardPosition];

  const vocabularyProps =
    activeCategory !== "grammar" && currentItem
      ? {
          name: currentItem.name,
          pinyin: currentItem.pinyin,
          partOfSpeech: currentItem.partOfSpeech,
          meaning: currentItem.meaning,
          example: currentItem.example,
          examplePinyin: currentItem.examplePinyin,
          translation: currentItem.translation,
        }
      : {};

  const grammarProps =
    activeCategory === "grammar" && currentItem
      ? {
          grammarPoint: currentItem.name,
          description: currentItem.description,
          sentenceStructure: currentItem.sentenceStructure,
          exampleSentences: currentItem.exampleSentences,
        }
      : {};

  const handleNext = () => {
    setCardPosition((state) => {
      return state === numberOfCards - 1 ? state : state + 1;
    });
    resetCardState();
  };

  const handlePrevious = () => {
    setCardPosition((state) => {
      return state === 0 ? state : state - 1;
    });
    resetCardState();
  };

  const handleRandom = () => {
    if (numberOfCards > 0) {
      setCardPosition(Math.floor(Math.random() * numberOfCards));
      resetCardState();
    }
  };

  const handleShowMenu = () => {
    setShowMenu((state) => !state);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowMenu(false);
    resetCardState();
    setCardPosition(0);
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  const categories = [
    { id: "main", label: "Main" },
    { id: "names", label: "Names" },
    { id: "excluded", label: "Excluded" },
    { id: "compounds", label: "Compounds" },
    { id: "extra", label: "Extra" },
    { id: "grammar", label: "Grammar" },
  ];

  const headerNames = {
    hskOne: "HSK 1",
    hskTwo: "HSK 2",
    hskThree: "HSK 3",
  };

  const showNoResults = isSearching && searchResults.length === 0;

  return (
    <section className="py-4 px-4 flex flex-col gap-6 pb-10">
      {/* Header - Back button, Title, Mobile Menu, Grid */}
      <header className="flex justify-between lg:justify-baseline shadow-lg px-4 py-2 rounded-md items-center relative z-50 bg-white">
        <button
          className="hover:cursor-pointer flex gap-4 items-center px-4 py-1 lg:py-2 border-2 border-zeilight active:scale-95"
          onClick={() => setBackButtonClicked(true)}
        >
          <Backarrow />
          <span className="text-zeilight hidden sm:block">Back</span>
        </button>

        <h1 className="text-xl lg:text-2xl text-zeidark text-center w-full lg:w-fit font-semibold">
          {headerNames[selectedLevel]}
        </h1>

        {/* Mobile Menu Button */}
        <div className="flex justify-center lg:hidden">
          <button
            className="cursor-pointer active:scale-95 w-8"
            onClick={handleShowMenu}
          >
            {!showMenu ? <Humberger /> : <Close />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:grid grid-cols-6 w-fit px-5 py-4 gap-2 font-nunito tracking-wide z-50 bg-white xl:text-lg">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex-1 w-full text-center px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                activeCategory === cat.id
                  ? "bg-orange-600 text-white"
                  : "text-zeidark hover:bg-orange-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Grid Button */}
        <button
          className="cursor-pointer active:scale-95 ml-5"
          onClick={() => setShowCardGrid((prevState) => !prevState)}
        >
          <GridIcon />
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {showMenu && (
        <>
          <nav className="lg:hidden w-full px-5 py-4 flex flex-col gap-2 font-nunito tracking-wide rounded-md shadow-md z-50 bg-white">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-left px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? "bg-orange-600 text-white"
                    : "text-zeidark hover:bg-orange-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
          <div
            onClick={() => setShowMenu(false)}
            className="fixed lg:hidden inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        </>
      )}

      {/* Search Bar - Below Navigation */}
      <div className="flex justify-center w-full">
        <SearchBar
          onSearch={handleSearch}
          placeholder={`Search ${activeCategory === "grammar" ? "grammar points..." : "characters, pinyin, meaning..."}`}
        />
      </div>

      {/* Main Content */}
      {showCardGrid ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-5 lg:gap-6 xl:px-5">
          {displayData.map((obj, index) => (
            <button
              key={index}
              className={`aspect-square rounded-lg shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex flex-col items-center justify-center relative ${
                index === cardPosition
                  ? "bg-orange-600 text-white"
                  : "bg-white text-zeidark hover:bg-cyan-100"
              }`}
              onClick={() => {
                setCardPosition(index);
                setShowCardGrid(false);
                resetCardState();
              }}
            >
              <span
                className={`block text-sm sm:text-base xl:text-lg px-2 py-1 absolute left-0 top-0 ${
                  index === cardPosition ? "text-white" : "text-orange-500"
                }`}
              >
                {index + 1}
              </span>
              <span className="text-2xl sm:text-4l xl:6xl tracking-wide font-medium font-kaiti">
                {obj.name}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div>
          {showNoResults ? (
            <div className="text-center py-16 px-4">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No results found
              </h3>
              <p className="text-gray-400">
                No matches for "
                <span className="text-orange-500">{searchQuery}</span>" in{" "}
                {activeCategory}
              </p>
              <button
                onClick={() => handleSearch("")}
                className="mt-4 text-orange-500 underline hover:text-orange-600"
              >
                Clear search
              </button>
            </div>
          ) : (
            <>
              {activeCategory === "grammar" ? (
                <GrammarCard {...grammarProps} />
              ) : (
                <Card
                  key={cardPosition}
                  cardPosition={cardPosition}
                  numberOfCards={numberOfCards}
                  {...vocabularyProps}
                  showPinyin={showPinyin}
                  showMeaning={showMeaning}
                  setShowPinyin={setShowPinyin}
                  setShowMeaning={setShowMeaning}
                />
              )}

              {numberOfCards > 0 && (
                <div className="flex justify-between sm:justify-around lg:justify-between w-full lg:w-2/3 xl:w-1/2 lg:mx-auto mt-6 lg:mt-7 xl:mt-8">
                  <button
                    className="bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center active:scale-95 lg:text-lg shadow-md cursor-pointer"
                    onClick={handlePrevious}
                  >
                    <ChevronBack />
                    <span className="hidden sm:block text-white">Previous</span>
                  </button>

                  <button
                    className="bg-zeidark px-4 py-2 rounded-md flex gap-2 items-center active:scale-95 lg:text-lg shadow-md cursor-pointer"
                    onClick={handleRandom}
                  >
                    <RandomSVG />
                    <span className="hidden sm:block text-white">Shuffle</span>
                  </button>

                  <button
                    className="border-2 border-orange-600 px-4 py-2 rounded-md flex gap-4 items-center active:scale-95 shadow-md cursor-pointer"
                    onClick={handleNext}
                  >
                    <span className="hidden sm:block text-orange-600 lg:text-lg">
                      Next
                    </span>
                    <ChevronFront />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
