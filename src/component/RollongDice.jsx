import { useState } from "react";

function RollingDice({ onDiceRoll }) {
  const [currentDice, setCurrentDice] = useState(1);

  // Generate a random number between min and max (inclusive)
  const generateNo = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Roll the dice and send the result to the parent component
  const rollDice = () => {
    const randomNo = generateNo(1, 6); // Dice numbers: 1 to 6
    setCurrentDice(randomNo);
    if (onDiceRoll) {
      onDiceRoll(randomNo); // Send rolled number to parent (if callback exists)
    }
  };

  return (
    <div className="diceImageContainer">
      <img
        onClick={rollDice}
        src={`/${currentDice}.png`} // Use relative path directly
        alt={`Dice showing ${currentDice}`}
        className="diceImage"
      />
      <p className="diceText">Click Dice to Roll</p>
    </div>
  );
}

export default RollingDice;
