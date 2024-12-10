import React from "react";
import pic from "/home/sheikh/react/DiceGame/src/assets/dice.webp";
function DiceFirst({toggle}) {
  return (
    <div
      className="firstPage"
      style={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to bottom, #87cefa, #ffffff)",
      }}
    >
      <div className="pic">
        <img
          src={pic}
          alt="Rolling Dice"
          style={{ height: "875px", width: "875px" }}
        />
      </div>
      <div className="content">
        <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#2c3e50", margin:"0px 0px 20px 20px"}}>
          Welcome to Dice Game
        </h1>
        <button
        onClick={toggle}
          style={{
            backgroundColor: "#3498db", // Blue color
            color: "#ffffff", // White text
            border: "none", // Remove default border
            borderRadius: "10px", // Rounded corners
            padding: "10px 20px", // Padding for the button
            fontSize: "1.2rem", // Font size
            fontWeight: "bold", // Bold text
            cursor: "pointer", // Pointer cursor on hover
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
            transition: "all 0.3s ease", // Smooth hover transition
            margin:"0px 0px 20px 20px"
          }}
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default DiceFirst;
