import DiceFirst from "./component/DiceFirst.jsx";
import { useState } from "react";
import MainGame from "./component/MainGame.jsx";

function App() {
  const [play, setPlay] = useState(false);

  // Corrected toggle function
  function handlePlay() {
    setPlay(true); // Set play to true to switch to MainGame
  }

  return (
    <>
      {/* {play ? <MainGame /> : <DiceFirst toggle={handlePlay} />} */}
      <MainGame/>
    </>
  );
}

export default App;
