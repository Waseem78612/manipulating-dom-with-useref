import "./App.css";
import FocusingTextInput from "./Components/FocusingTextInput";
import ScrolingToAnElement from "./Components/ScrolingToAnElement";
import ManagingListOfRef from "./Components/ManagingListOfRef";

import PlayAndPauseVideo from "./Components/PlayAndPauseVideo";
import FocusSearchField from "./Components/FocusSearchField";
import ScrollingAnImageCarousel from "./Components/ScrollingAnImageCarousel";

function App() {
  return (
    <>
      <h1
        className="
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
  font-bold
  text-gray-800 dark:text-gray-100
  text-center
  mb-4 sm:mb-6 md:mb-8
"
      >
        Manipulating Dom With{" "}
        <code
          className="
    bg-gray-100 dark:bg-gray-700
    px-2 py-1 rounded-lg
    text-blue-600 dark:text-blue-400
    font-mono
    text-base sm:text-lg md:text-xl lg:text-2xl
  "
        >
          useRef()
        </code>
      </h1>
      <FocusingTextInput />
      <ScrolingToAnElement />
      <ManagingListOfRef />

      <PlayAndPauseVideo />
      <FocusSearchField />
      <ScrollingAnImageCarousel />
    </>
  );
}

export default App;
