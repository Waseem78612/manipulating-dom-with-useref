import { useState, useRef } from "react";

export default function PlayAndPauseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div
      className="
      min-h-fit h-auto max-h-full
      w-full max-w-4xl mx-auto
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
          text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-bold
          text-gray-800 dark:text-white
          mb-3
          flex items-center justify-center gap-2 sm:gap-3
          whitespace-nowrap
        "
        >
          <span className="text-blue-500 dark:text-blue-400 flex-shrink-0">
            🎬
          </span>
          <span className="flex-shrink-0">Play</span>
          <span className="flex-shrink-0">&</span>
          <span className="flex-shrink-0">Pause</span>
          <span className="flex-shrink-0">Video</span>
        </h1>
        <p
          className="
          text-xs xs:text-sm sm:text-base md:text-lg
          text-gray-600 dark:text-gray-400
        "
        >
          Control video playback with useRef
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
          <div className="text-lg xs:text-xl sm:text-2xl mb-1">🎬</div>
          <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Video
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">
            Flower
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
            Active
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
            State
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-purple-600 dark:text-purple-400">
            {isPlaying ? "Playing" : "Paused"}
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
            {isPlaying ? "Pause" : "Play"}
          </div>
        </div>
      </div>

      {/* Video Player Section */}
      <div
        className="
        min-h-fit h-auto max-h-full
        w-full
        mb-8 md:mb-10 lg:mb-12
        p-4 xs:p-5 sm:p-6 md:p-8
        bg-white dark:bg-gray-800
        rounded-xl
        border border-gray-200 dark:border-gray-700
        shadow-lg
      "
      >
        {/* Control Button */}
        <div className="mb-6 xs:mb-8">
          <button
            onClick={handleClick}
            className={`
              w-full
              px-6 xs:px-8 py-4 xs:py-5
              text-base xs:text-lg sm:text-xl md:text-2xl
              font-semibold
              rounded-xl
              shadow-lg hover:shadow-xl
              transition-all duration-200
              transform hover:scale-105
              flex items-center justify-center gap-3 xs:gap-4
              relative
              overflow-hidden
              group
              ${
                isPlaying
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 dark:from-yellow-600 dark:to-yellow-700 dark:hover:from-yellow-700 dark:hover:to-yellow-800"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800"
              }
              text-white
            `}
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

            <span className="relative flex items-center gap-3 xs:gap-4">
              <span className="text-2xl xs:text-3xl sm:text-4xl">
                {isPlaying ? "⏸️" : "▶️"}
              </span>
              <span className="text-lg xs:text-xl sm:text-2xl">
                {isPlaying ? "Pause Video" : "Play Video"}
              </span>
            </span>
          </button>
        </div>

        {/* Video Container */}
        <div
          className="
          relative
          rounded-xl
          overflow-hidden
          shadow-2xl
          border-2 border-gray-200 dark:border-gray-700
          bg-black
        "
        >
          <video
            ref={videoRef}
            className="
              w-full
              aspect-video
              object-cover
            "
            loop
            playsInline
            controls={false}
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div
            className="
            absolute inset-0
            bg-gradient-to-t from-black/50 to-transparent
            pointer-events-none
          "
          ></div>

          {/* Status Badge */}
          <div
            className={`
            absolute bottom-4 right-4 xs:bottom-6 xs:right-6
            px-3 xs:px-4 py-1.5 xs:py-2
            rounded-full
            text-xs xs:text-sm font-medium
            transition-all duration-200
            shadow-lg
            ${
              isPlaying
                ? "bg-green-500 dark:bg-green-600"
                : "bg-yellow-500 dark:bg-yellow-600"
            }
            text-white
            flex items-center gap-2
          `}
          >
            <span
              className={`
              w-2 h-2
              rounded-full
              ${isPlaying ? "bg-white animate-pulse" : "bg-white/50"}
            `}
            ></span>
            {isPlaying ? "Playing" : "Paused"}
          </div>

          {/* Time Indicator */}
          <div
            className="
            absolute bottom-4 left-4 xs:bottom-6 xs:left-6
            px-3 xs:px-4 py-1.5 xs:py-2
            rounded-full
            bg-black/50
            text-white
            text-xs xs:text-sm
            backdrop-blur-sm
          "
          >
            {isPlaying ? "Live" : "Stopped"}
          </div>
        </div>

        {/* Video Info */}
        <div
          className="
          mt-4 xs:mt-6
          p-3 xs:p-4
          bg-gray-50 dark:bg-gray-900/50
          rounded-lg
          border border-gray-200 dark:border-gray-700
          text-xs xs:text-sm
          text-gray-600 dark:text-gray-400
          flex items-center justify-between
        "
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🌸</span>
            <span>Flower Blooming in Time Lapse</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <span>0:15 / 0:15</span>
          </div>
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
          <span className="text-blue-500 dark:text-blue-400 text-lg xs:text-xl sm:text-2xl">
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
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              1
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Create State & Ref:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                const [isPlaying, setIsPlaying] = useState(false); const
                videoRef = useRef(null);
              </code>
            </div>
          </div>

          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              2
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Attach Ref to Video:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                &lt;video ref={"{"}videoRef{"}"} /&gt;
              </code>
            </div>
          </div>

          <div className="flex items-start gap-2 xs:gap-3">
            <div
              className="
              w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7
              bg-blue-100 dark:bg-blue-900/30
              rounded-full
              flex items-center justify-center
              flex-shrink-0
              text-blue-600 dark:text-blue-400
              font-bold text-xs xs:text-sm sm:text-base
            "
            >
              3
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">
                Control Playback:
              </span>
              <code
                className="
                block mt-1
                px-2 xs:px-3 py-1 xs:py-2
                bg-gray-100 dark:bg-gray-700
                rounded-lg
                text-blue-600 dark:text-blue-400
                font-mono text-[10px] xs:text-xs sm:text-sm
              "
              >
                {`if (nextIsPlaying) { videoRef.current.play(); }`}
                <br />
                {`else { videoRef.current.pause(); }`}
              </code>
            </div>
          </div>
        </div>

        {/* Key Points */}
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
                <span>Direct DOM control</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                <span>Smooth playback</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                <span>State sync with UI</span>
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
                <span>Video players</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-500">•</span>
                <span>Audio controls</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-500">•</span>
                <span>Animation control</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Note */}
        <div
          className="
          mt-4
          p-3 xs:p-4
          bg-yellow-50 dark:bg-yellow-900/20
          rounded-lg
          border border-yellow-200 dark:border-yellow-800
          text-xs xs:text-sm
          text-yellow-700 dark:text-yellow-300
        "
        >
          <span className="font-bold">💡 Note:</span> The video loops
          continuously. Click play/pause to control playback without
          re-rendering the video element.
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
        ✨ Play & Pause Video • Direct DOM manipulation with useRef
      </div>
    </div>
  );
}
