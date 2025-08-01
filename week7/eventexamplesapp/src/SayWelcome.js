import React from "react";

function SayWelcome() {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
    </div>
  );
}

export default SayWelcome;
