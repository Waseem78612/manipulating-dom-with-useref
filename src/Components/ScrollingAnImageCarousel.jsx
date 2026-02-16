import { useState, useRef } from "react";

export default function ScrollingAnImageCarousel() {
  const [index, setIndex] = useState(0);
  const imageRefs = useRef([]);

  function handleNext() {
    const nextIndex = index < catList.length - 1 ? index + 1 : 0;
    setIndex(nextIndex);

    // Scroll the active image into view
    imageRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handlePrevious() {
    const prevIndex = index > 0 ? index - 1 : catList.length - 1;
    setIndex(prevIndex);

    // Scroll the active image into view
    imageRefs.current[prevIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div
      className="
      min-h-fit h-auto max-h-full
      w-full max-w-7xl mx-auto
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
          <span className="text-purple-500 dark:text-purple-400">🎠</span>
          <span>Image</span>
          <span>Carousel</span>
          <span>with</span>
          <span>Scroll</span>
        </h1>
        <p
          className="
          text-[clamp(0.75rem,2.5vw,1.125rem)]
          text-gray-600 dark:text-gray-400
        "
        >
          Smooth scrolling image carousel with navigation controls
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
          <div className="text-lg sm:text-2xl mb-1">📸</div>
          <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">
            Images
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-purple-600 dark:text-purple-400">
            {catList.length}
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
            {catList.length}
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
            Current
          </div>
          <div className="text-xs sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">
            #{index + 1}
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
            Scroll
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className="
        flex flex-wrap justify-center gap-3 sm:gap-4
        mb-6 sm:mb-8
      "
      >
        <button
          onClick={handlePrevious}
          className="
            flex-1 sm:flex-none
            px-4 sm:px-6 py-2 sm:py-3
            text-[clamp(0.75rem,2vw,0.875rem)] sm:text-[clamp(0.875rem,2.5vw,1rem)]
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
          "
        >
          <span className="text-base sm:text-lg">⬅️</span>
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="
            flex-1 sm:flex-none
            px-4 sm:px-6 py-2 sm:py-3
            text-[clamp(0.75rem,2vw,0.875rem)] sm:text-[clamp(0.875rem,2.5vw,1rem)]
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
          "
        >
          <span>Next</span>
          <span className="text-base sm:text-lg">➡️</span>
        </button>
      </div>

      {/* Mobile swipe indicator */}
      <div
        className="
        flex justify-center
        mb-4
        sm:hidden
      "
      >
        <span
          className="
          text-[10px] xs:text-xs
          text-gray-500 dark:text-gray-400
          animate-pulse
        "
        >
          ← Swipe to browse images →
        </span>
      </div>

      {/* Carousel Container */}
      <div
        className="
        relative
        w-full
        mb-6 sm:mb-8
      "
      >
        <div
          className="
          overflow-x-auto
          scroll-smooth
          pb-4 sm:pb-6
          rounded-xl
          bg-gradient-to-br from-gray-50 to-gray-100
          dark:from-gray-800 dark:to-gray-900
          p-3 sm:p-4
          shadow-inner
          scrollbar-thin scrollbar-thumb-purple-300 dark:scrollbar-thumb-purple-600
        "
        >
          <ul
            className="
            flex gap-3 sm:gap-4 md:gap-5
            min-w-max
          "
          >
            {catList.map((cat, i) => (
              <li
                key={cat.id}
                className="
                transition-all duration-300
                transform hover:scale-105
              "
              >
                <div
                  className={`
                  relative
                  rounded-xl
                  overflow-hidden
                  shadow-lg hover:shadow-2xl
                  ${
                    index === i
                      ? "ring-4 ring-purple-500 dark:ring-purple-400 scale-105 shadow-purple-200 dark:shadow-purple-900/50"
                      : "opacity-75 hover:opacity-100"
                  }
                  transition-all duration-300
                `}
                >
                  <img
                    ref={(el) => (imageRefs.current[i] = el)}
                    className={`
                    w-[180px] xs:w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px]
                    h-[130px] xs:h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]
                    object-cover
                  `}
                    src={cat.imageUrl}
                    alt={`Cat #${cat.id + 1}`}
                  />

                  {/* Cat number badge */}
                  <div
                    className="
                    absolute top-2 left-2
                    bg-black/50 backdrop-blur-sm
                    text-white
                    px-2 py-1
                    rounded-full
                    text-[8px] xs:text-[10px] sm:text-xs
                    font-bold
                    border border-white/20
                  "
                  >
                    #{cat.id + 1}
                  </div>

                  {/* Active indicator */}
                  {index === i && (
                    <div
                      className="
                      absolute top-2 right-2
                      bg-purple-500 text-white
                      px-2 py-1
                      rounded-full
                      text-[8px] xs:text-[10px] sm:text-xs
                      font-bold
                      shadow-lg
                      animate-pulse
                      flex items-center gap-1
                    "
                    >
                      <span
                        className="
                        w-1.5 h-1.5
                        bg-white rounded-full
                        animate-ping
                      "
                      ></span>
                      <span>Active</span>
                    </div>
                  )}

                  {/* Image counter overlay on hover */}
                  <div
                    className="
                    absolute bottom-0 left-0 right-0
                    bg-gradient-to-t from-black/70 to-transparent
                    p-2 sm:p-3
                    opacity-0 hover:opacity-100
                    transition-opacity duration-300
                  "
                  >
                    <p
                      className="
                      text-white
                      text-[8px] xs:text-[10px] sm:text-xs
                    "
                    >
                      Cat {cat.id + 1} • {cat.breed || "Mixed"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Controls and Info Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        mb-6 sm:mb-8
        p-3 sm:p-4
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        <div
          className="
          flex flex-col sm:flex-row
          items-center justify-between gap-3 sm:gap-4
        "
        >
          {/* Image Counter Dots */}
          <div
            className="
            flex items-center gap-2 sm:gap-3
          "
          >
            <span
              className="
              text-[10px] xs:text-xs sm:text-sm
              font-medium
              text-gray-700 dark:text-gray-300
            "
            >
              Jump to:
            </span>
            <div
              className="
              flex items-center gap-1 sm:gap-2
            "
            >
              {catList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    imageRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }}
                  className={`
                  transition-all duration-300
                  rounded-full
                  ${
                    index === i
                      ? "bg-purple-500 w-3 h-3 sm:w-4 sm:h-4"
                      : "bg-gray-300 dark:bg-gray-600 w-2 h-2 sm:w-3 sm:h-3 hover:bg-purple-300 dark:hover:bg-purple-700"
                  }
                `}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Current Image Counter */}
          <div
            className="
            text-[10px] xs:text-xs sm:text-sm md:text-base
            bg-purple-100 dark:bg-purple-900/30
            text-purple-700 dark:text-purple-300
            px-3 py-1 sm:px-4 sm:py-2
            rounded-full
            font-semibold
          "
          >
            Image {index + 1} of {catList.length}
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        p-3 sm:p-4
        bg-purple-50 dark:bg-purple-900/20
        rounded-xl
        border border-purple-200 dark:border-purple-800
        shadow-lg
      "
      >
        <p
          className="
          text-[10px] xs:text-xs sm:text-sm md:text-base
          font-medium
          text-purple-800 dark:text-purple-300
          mb-2
          flex items-center gap-2
        "
        >
          <span className="text-base sm:text-lg">ℹ️</span>
          <span>How to use this carousel:</span>
        </p>
        <ul
          className="
          list-disc list-inside
          space-y-1
          text-[8px] xs:text-[10px] sm:text-xs md:text-sm
          text-purple-700 dark:text-purple-400
        "
        >
          <li>Click "Previous" or "Next" buttons to navigate</li>
          <li>Swipe horizontally on mobile to browse images</li>
          <li>Click the dots below to jump to specific images</li>
          <li>Active image is highlighted with a purple ring</li>
          <li>The carousel automatically scrolls to the active image</li>
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
        ✨ Image Carousel • Smooth scrolling with useRef
      </div>
    </div>
  );
}

// Generate cat images with breeds
const catCount = 10;
const catList = new Array(catCount);
const breeds = [
  "Neo",
  "Millie",
  "Bella",
  "Luna",
  "Simba",
  "Chloe",
  "Oliver",
  "Milo",
  "Lucy",
  "Charlie",
];

for (let i = 0; i < catCount; i++) {
  const bucket = Math.floor(Math.random() * catCount) % 3;
  let imageUrl = "";
  switch (bucket) {
    case 0: {
      imageUrl = "https://placecats.com/neo/350/300";
      break;
    }
    case 1: {
      imageUrl = "https://placecats.com/millie/350/300";
      break;
    }
    case 2:
    default: {
      imageUrl = "https://placecats.com/bella/350/300";
      break;
    }
  }
  catList[i] = {
    id: i,
    imageUrl,
    breed: breeds[i % breeds.length],
  };
}
