import { useRef, useState } from "react";

export default function ManagingListOfRef() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) {
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
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
      overflow-hidden
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
          text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-bold
          text-gray-800 dark:text-white
          mb-3
          flex items-center justify-center gap-2 sm:gap-3
          whitespace-nowrap
        "
        >
          <span className="text-purple-500 dark:text-purple-400 flex-shrink-0">
            🐱
          </span>
          <span className="flex-shrink-0">Managing</span>
          <span className="flex-shrink-0">List</span>
          <span className="flex-shrink-0">of</span>
          <span className="flex-shrink-0">Refs</span>
        </h1>
        <p
          className="
          text-xs xs:text-sm sm:text-base md:text-lg
          text-gray-600 dark:text-gray-400
        "
        >
          Scroll to specific cat images using ref Map
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="
        grid grid-cols-2 xs:grid-cols-4
        gap-2 xs:gap-3 sm:gap-4
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <div
          className="
          p-2 xs:p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg xs:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg xs:text-xl sm:text-2xl mb-1">🐱</div>
          <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Total Cats
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-purple-600 dark:text-purple-400">
            {catList.length}
          </div>
        </div>
        <div
          className="
          p-2 xs:p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg xs:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg xs:text-xl sm:text-2xl mb-1">📦</div>
          <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            useRef
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-green-600 dark:text-green-400">
            Map
          </div>
        </div>
        <div
          className="
          p-2 xs:p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg xs:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg xs:text-xl sm:text-2xl mb-1">🔄</div>
          <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Scroll
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">
            Smooth
          </div>
        </div>
        <div
          className="
          p-2 xs:p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-lg xs:rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-lg xs:text-xl sm:text-2xl mb-1">⚡</div>
          <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Action
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-pink-600 dark:text-pink-400">
            Scroll
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav
        className="
        flex flex-col xs:flex-row
        items-center justify-center gap-3 xs:gap-4
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <button
          onClick={() => scrollToCat(catList[0])}
          className="
            w-full xs:w-auto
            px-6 xs:px-8 py-3 xs:py-4
            text-sm xs:text-base sm:text-lg
            font-semibold
            bg-gradient-to-r from-purple-500 to-purple-600
            hover:from-purple-600 hover:to-purple-700
            dark:from-purple-600 dark:to-purple-700
            dark:hover:from-purple-700 dark:hover:to-purple-800
            text-white
            rounded-lg xs:rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            relative
            overflow-hidden
            group
          "
        >
          <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative flex items-center gap-2">
            <span>🐱</span>
            Scroll to Neo
          </span>
        </button>
        <button
          onClick={() => scrollToCat(catList[5])}
          className="
            w-full xs:w-auto
            px-6 xs:px-8 py-3 xs:py-4
            text-sm xs:text-base sm:text-lg
            font-semibold
            bg-gradient-to-r from-pink-500 to-pink-600
            hover:from-pink-600 hover:to-pink-700
            dark:from-pink-600 dark:to-pink-700
            dark:hover:from-pink-700 dark:hover:to-pink-800
            text-white
            rounded-lg xs:rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            relative
            overflow-hidden
            group
          "
        >
          <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative flex items-center gap-2">
            <span>🐱</span>
            Scroll to Millie
          </span>
        </button>
        <button
          onClick={() => scrollToCat(catList[8])}
          className="
            w-full xs:w-auto
            px-6 xs:px-8 py-3 xs:py-4
            text-sm xs:text-base sm:text-lg
            font-semibold
            bg-gradient-to-r from-indigo-500 to-indigo-600
            hover:from-indigo-600 hover:to-indigo-700
            dark:from-indigo-600 dark:to-indigo-700
            dark:hover:from-indigo-700 dark:hover:to-indigo-800
            text-white
            rounded-lg xs:rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-200
            transform hover:scale-105
            flex items-center justify-center gap-2
            relative
            overflow-hidden
            group
          "
        >
          <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative flex items-center gap-2">
            <span>🐱</span>
            Scroll to Bella
          </span>
        </button>
      </nav>

      {/* Cat Gallery */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <h2
          className="
          text-base xs:text-lg sm:text-xl md:text-2xl
          font-semibold
          text-gray-800 dark:text-white
          mb-4
          flex items-center gap-2
        "
        >
          <span className="text-purple-500 dark:text-purple-400">📸</span>
          Cat Gallery
        </h2>

        <div
          className="
          relative
          overflow-x-auto
          rounded-xl
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          shadow-lg
          p-4
        "
        >
          <ul className="flex gap-4 min-w-max">
            {catList.map((cat) => (
              <li
                key={cat.id}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(cat, node);
                  }
                  return () => {
                    map.delete(cat);
                  };
                }}
                className="
                  relative
                  group/cat
                  transition-all duration-300
                  hover:scale-105
                "
              >
                <div
                  className="
                  relative
                  rounded-lg
                  overflow-hidden
                  shadow-md
                  border-2 border-transparent
                  hover:border-purple-500 dark:hover:border-purple-400
                  transition-all duration-300
                "
                >
                  <img
                    src={cat.imageUrl}
                    alt={`Cat ${cat.id}`}
                    className="
                      w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px]
                      h-[150px] xs:h-[180px] sm:h-[210px] md:h-[240px]
                      object-cover
                    "
                  />
                  <div
                    className="
                    absolute bottom-0 left-0 right-0
                    bg-gradient-to-t from-black/70 to-transparent
                    p-2
                    opacity-0 group-hover/cat:opacity-100
                    transition-opacity duration-300
                  "
                  >
                    <span
                      className="
                      text-white text-xs xs:text-sm
                      font-medium
                    "
                    >
                      Cat #{cat.id}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        p-4 xs:p-5 sm:p-6
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        <h3
          className="
          text-base xs:text-lg sm:text-xl md:text-2xl
          font-semibold
          text-gray-800 dark:text-white
          mb-4
          flex items-center gap-2
        "
        >
          <span className="text-purple-500 dark:text-purple-400 text-lg xs:text-xl sm:text-2xl">
            📚
          </span>
          How It Works
        </h3>

        <div
          className="
          space-y-3 xs:space-y-4
          text-xs xs:text-sm sm:text-base
          text-gray-600 dark:text-gray-400
        "
        >
          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-purple-100 dark:bg-purple-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-purple-600 dark:text-purple-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              1
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Create Ref Map:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-purple-600 dark:text-purple-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                const itemsRef = useRef(null);
              </code>
            </div>
          </div>

          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-purple-100 dark:bg-purple-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-purple-600 dark:text-purple-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              2
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Initialize Map:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-purple-600 dark:text-purple-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                itemsRef.current = new Map();
              </code>
            </div>
          </div>

          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-purple-100 dark:bg-purple-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-purple-600 dark:text-purple-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              3
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Store DOM Nodes:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-purple-600 dark:text-purple-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                map.set(cat, node);
              </code>
            </div>
          </div>

          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-purple-100 dark:bg-purple-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-purple-600 dark:text-purple-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              4
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Scroll to Cat:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-purple-600 dark:text-purple-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                node.scrollIntoView({"{"} behavior: "smooth" {"}"});
              </code>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div
          className="
          mt-6
          grid grid-cols-1 xs:grid-cols-2
          gap-3 xs:gap-4
        "
        >
          <div
            className="
            p-3 xs:p-4
            bg-green-50 dark:bg-green-900/20
            rounded-lg
            border border-green-200 dark:border-green-800
          "
          >
            <h4
              className="
              font-semibold text-green-700 dark:text-green-400
              mb-2
              flex items-center gap-2
              text-xs xs:text-sm sm:text-base
            "
            >
              <span>✅</span>
              Benefits
            </h4>
            <ul className="space-y-1 text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                <span>Dynamic ref collection</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                <span>No re-renders on scroll</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                <span>Clean cleanup on unmount</span>
              </li>
            </ul>
          </div>
          <div
            className="
            p-3 xs:p-4
            bg-blue-50 dark:bg-blue-900/20
            rounded-lg
            border border-blue-200 dark:border-blue-800
          "
          >
            <h4
              className="
              font-semibold text-blue-700 dark:text-blue-400
              mb-2
              flex items-center gap-2
              text-xs xs:text-sm sm:text-base
            "
            >
              <span>🎯</span>
              Use Cases
            </h4>
            <ul className="space-y-1 text-[10px] xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-1">
                <span className="text-blue-500">•</span>
                <span>Image carousels</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-500">•</span>
                <span>List navigation</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-500">•</span>
                <span>Tabbed interfaces</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        mt-8 md:mt-10 lg:mt-12
        pt-4 md:pt-5 lg:pt-6
        border-t-2 border-gray-300 dark:border-gray-700
        text-center
        text-[10px] xs:text-xs sm:text-sm
        text-gray-500 dark:text-gray-400
      "
      >
        ✨ Managing List of Refs • Dynamic DOM node collection with useRef
      </div>
    </div>
  );
}

function setupCatList() {
  const catCount = 10;
  const catList = new Array(catCount);
  for (let i = 0; i < catCount; i++) {
    let imageUrl = "";
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl,
    };
  }
  return catList;
}
