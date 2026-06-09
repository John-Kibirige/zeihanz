import React from "react";

const GrammarCard = ({
  grammarPoint,
  description,
  sentenceStructure,
  exampleSentences,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-6">
      {/* Main Card Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl p-6 shadow-lg">
        <h4 className="text-3xl md:text-4xl font-bold text-white text-center font-kaiti tracking-wide">
          {grammarPoint}
        </h4>
      </div>

      {/* Card Body */}
      <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Description Section */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📖</span>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Description
              </h5>
              <p className="text-gray-700 text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Sentence Structure Section */}
        <div className="p-6 border-b border-gray-200 bg-cyan-50/30">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏗️</span>
            <div className="flex-1">
              <h5 className="text-xs uppercase tracking-wider text-cyan-600 font-semibold mb-1">
                Sentence Structure
              </h5>
              <code className="block bg-gray-100 p-3 rounded-lg text-gray-800 font-mono text-sm md:text-base overflow-x-auto">
                {sentenceStructure}
              </code>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-2xl">✨</span>
            <h5 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Example Sentences
            </h5>
          </div>

          <ul className="space-y-4">
            {exampleSentences.map(({ example, pinyin, meaning }, index) => (
              <li
                key={example}
                className={`p-5 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-cyan-50 to-white border-l-4 border-cyan-500"
                    : "bg-gradient-to-r from-sky-50 to-white border-l-4 border-sky-500"
                }`}
              >
                <p className="text-xl md:text-2xl font-kaiti text-gray-800 mb-2">
                  {example}
                </p>
                <p className="text-sm text-gray-500 italic mb-2 font-mono">
                  {pinyin}
                </p>
                <p className="text-gray-600 border-t border-gray-200 pt-2 mt-1 text-sm">
                  📌 {meaning}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Decoration */}
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-orange-400 to-sky-400"></div>
      </div>
    </div>
  );
};

export default GrammarCard;
