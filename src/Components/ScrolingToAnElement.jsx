import { useRef } from "react";

export default function ScrollingToAnElement() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div
      className="
      min-h-fit h-auto max-h-full
      w-full max-w-6xl mx-auto
      p-5
      bg-gradient-to-br from-gray-50 to-gray-100
      dark:from-gray-900 dark:to-gray-800
      text-gray-900 dark:text-gray-100
      rounded-2xl shadow-xl dark:shadow-gray-900/50
      transition-all duration-300
      my-6 md:my-8 lg:my-10
    "
    >
      {/* Header Section */}
      <div
        className="
        text-center mb-8 md:mb-10 lg:mb-12
        pb-4 md:pb-5 lg:pb-6
        border-b-2 border-gray-300 dark:border-gray-700
      "
      >
        <h1
          className="
          text-[clamp(1.5rem,5vw,3.5rem)]
          font-bold
          text-gray-800 dark:text-white
          mb-3
          flex flex-wrap items-center justify-center gap-x-2 gap-y-1
        "
        >
          <span className="text-blue-500 dark:text-blue-400">🐱</span>
          <span>Scrolling</span>
          <span>to</span>
          <span>an</span>
          <span>Element</span>
        </h1>
        <p
          className="
          text-[clamp(0.75rem,2.5vw,1.125rem)]
          text-gray-600 dark:text-gray-400
        "
        >
          Smooth scroll to specific elements using useRef
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-4
        gap-2 sm:gap-4
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <div
          className="
          p-2 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg sm:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg sm:text-2xl mb-1">🐱</div>
          <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">
            Cats
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">
            3
          </div>
        </div>

        <div
          className="
          p-2 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg sm:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg sm:text-2xl mb-1">📦</div>
          <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">
            useRef
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-green-600 dark:text-green-400">
            3
          </div>
        </div>

        <div
          className="
          p-2 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg sm:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg sm:text-2xl mb-1">🔄</div>
          <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">
            Scroll
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-purple-600 dark:text-purple-400">
            Smooth
          </div>
        </div>

        <div
          className="
          p-2 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg sm:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg sm:text-2xl mb-1">⚡</div>
          <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">
            Action
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-pink-600 dark:text-pink-400">
            Click
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className="
        flex flex-wrap justify-center gap-3 sm:gap-4
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <button
          onClick={handleScrollToFirstCat}
          className="
            px-4 sm:px-6 py-2 sm:py-3
            text-[clamp(0.75rem,2vw,1rem)] sm:text-[clamp(0.875rem,2.5vw,1.125rem)]
            font-semibold
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-600 hover:to-blue-700
            dark:from-blue-600 dark:to-blue-700
            dark:hover:from-blue-700 dark:hover:to-blue-800
            text-white
            rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            min-w-[80px] sm:min-w-[100px]
          "
        >
          <span className="text-base sm:text-lg">🐱</span>
          <span>Neo</span>
        </button>

        <button
          onClick={handleScrollToSecondCat}
          className="
            px-4 sm:px-6 py-2 sm:py-3
            text-[clamp(0.75rem,2vw,1rem)] sm:text-[clamp(0.875rem,2.5vw,1.125rem)]
            font-semibold
            bg-gradient-to-r from-green-500 to-green-600
            hover:from-green-600 hover:to-green-700
            dark:from-green-600 dark:to-green-700
            dark:hover:from-green-700 dark:hover:to-green-800
            text-white
            rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            min-w-[80px] sm:min-w-[100px]
          "
        >
          <span className="text-base sm:text-lg">😺</span>
          <span>Millie</span>
        </button>

        <button
          onClick={handleScrollToThirdCat}
          className="
            px-4 sm:px-6 py-2 sm:py-3
            text-[clamp(0.75rem,2vw,1rem)] sm:text-[clamp(0.875rem,2.5vw,1.125rem)]
            font-semibold
            bg-gradient-to-r from-purple-500 to-purple-600
            hover:from-purple-600 hover:to-purple-700
            dark:from-purple-600 dark:to-purple-700
            dark:hover:from-purple-700 dark:hover:to-purple-800
            text-white
            rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            min-w-[80px] sm:min-w-[100px]
          "
        >
          <span className="text-base sm:text-lg">😸</span>
          <span>Bella</span>
        </button>
      </div>

      {/* Scrollable Gallery */}
      <div
        className="
        relative
        w-full
        mb-8 md:mb-10 lg:mb-12
      "
      >
        {/* Mobile scroll indicator */}
        <div
          className="
          absolute -top-6 left-0 right-0
          flex justify-center
          sm:hidden
        "
        >
          <span
            className="
            text-[10px] sm:text-xs
            text-gray-500 dark:text-gray-400
            animate-bounce
          "
          >
            ← Swipe to scroll →
          </span>
        </div>

        {/* Scrollable container */}
        <div
          className="
          w-full
          overflow-x-auto
          pb-4 sm:pb-6
          scrollbar-thin
          scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
        "
        >
          <ul
            className="
            flex gap-4 sm:gap-6
            min-w-max
            px-2
          "
          >
            {/* Neo */}
            <li
              ref={firstCatRef}
              className="
                flex-shrink-0
                w-[250px] xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]
                rounded-xl
                overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                transform hover:scale-[1.02]
                border-2 border-transparent hover:border-blue-500
                dark:hover:border-blue-400
                group
              "
            >
              <div className="relative">
                <img
                  src="https://placecats.com/neo/300/200"
                  alt="Neo"
                  className="
                    w-full
                    h-[150px] xs:h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px]
                    object-cover
                    group-hover:brightness-110
                    transition-all duration-300
                  "
                />
                <div
                  className="
                    absolute top-2 left-2
                    bg-blue-500 dark:bg-blue-600
                    text-white
                    px-2 py-1
                    rounded-lg
                    text-[10px] xs:text-xs sm:text-sm
                    font-semibold
                    opacity-90
                  "
                >
                  Neo
                </div>
              </div>
              <div
                className="
                  bg-gradient-to-r from-blue-50 to-blue-100
                  dark:from-blue-900/30 dark:to-blue-800/30
                  p-3 sm:p-4
                "
              >
                <p
                  className="
                  text-[10px] xs:text-xs sm:text-sm md:text-base
                  text-gray-700 dark:text-gray-300
                "
                >
                  The curious explorer
                </p>
              </div>
            </li>

            {/* Millie */}
            <li
              ref={secondCatRef}
              className="
                flex-shrink-0
                w-[250px] xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]
                rounded-xl
                overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                transform hover:scale-[1.02]
                border-2 border-transparent hover:border-green-500
                dark:hover:border-green-400
                group
              "
            >
              <div className="relative">
                <img
                  src="https://placecats.com/millie/200/200"
                  alt="Millie"
                  className="
                    w-full
                    h-[150px] xs:h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px]
                    object-cover
                    group-hover:brightness-110
                    transition-all duration-300
                  "
                />
                <div
                  className="
                    absolute top-2 left-2
                    bg-green-500 dark:bg-green-600
                    text-white
                    px-2 py-1
                    rounded-lg
                    text-[10px] xs:text-xs sm:text-sm
                    font-semibold
                    opacity-90
                  "
                >
                  Millie
                </div>
              </div>
              <div
                className="
                  bg-gradient-to-r from-green-50 to-green-100
                  dark:from-green-900/30 dark:to-green-800/30
                  p-3 sm:p-4
                "
              >
                <p
                  className="
                  text-[10px] xs:text-xs sm:text-sm md:text-base
                  text-gray-700 dark:text-gray-300
                "
                >
                  The playful adventurer
                </p>
              </div>
            </li>

            {/* Bella */}
            <li
              ref={thirdCatRef}
              className="
                flex-shrink-0
                w-[250px] xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]
                rounded-xl
                overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                transform hover:scale-[1.02]
                border-2 border-transparent hover:border-purple-500
                dark:hover:border-purple-400
                group
              "
            >
              <div className="relative">
                <img
                  src="https://placecats.com/bella/199/200"
                  alt="Bella"
                  className="
                    w-full
                    h-[150px] xs:h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px]
                    object-cover
                    group-hover:brightness-110
                    transition-all duration-300
                  "
                />
                <div
                  className="
                    absolute top-2 left-2
                    bg-purple-500 dark:bg-purple-600
                    text-white
                    px-2 py-1
                    rounded-lg
                    text-[10px] xs:text-xs sm:text-sm
                    font-semibold
                    opacity-90
                  "
                >
                  Bella
                </div>
              </div>
              <div
                className="
                  bg-gradient-to-r from-purple-50 to-purple-100
                  dark:from-purple-900/30 dark:to-purple-800/30
                  p-3 sm:p-4
                "
              >
                <p
                  className="
                  text-[10px] xs:text-xs sm:text-sm md:text-base
                  text-gray-700 dark:text-gray-300
                "
                >
                  The elegant dreamer
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Instructions Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        p-4 sm:p-5
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        <h3
          className="
          text-[clamp(1rem,3vw,1.25rem)] sm:text-[clamp(1.125rem,3.5vw,1.5rem)]
          font-semibold
          text-gray-800 dark:text-white
          mb-3
          flex items-center gap-2
        "
        >
          <span className="text-blue-500 dark:text-blue-400">📌</span>
          How to use:
        </h3>

        <ul
          className="
          space-y-2
          text-[clamp(0.75rem,2vw,0.875rem)] sm:text-[clamp(0.875rem,2.5vw,1rem)]
          text-gray-600 dark:text-gray-400
        "
        >
          <li className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400">1.</span>
            <span>Click any cat button above (Neo, Millie, or Bella)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400">2.</span>
            <span>The page will smoothly scroll to that cat's image</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400">3.</span>
            <span>On mobile, you can also swipe horizontally to browse</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400">4.</span>
            <span>Each cat has a unique color theme and personality</span>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div
        className="
        mt-8 md:mt-10 lg:mt-12
        pt-4 md:pt-5 lg:pt-6
        border-t-2 border-gray-300 dark:border-gray-700
        text-center
        text-[clamp(0.625rem,1.5vw,0.875rem)]
        text-gray-500 dark:text-gray-400
      "
      >
        ✨ Scroll to any cat • Smooth scrolling with useRef
      </div>
    </div>
  );
}
