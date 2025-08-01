import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  // flag is a state variable, starts as true
  const [flag, setFlag] = useState(true);

  // Function to toggle between true/false
  const toggleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <h1>Cricket App</h1>
      <button onClick={toggleFlag}>
        {flag ? "Show Indian Players" : "Show List of Players"}
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
