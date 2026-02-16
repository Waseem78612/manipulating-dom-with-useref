import { useRef } from "react";

export default function FocusingTextInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div
      className="
      min-h-fit h-auto max-h-full
      w-full max-w-2xl mx-auto
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
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold
          text-gray-800 dark:text-white
          mb-3
          flex items-center justify-center gap-3
        "
        >
          <span className="text-blue-500 dark:text-blue-400">🎯</span>
          Focusing Text Input with useRef
        </h1>
        <p
          className="
          text-sm sm:text-base md:text-lg
          text-gray-600 dark:text-gray-400
        "
        >
          Direct DOM access to focus input elements
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-4
        gap-3 sm:gap-4
        mb-8 md:mb-10 lg:mb-12
      "
      >
        <div
          className="
          p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-xl sm:text-2xl mb-1">🎯</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Target
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
            Input
          </div>
        </div>
        <div
          className="
          p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-xl sm:text-2xl mb-1">🔄</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Re-renders
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold text-green-600 dark:text-green-400">
            0
          </div>
        </div>
        <div
          className="
          p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-xl sm:text-2xl mb-1">📦</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            useRef
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">
            Active
          </div>
        </div>
        <div
          className="
          p-3 sm:p-4
          bg-white dark:bg-gray-800
          rounded-xl
          border border-gray-200 dark:border-gray-700
          shadow-md
          text-center
          hover:shadow-lg transition-shadow
        "
        >
          <div className="text-xl sm:text-2xl mb-1">⚡</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Action
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold text-pink-600 dark:text-pink-400">
            Focus
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        mb-8 md:mb-10 lg:mb-12
        p-4 sm:p-5 md:p-6
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        <h2
          className="
          text-lg sm:text-xl md:text-2xl font-semibold
          text-gray-800 dark:text-white
          mb-6
          flex items-center gap-2
        "
        >
          <span className="text-blue-500 dark:text-blue-400">🎮</span>
          Interactive Demo
        </h2>

        {/* Input Field */}
        <div className="mb-6">
          <label
            className="
            block
            text-sm sm:text-base font-medium
            text-gray-700 dark:text-gray-300
            mb-2
          "
          >
            Click the button to focus this input:
          </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type something here..."
            className="
              w-full
              px-4 py-3 sm:px-5 sm:py-4
              text-sm sm:text-base
              bg-gray-50 dark:bg-gray-900
              text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              border border-gray-300 dark:border-gray-600
              rounded-lg
              focus:outline-none focus:ring-2
              focus:ring-blue-500 dark:focus:ring-blue-400
              focus:border-transparent
              transition-all duration-200
            "
          />
        </div>

        {/* Focus Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="
              w-full sm:w-auto
              px-8 sm:px-10 py-4 sm:py-5
              text-base sm:text-lg font-semibold
              bg-gradient-to-r from-blue-500 to-blue-600
              hover:from-blue-600 hover:to-blue-700
              dark:from-blue-600 dark:to-blue-700
              dark:hover:from-blue-700 dark:hover:to-blue-800
              text-white
              rounded-xl
              shadow-lg hover:shadow-xl
              transition-all duration-200
              transform hover:scale-105
              flex items-center justify-center gap-3
              relative
              overflow-hidden
              group
            "
          >
            {/* Animated background effect */}
            <span
              className="
              absolute inset-0
              bg-white/20
              transform -translate-x-full
              group-hover:translate-x-full
              transition-transform duration-700
            "
            ></span>

            <span className="relative flex items-center gap-3">
              <span>🎯</span>
              Focus Input
            </span>
          </button>
        </div>

        {/* Current Status */}
        <div
          className="
          mt-6
          flex items-center gap-2
          text-xs sm:text-sm
          text-gray-500 dark:text-gray-400
          p-3
          bg-gray-50 dark:bg-gray-900/50
          rounded-lg
          border border-gray-200 dark:border-gray-700
        "
        >
          <span
            className="
            w-2 h-2
            bg-green-500
            rounded-full
            animate-pulse
          "
          ></span>
          Ready to focus • No re-renders when focusing
        </div>
      </div>

      {/* How It Works Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        p-4 sm:p-5 md:p-6
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        <h3
          className="
          text-lg sm:text-xl font-semibold
          text-gray-800 dark:text-white
          mb-4
          flex items-center gap-2
        "
        >
          <span className="text-blue-500 dark:text-blue-400">📚</span>
          How useRef Works
        </h3>

        <div
          className="
          space-y-4
          text-sm sm:text-base
          text-gray-600 dark:text-gray-400
        "
        >
          <div className="flex items-start gap-3">
            <div
              className="
              w-6 h-6 sm:w-7 sm:h-7
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-sm sm:text-base
            "
            >
              1
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Create Ref:
              </span>
              <code
                className="
                block mt-1
                px-3 py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-xs sm:text-sm
              "
              >
                const inputRef = useRef(null);
              </code>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="
              w-6 h-6 sm:w-7 sm:h-7
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-sm sm:text-base
            "
            >
              2
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Attach to DOM:
              </span>
              <code
                className="
                block mt-1
                px-3 py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-xs sm:text-sm
              "
              >
                &lt;input ref={"{"}inputRef{"}"} /&gt;
              </code>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="
              w-6 h-6 sm:w-7 sm:h-7
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-sm sm:text-base
            "
            >
              3
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Focus Input:
              </span>
              <code
                className="
                block mt-1
                px-3 py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-xs sm:text-sm
              "
              >
                inputRef.current.focus();
              </code>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div
          className="
          mt-6
          grid grid-cols-1 sm:grid-cols-2
          gap-4
        "
        >
          <div
            className="
            p-4
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
            "
            >
              <span>✅</span>
              Benefits
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>No re-renders on focus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Direct DOM access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Persists between renders</span>
              </li>
            </ul>
          </div>
          <div
            className="
            p-4
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
            "
            >
              <span>🎯</span>
              Use Cases
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Focus management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Text selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Media playback</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Note */}
        <div
          className="
          mt-4
          p-4
          bg-yellow-50 dark:bg-yellow-900/20
          rounded-lg
          border border-yellow-200 dark:border-yellow-800
          text-xs sm:text-sm
          text-yellow-700 dark:text-yellow-300
        "
        >
          <span className="font-bold">💡 Note:</span> useRef doesn't trigger
          re-renders when its value changes. It's perfect for DOM manipulation
          without affecting component state.
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        mt-8 md:mt-10 lg:mt-12
        pt-4 md:pt-5 lg:pt-6
        border-t-2 border-gray-300 dark:border-gray-700
        text-center
        text-xs sm:text-sm
        text-gray-500 dark:text-gray-400
      "
      >
        ✨ Focusing Text Input • Direct DOM manipulation with useRef
      </div>
    </div>
  );
}
