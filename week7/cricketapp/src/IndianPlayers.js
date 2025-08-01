import React from "react";

function IndianPlayers() {
  // Odd & Even team players using destructuring
  const teamPlayers = ["Rohit", "Virat", "Gill", "Surya", "Rahul", "Hardik"];
  
  const [odd1, even1, odd2, even2, odd3, even3] = teamPlayers;

  // Merge feature of ES6
  const T20players = ["Rohit", "Virat", "Surya"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Jadeja"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
