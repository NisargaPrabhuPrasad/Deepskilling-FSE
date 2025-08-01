import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Rohit Sharma", score: 95 },
    { name: "Virat Kohli", score: 88 },
    { name: "Shubman Gill", score: 45 },
    { name: "Suryakumar Yadav", score: 72 },
    { name: "KL Rahul", score: 65 },
    { name: "Hardik Pandya", score: 82 },
    { name: "Ravindra Jadeja", score: 56 },
    { name: "R Ashwin", score: 33 },
    { name: "Mohammed Shami", score: 76 },
    { name: "Jasprit Bumrah", score: 41 },
    { name: "Kuldeep Yadav", score: 29 }
  ];

  const playerList = players.map((player, index) => (
    <li key={index}>
      {player.name} - {player.score}
    </li>
  ));

  const lowScorers = players
    .filter(player => player.score < 70)
    .map((player, index) => (
      <li key={index}>
        {player.name} - {player.score}
      </li>
    ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h2>Players with Score below 70</h2>
      <ul>{lowScorers}</ul>
    </div>
  );
}

export default ListofPlayers;
