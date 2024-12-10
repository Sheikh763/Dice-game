import { useState } from "react";
import RollingDice from "/home/sheikh/react/DiceGame/src/component/RollongDice.jsx";
import "./mainGame.css";

function MainGame() {
  const diceNumbers = [1, 2, 3, 4, 5, 6]; // Array for dice options
  const [selectedNo, setSelectedNo] = useState(0); // Selected number from dice
  const [score, setScore] = useState(0); // Total score

  // Function to handle the roll result sent from RollingDice
  const handleRollResult = (rolledNo) => {
    // Check if the rolled number matches the selected number
    if (rolledNo === selectedNo) {
      setScore((prevScore) => prevScore + 1); // Increment score on match
    } else if (selectedNo !== 0) {
      setScore((prevScore) => prevScore - 1); // Decrement score on mismatch
    }
  };

  return (
    <>
      <div className="mainBody">
        <div className="firstRow">
          <div className="score">
            <div className="currentscore">Score: {score}</div>
            <div className="totalscore">Match the Dice!</div>
          </div>
          <div className="dice">
            {diceNumbers.map((value, i) => (
              <button
                key={i}
                style={{
                  backgroundColor: value === selectedNo ? "green" : "#3498db",
                }}
                onClick={() => setSelectedNo(value)} // Set the selected number
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* RollingDice Component */}
        <RollingDice onDiceRoll={handleRollResult} />
      </div>
    </>
  );
}

export default MainGame;
