import React from "react";

function SyntheticEventButton() {
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={handleClick}>Synthetic Event Button</button>
    </div>
  );
}

export default SyntheticEventButton;
